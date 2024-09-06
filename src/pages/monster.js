import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import Link from "next/link";
export default function Monster() {
	const monsters = useQuery(api.monsters.get);

	if (!monsters) return <h1>Loading...</h1>;

	return (
		<div>
			{monsters?.map(({ _id, name }) => (
				<Link href={`/${_id}`} key={_id}>
					{name}
				</Link>
			))}
		</div>
	);
}
