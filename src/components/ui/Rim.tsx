import { useState } from "react";
import { store } from '../../store';
import { useSnapshot } from "valtio";
import rim1 from '/assets/rim1.png';

const rimData = [
	{ value: 'rim1', image: rim1 },
	{ value: 'rim2', image: rim1 },
	{ value: 'rim3', image: rim1 },
]

const Rim = () => {
	const { rim } = useSnapshot(store)
	const [selectedRim, setSelectedRim] = useState(rim)
	const handleClick = (rim: string) => {
		store.rim = rim
		setSelectedRim(rim)
	}
	return (
		<div className="w-full grid grid-cols-2 gap-4">
			{rimData.map((rim) => (
				<img
					key={rim.value}
					className={`w-[120px] aspect-square rounded-full cursor-pointer transition-all duration-200 p-1 border border-transparent ${selectedRim === rim.value ? 'border-gray-600 ' : ''}`}
					src={rim.image}
					alt={rim.value}
					onClick={() => handleClick(rim.value)}
				/>
			))}
		</div>
	)
};

export default Rim;