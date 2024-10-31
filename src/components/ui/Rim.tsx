import { useState } from "react";
import { store } from '../../store';
import { useSnapshot } from "valtio";
import rim1 from '/assets/rim1.png';
import rim2 from '/assets/rim2.png';
import rim3 from '/assets/rim3.png';

const rimData = [
	{ value: 'rim1', image: rim1 },
	{ value: 'rim2', image: rim2 },
	{ value: 'rim3', image: rim3 },
]

const Rim = () => {
	const { rim } = useSnapshot(store)
	const [selectedRim, setSelectedRim] = useState(rim)
	const handleClick = (rim: string) => {
		store.rim = rim
		setSelectedRim(rim)
	}
	return (
		<div className="w-full grid grid-cols-4 md:grid-cols-2 gap-2 md:gap-4">
			{rimData.map((rim) => (
				<div className={`w-[80px] md:w-[120px] aspect-square p-2 rounded-full cursor-pointer transition-all duration-200 border-2 border-transparent ${selectedRim === rim.value ? 'border-neutral-600 ' : ''}`}>
					<img
						key={rim.value}
						className={`w-full`}
						src={rim.image}
						alt={rim.value}
						onClick={() => handleClick(rim.value)}
					/>
				</div>
			))}
		</div>
	)
};

export default Rim;