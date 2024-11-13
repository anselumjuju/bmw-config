import { cn } from "../../utils/functions"

const PrimaryButton = ({ text, onClick, className, icon }) => {
	return (
		<button
			className={cn("px-6 md:px-8 py-4 text-sm md:text-base font-normal flex items-center bg-neutral-800 text-white hover:bg-neutral-700 rounded-lg transition-all duration-200 group", className)}
			onClick={onClick}
		>
			{text}
			{icon && <span className="text-[0px] group-hover:text-xl group-hover:pl-6 transition-all duration-200">{icon}</span>}
		</button>
	)
}

export default PrimaryButton