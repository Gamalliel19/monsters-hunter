export default function LoadingCard() {
	return (
		<div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-5">
			{[...Array(10)].map((_, index) => (
				<div
					key={index}
					className="aspect-w-1 aspect-h-1 overflow-hidden shadow-lg border-2 p-5 border-neutral-300 h-full flex flex-col animate-pulse">
					<div className="w-full h-40 bg-gray-300"></div>
					<div className="px-6 py-4 flex-grow">
						<div className="h-6 bg-gray-300 rounded mb-4"></div>
						<div className="h-4 bg-gray-300 rounded"></div>
					</div>
					<div className="px-6 pt-4 pb-2">
						<span className="inline-block bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2"></span>
						<span className="inline-block bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2"></span>
					</div>
				</div>
			))}
		</div>
	);
}
