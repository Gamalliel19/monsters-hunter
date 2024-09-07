import Image from "next/image";

export default function Card({ id, name, lore, imageUrl, type }) {
	const truncatedLore = lore.length > 100 ? `${lore.slice(0, 100)}...` : lore;
	// Split the type by spaces
	const types = type.split(" ");

	return (
		<div className="aspect-w-1 aspect-h-1 overflow-hidden shadow-lg border-2 p-5 border-neutral-300 h-full flex flex-col">
			<div className="w-full h-40">
				<Image
					width={100}
					height={100}
					className="w-full h-full object-cover"
					src={imageUrl}
					alt={name}
				/>
			</div>
			<div className="px-6 py-4 flex-grow">
				<div className="font-bold text-xl mb-2">{name}</div>
				<p className="text-gray-700 text-base">{truncatedLore}</p>
			</div>
			<div className="px-6 pt-4 pb-2">
				{/* Map over the types array and render each as a separate tag */}
				{types.map((t, index) => (
					<span
						key={index}
						className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
						{t}
					</span>
				))}
			</div>
		</div>
	);
}
