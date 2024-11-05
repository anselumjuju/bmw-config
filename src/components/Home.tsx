import { useState } from "react";
import { BiDownload } from "react-icons/bi";
import { FiShare2 } from "react-icons/fi";
import { GoMail } from "react-icons/go";
import { LuMoveRight } from "react-icons/lu";
import { openShare, takeScreenshot } from "../utils/functions";


function Home({ onConfigure }: { onConfigure: () => void }) {
	const [isEmailModal, setIsEmailModal] = useState(false);
	const toogleEmailModal = () => setIsEmailModal(!isEmailModal);
	return (
		<div className="w-[90%] h-full mx-auto py-[5vh] flex items-center justify-between flex-col">

			<div className="w-full flex items-center justify-between font-medium">
				<div className="space-y-1 text-4xl md:text-6xl">
					<p>BMW<span className="font-light text-2xl md:text-3xl text-nowrap ml-1">M4 CSL</span></p>
					<p className="text-sm md:text-lg font-light text-neutral-500">Race inspired unique design</p>
				</div>
				<div
					className="hidden md:block text-base bg-neutral-800 text-white py-3 px-8 rounded-lg cursor-pointer *:text-nowrap font-normal hover:bg-neutral-700 transition-all duration-200"
					onClick={toogleEmailModal}
				>
					<p>Get in touch</p>
				</div>
			</div>

			<div className="w-full flex items-end justify-between">
				<div className="w-max flex flex-col items-center justify-start gap-3">
					<div className="p-3 rounded-full grid place-content-center md:hidden bg-white/30 text-2xl text-neutral-500 cursor-pointer hover:text-neutral-800 transition-all duration-200" onClick={toogleEmailModal}><GoMail /></div>
					<div className="p-3 rounded-full grid place-content-center md:hidden bg-white/30 text-2xl text-neutral-500 cursor-pointer hover:text-neutral-800 transition-all duration-200" onClick={takeScreenshot}><BiDownload /></div>
					<div className="p-3 rounded-full grid place-content-center md:hidden bg-white/30 text-2xl text-neutral-500 cursor-pointer hover:text-neutral-800 transition-all duration-200" onClick={openShare}><FiShare2 /></div>
				</div>
				<div className="w-max h-max p-1 px-2 pl-8 flex items-end md:items-center justify-end flex-col md:flex-row gap-x-6 gap-y-3 rounded-lg md:bg-white/20">
					<div className="w-full -space-y-1 text-2xl text-right">
						<p className="text-lg font-normal text-neutral-500">Total</p>
						<p><span className="font-light text-lg text-nowrap">$ </span>140,895</p>
					</div>
					<div
						className="hidden md:grid p-3 rounded-full  place-content-center bg-white/30 text-2xl text-neutral-500 cursor-pointer hover:text-neutral-800 transition-all duration-200"
						onClick={takeScreenshot}
					>
						<BiDownload />
					</div>
					<div
						className="hidden md:grid p-3 rounded-full  place-content-center bg-white/30 text-2xl text-neutral-500 cursor-pointer hover:text-neutral-800 transition-all duration-200"
						onClick={openShare}
					>
						<FiShare2 />
					</div>
					<button
						className="text-sm md:text-lg bg-neutral-800 text-white py-3 px-6 md:px-8 rounded-lg flex items-center hover:bg-neutral-700 transition-all duration-200 group"
						onClick={onConfigure}
					>
						<p>Configure</p>
						<span className="text-[0px] group-hover:text-xl md:pt-1.5 group-hover:pl-6 transition-all duration-200"><LuMoveRight /></span>
					</button>
				</div>
			</div>

		</div>
	);
}

export default Home;
