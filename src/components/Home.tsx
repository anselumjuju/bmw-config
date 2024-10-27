import { LuMoveRight } from "react-icons/lu";

function Home({ onConfigure }: { onConfigure: () => void }) {
	return (
		<div className="w-[90%] h-full mx-auto py-[8vh] flex items-center justify-between flex-col">
			<div className="w-full flex items-center justify-between font-medium">
				<div className="space-y-1 text-6xl">
					<p>BMW <span className="font-light text-3xl text-nowrap">M4 CSL</span></p>
					<p className="text-lg font-light text-neutral-500">Race inspired unique design</p>
				</div>
				<div className="space-y-1 text-6xl">
					<p><span className="font-light text-3xl text-nowrap">$ </span>279.000</p>
					<p className="text-base font-light text-neutral-500">+ Carbon-Fiber parts</p>
				</div>
			</div>
			<div
				className="text-lg bg-neutral-900 text-white py-3 px-8 rounded-lg cursor-pointer flex items-center group"
				onClick={onConfigure}
			>
				<p>Configure</p>
				<span className="text-[0px] group-hover:text-xl pt-1.5 group-hover:pl-6 transition-all duration-300"><LuMoveRight /></span>
			</div>
		</div>
	);
}

export default Home;
