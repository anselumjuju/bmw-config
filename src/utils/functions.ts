import { Resend } from 'resend';

export const takeScreenshot = () => {
	const link = document.createElement('a')
	link.setAttribute('download', 'canvas.png')
	link.setAttribute('href', document.querySelector('canvas')!.toDataURL('image/png').replace('image/png', 'image/octet-stream'))
	link.click()
};

export const openShare = async () => {
	if (navigator.share) {
		try {
			await navigator.share({
				title: 'Check out this project!',
				text: 'Have a look at this project I created!',
				url: window.location.href,
			});
		} catch (error) {
			console.error('Error sharing:', error);
		}
	} else {
		alert('Share feature is not supported in your browser.');
	}
};


const resend = new Resend(import.meta.env.VITE_RESEND_API);

export const sendEmail = ({ from, subject, message }: { from: string, subject: string, message: string }) => {
	resend.emails.send({
		from: from,
		to: 'anselumjuju@gmail.com',
		subject: subject,
		html: `<p>${message}</p>`
	})
}