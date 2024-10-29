import { useState } from "react";
import brakeCaliper from '/assets/brakeCaliper1.png';

const brakesCalipersData = [
	{ value: 'brakesCalipers1', name: 'Calipers 1', image: brakeCaliper },
	{ value: 'brakesCalipers2', name: 'Calipers 2', image: brakeCaliper },
	{ value: 'brakesCalipers3', name: 'Calipers 3', image: brakeCaliper },
]

const BrakesCalipers = () => {
	const [selectedColor, setSelectedColor] = useState(brakesCalipersData[0].value)
	return (
		<div className="w-full grid grid-cols-2 gap-4">
			{brakesCalipersData.map((brakesCalipers) => (
				<img
					key={brakesCalipers.value}
					className={`w-[120px] aspect-square rounded-full cursor-pointer transition-all duration-200 p-1 border border-transparent ${selectedColor === brakesCalipers.value ? 'border-neutral-500 ' : ''}`}
					src={brakesCalipers.image}
					alt={brakesCalipers.name}
					onClick={() => setSelectedColor(brakesCalipers.value)}
				/>
			))}
		</div>
	)
};

export default BrakesCalipers;