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

export const sendEmail = async ({ email, name, message }) => {
	const { data, error } = await resend.emails.send({
		from: email,
		to: ['anselumjuju@gmail.com'],
		subject: `${name} Reached Out via BMW Config`,
		html: `<p>${message}</p>`
	})
	if (error) return console.log(error);
	console.log(data);
}


