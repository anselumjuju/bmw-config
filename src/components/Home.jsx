import { BiDownload } from "react-icons/bi";
import { FiShare2 } from "react-icons/fi";
import { GoMail } from "react-icons/go";
import { LuMoveRight } from "react-icons/lu";
import { openShare, takeScreenshot } from "../utils/functions";
import EmailModal from "./EmailModal";
import { useDisclosure } from "@nextui-org/react";
import Icons from "./ui/Icons";
import PrimaryButton from "./ui/PrimaryButton";


function Home({ onConfigure }) {
	const { isOpen, onOpen, onOpenChange } = useDisclosure();
	const toogleEmailModal = () => onOpen();

	return (
		<div className="w-[90%] h-full mx-auto py-[5vh] flex items-center justify-between flex-col *:pointer-events-auto">

			<div className="w-full flex items-center justify-between font-medium">
				<div className="space-y-1 text-4xl md:text-6xl">
					<p>BMW<span className="text-2xl md:text-3xl font-light">M4&nbsp;CSL</span></p>
					<p className="text-sm md:text-lg font-light text-neutral-500">Race inspired unique design</p>
				</div>
				<PrimaryButton text={'Get in touch'} onClick={toogleEmailModal} className={'hidden md:block'} />
			</div>

			<div className="w-full flex items-end justify-between">
				<div className="w-max flex flex-col items-center justify-start gap-3">
					<Icons icon={<GoMail />} onClick={toogleEmailModal} className={'block md:hidden'} />
					<Icons icon={<BiDownload />} onClick={takeScreenshot} className={'block md:hidden'} />
					<Icons icon={<FiShare2 />} onClick={openShare} className={'block md:hidden'} />
				</div>
				<div className="w-max h-max p-1.5 pl-8 flex items-end md:items-center justify-end flex-col md:flex-row gap-x-6 gap-y-3 rounded-lg md:bg-white/20">
					<div className="w-full -space-y-1 text-2xl text-right">
						<p className="text-lg font-normal text-neutral-500">Total</p>
						<p><span className="font-light text-lg text-nowrap">$ </span>140,895</p>
					</div>
					<Icons icon={<BiDownload />} onClick={takeScreenshot} className={"hidden md:block"} />
					<Icons icon={<FiShare2 />} onClick={openShare} className={"hidden md:block"} />
					<PrimaryButton text={'Configure'} onClick={onConfigure} icon={<LuMoveRight />} />
				</div>
			</div>

			<EmailModal
				isOpen={isOpen}
				onOpenChange={onOpenChange}
				onClose={() => onOpenChange(false)}
			/>
		</div>
	);
}

export default Home;
