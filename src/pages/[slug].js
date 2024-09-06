import { useRouter } from "next/router";
import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import Image from "next/image";

export default function Page() {
	const router = useRouter();
	const monster = useQuery(api.monsters.getSingleMonster, {
		id: router.query.slug,
	});

	if (!monster) return <h1>Loading...</h1>;

	return (
		<div>
			<p>Post: {router.query.slug}</p>
			<p>Name: {monster.monster.name}</p>
			<p>Description: {monster.monster.lore}</p>
			<Image
				height={300}
				width={300}
				src={monster.monster.imageUrl}
				alt={`image of ${monster.monster.name}`}
			/>
		</div>
	);
}
