import { useState } from "react";
import rim1 from '/assets/rim1.png';

const rimData = [
	{ value: 'rim1', name: 'Rim 1', image: rim1 },
	{ value: 'rim2', name: 'Rim 2', image: rim1 },
	{ value: 'rim3', name: 'Rim 3', image: rim1 },
]

const Rim = () => {
	const [selectedColor, setSelectedColor] = useState(rimData[0].value)
	return (
		<div className="w-full grid grid-cols-2 gap-4">
			{rimData.map((rim) => (
				<img
					key={rim.value}
					className={`w-[120px] aspect-square rounded-full cursor-pointer transition-all duration-200 p-1 border border-transparent ${selectedColor === rim.value ? 'border-neutral-500 ' : ''}`}
					src={rim.image}
					alt={rim.name}
					onClick={() => setSelectedColor(rim.value)}
				/>
			))}
		</div>
	)
};

export default Rim;