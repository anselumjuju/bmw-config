import { Resend } from 'resend';

export const takeScreenshot = () => {
	const link = document.createElement('a')
	link.setAttribute('download', 'canvas.png')
	link.setAttribute('href', document.querySelector('canvas').toDataURL('image/png').replace('image/png', 'image/octet-stream'))
	link.click()
};

export const openShare = async () => {
	if (navigator.share) {
		try {
			await navigator.share({
				title: 'BMW Configurator',
				url: 'https://bmw-config.vercel.app/',
			});
		} catch (err) {
			console.log(err);
		}
	}
};


const resend = new Resend(import.meta.env.VITE_RESEND_API);

export const sendEmail = ({ from, subject, message }) => {
	resend.emails.send({
		from: from,
		to: 'anselumjuju@gmail.com',
		subject: subject,
		html: `<p>${message}</p>`
	})
}