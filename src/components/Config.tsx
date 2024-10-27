import { LuMoveLeft } from "react-icons/lu";

function Config({ onGoHome }: { onGoHome: () => void }) {
	return (
		<div className="w-full h-full py-[10vh] flex items-center justify-between flex-col">
			<h1 className="text-9xl font-black text-white">Configure</h1>
			<div
				className="text-lg bg-neutral-900 text-white py-3 px-8 rounded-lg cursor-pointer flex items-center group"
				onClick={onGoHome}
			>
				<span className="text-[0px] group-hover:text-xl pt-1.5 group-hover:pr-6 transition-all duration-200"><LuMoveLeft /></span>
				<p>Go Home</p>
			</div>
		</div>
	);
}

export default Config;
