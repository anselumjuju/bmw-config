import { cn } from "../../utils/functions";

const Icons = ({ icon, onClick, className }) => {
	return (
		<button
			className={cn(
				"p-3 rounded-full grid place-content-center text-2xl bg-white/30 hover:bg-white/50 text-neutral-500 hover:text-neutral-900 transition-all duration-200",
				className
			)}
			onClick={onClick}
		>
			{icon}
		</button>
	);
};

export default Icons;
