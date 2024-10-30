import { useState } from "react";
import { store } from '../../store';
import { useSnapshot } from "valtio";

const brakesCalipersData = [
	'#BC0D00', '#0076C1', '#000'
]

const BrakesCalipers = () => {
	const { caliperColor } = useSnapshot(store)
	const [selectedCaliperColor, setSelectedCaliperColor] = useState(caliperColor)
	const handleClick = (color: string) => {
		store.caliperColor = color
		setSelectedCaliperColor(color)
	}
	return (
		<div className="w-full grid grid-cols-2 gap-4">
			{brakesCalipersData.map((color) => (
				<div
					key={color}
					className={`w-[90px] aspect-square rounded-full cursor-pointer transition-all duration-200 p-1 border-2 border-transparent ${selectedCaliperColor === color ? 'border-neutral-500 ' : ''}`}
					onClick={() => handleClick(color)}
				>
					<div className="w-full h-full rounded-full" style={{ backgroundColor: color }} />
				</div>
			))}
		</div>
	)
};

export default BrakesCalipers;