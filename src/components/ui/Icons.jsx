import { cn } from "../../utils/functions";

const Icons = ({ icon, onClick, className }) => {
	return (
		<button
			className={cn(
				"p-3 rounded-full grid place-content-center bg-white/30 text-2xl text-neutral-500 hover:text-neutral-800 transition-all duration-200",
				className
			)}
			onClick={onClick}
		>
			{icon}
		</button>
	);
};

export default Icons;
