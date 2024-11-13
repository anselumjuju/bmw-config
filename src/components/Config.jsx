import { Accordion, AccordionItem, Tab, Tabs } from "@nextui-org/react";
import { BiDownload } from "react-icons/bi";
import { TiArrowBackOutline } from "react-icons/ti";
import Paint from "./ui/Paint";
import Rim from "./ui/Rim";
import BrakesCalipers from "./ui/BrakesCalipers";
import { takeScreenshot } from "../utils/functions";
import Icons from "./ui/Icons";

function Config({ onGoHome }) {
	return (
		<div className="w-[90%] h-full mx-auto py-[5vh] flex items-center justify-between flex-col md:flex-row">

			<div className="w-full md:h-full flex md:flex-col items-center md:items-start justify-between *:pointer-events-auto">
				<Icons icon={<TiArrowBackOutline />} onClick={onGoHome} />
				<Icons icon={<BiDownload />} onClick={takeScreenshot} />
			</div>

			<div className="w-full md:max-w-sm h-full px-6 py-4 rounded-lg bg-white/20 backdrop-blur-lg hidden md:block pointer-events-auto">
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

			<div className="block md:hidden w-full min-h-[20vh] px-6 py-4 rounded-lg bg-white/20 backdrop-blur-lg pointer-events-auto">
				<Tabs aria-label="Dynamic tabs" variant="underlined">
					<Tab title={'Paint'}>
						<Paint />
					</Tab>
					<Tab title={'Rims'}>
						<Rim />
					</Tab>
					<Tab title={'Brake & Calipers'}>
						<BrakesCalipers />
					</Tab>
				</Tabs>
			</div>

		</div>
	);
}

export default Config;
