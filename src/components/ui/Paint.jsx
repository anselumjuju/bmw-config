import { useState } from "react";
import { store } from '../../store';
import { useSnapshot } from "valtio";

const paintData = [
	'white', '#BCBCBC', '#BBC9E0', '#BBE0C2', '#222', '#4A4A4A', '#3F0001'
]

const Paint = () => {
	const { bodyColor } = useSnapshot(store)
	const [selectedColor, setSelectedColor] = useState(bodyColor)
	const handleClick = (color) => {
		store.bodyColor = color
		setSelectedColor(color)
	}
	return (
		<div className="w-full grid grid-cols-4 sm:grid-cols-6 md:grid-cols-4 gap-2 md:gap-4">
			{paintData.map((paint) => (
				<div
					className={`w-[60px] aspect-square rounded-full cursor-pointer transition-all duration-200 p-1 border-2 border-white/0 ${selectedColor === paint ? 'border-neutral-600' : ''}`}
					key={paint}
					onClick={() => handleClick(paint)}
				>
					<div className="w-full h-full rounded-full" style={{ backgroundColor: paint }} />
				</div>
			))}
		</div>
	)
};

export default Paint;