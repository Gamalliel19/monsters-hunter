import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import Link from "next/link";
import Card from "@/components/Card";
import LoadingCard from "@/components/LoadingCard";

export default function Monster() {
	const monsters = useQuery(api.monsters.get);

	if (!monsters) return <LoadingCard />;

	return (
		<div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-0">
			{monsters?.map(({ _id, name, lore, imageUrl, type }) => (
				<Link href={`/${_id}`} key={_id}>
					<Card
						id={_id}
						name={name}
						lore={lore}
						imageUrl={imageUrl}
						type={type}
					/>
				</Link>
			))}
		</div>
	);
}
