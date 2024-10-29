import { useState } from "react";

const paintData = [
	{ value: 'red', name: 'Red', color: 'red' },
	{ value: 'blue', name: 'Blue', color: 'blue' },
	{ value: 'green', name: 'Green', color: 'green' },
	{ value: 'yellow', name: 'Yellow', color: 'yellow' },
	{ value: 'purple', name: 'Purple', color: 'purple' },
	{ value: 'orange', name: 'Orange', color: 'orange' },
	{ value: 'pink', name: 'Pink', color: 'pink' },
	{ value: 'brown', name: 'Brown', color: 'brown' },
]

const Paint = () => {
	const [selectedColor, setSelectedColor] = useState(paintData[0].value)
	return (
		<div className="w-full grid grid-cols-4 gap-4">
			{paintData.map((paint) => (
				<div
					key={paint.value}
					className={`w-[60px] aspect-square rounded-full cursor-pointer transition-all duration-200 p-1 border border-transparent ${selectedColor === paint.value ? 'border-neutral-500 ' : ''}`}

					onClick={() => setSelectedColor(paint.value)}
				>
					<div className="w-full h-full rounded-full" style={{ backgroundColor: paint.color }} />
				</div>
			))}
		</div>
	)
};

export default Paint;