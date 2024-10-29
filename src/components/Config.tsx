import { Accordion, AccordionItem } from "@nextui-org/react";
import { BiDownload } from "react-icons/bi";
import { TiArrowBackOutline } from "react-icons/ti";
import Paint from "./ui/Paint";
import Rim from "./ui/Rim";
import BrakesCalipers from "./ui/BrakesCalipers";

function Config({ onGoHome }: { onGoHome: () => void }) {
	return (
		<div className="w-[90%] h-full mx-auto py-[5vh] flex items-center justify-between">

			<div className="h-full flex flex-col items-center justify-between">
				<div className="p-3 rounded-full grid place-content-center bg-white/30 text-2xl text-neutral-500 cursor-pointer hover:scale-110 transition-all duration-200" onClick={onGoHome}><TiArrowBackOutline /></div>
				<div className="p-3 rounded-full grid place-content-center bg-white/30 text-2xl text-neutral-500 cursor-pointer hover:scale-110 transition-all duration-200"><BiDownload /></div>
			</div>

			<div className="w-1/4 h-full px-6 py-4 rounded-lg bg-white/20 backdrop-blur-lg">
				<Accordion selectionMode="single" defaultExpandedKeys={["1"]}>
					<AccordionItem key="1" aria-label="Accordion 1" title="Paints">
						<Paint />
					</AccordionItem>
					<AccordionItem key="2" aria-label="Accordion 2" title="Rims">
						<Rim />
					</AccordionItem>
					<AccordionItem key="3" aria-label="Accordion 3" title="Brake & Calipers">
						<BrakesCalipers />
					</AccordionItem>
				</Accordion>
			</div>

		</div>
	);
}

export default Config;
