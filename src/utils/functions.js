import emailjs from '@emailjs/browser';

export function cn(...classes) {
	return classes.filter(Boolean).join(' ');
}


export const takeScreenshot = () => {
	const link = document.createElement('a')
	link.setAttribute('download', 'bmw-config.png')
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


export const sendEmail = async ({ email, name, message }) => {
	const serviceKey = import.meta.env.VITE_EMAILJS_SERVICE_KEY
	const templateKey = import.meta.env.VITE_EMAILJS_TEMPLATE_KEY
	const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY
	emailjs
		.send(serviceKey, templateKey, {
			name, email, message
		}, publicKey)
		.then(
			() => {
				toast.success('Email sent!');
			},
			(err) => {
				toast.error('Error sending email..');
				console.log(err);
			}
		)
}

import { useGLTF } from '@react-three/drei';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';
import { MeshoptDecoder } from 'three/examples/jsm/libs/meshopt_decoder.module.js';
import { toast } from 'react-toastify';

export const useCustomGLTF = (url) => {
	const dracoLoader = new DRACOLoader();
	dracoLoader.setDecoderPath('./draco-files/');

	const gltf = useGLTF(url, true, {
		dracoLoader: dracoLoader,
		meshoptDecoder: MeshoptDecoder
	});

	return gltf;
};
