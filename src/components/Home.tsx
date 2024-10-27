import { BiDownload } from "react-icons/bi";
import { FiShare2 } from "react-icons/fi";
import { LuMoveRight } from "react-icons/lu";

function Home({ onConfigure }: { onConfigure: () => void }) {
	return (
		<div className="w-[90%] h-full mx-auto py-[5vh] flex items-center justify-between flex-col">

			<div className="w-full flex items-center justify-between font-medium">
				<div className="space-y-1 text-6xl">
					<p>BMW<span className="font-light text-3xl text-nowrap ml-1">M4 CSL</span></p>
					<p className="text-lg font-light text-neutral-500">Race inspired unique design</p>
				</div>
				<div
					className="text-lg bg-neutral-800 text-white py-3 px-8 rounded-lg cursor-pointer *:text-nowrap font-normal hover:bg-neutral-700 transition-all duration-200"
				>
					<a href="mailto:anselumjuju@gmail.com">Get in touch</a>
				</div>
			</div>

			<div className="w-full flex items-center justify-end">
				<div className="w-max h-max p-2 flex items-center justify-end gap-6 rounded-full bg-white/20">
					<div className="w-full pl-8 -space-y-1 text-2xl">
						<p className="text-lg font-normal text-neutral-500 text-right">Total</p>
						<p><span className="font-light text-lg text-nowrap">$ </span>140,895</p>
					</div>
					<div className="p-3 rounded-full grid place-content-center bg-white/30 text-2xl text-neutral-400 cursor-pointer hover:text-neutral-600 transition-all duration-200"><BiDownload /></div>
					<div className="p-3 rounded-full grid place-content-center bg-white/30 text-2xl text-neutral-400 cursor-pointer hover:text-neutral-600 transition-all duration-200"><FiShare2 /></div>
					<button
						className="text-lg bg-neutral-800 text-white py-3 px-8 rounded-full flex items-center hover:bg-neutral-700 transition-all duration-200 group"
						onClick={onConfigure}
					>
						<p>Configure</p>
						<span className="text-[0px] group-hover:text-xl pt-1.5 group-hover:pl-6 transition-all duration-200"><LuMoveRight /></span>
					</button>
				</div>
			</div>

		</div>
	);
}

export default Home;
