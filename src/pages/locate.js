import { useEffect, useState } from "react";
import Map from "@/components/Map";
import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";

export default function Locate() {
	const [userLatitude, setUserLatitude] = useState(null);
	const [userLongitude, setUserLongitude] = useState(null);
	const [errors, setErrors] = useState("");
	const monsters = useQuery(api.monsters.get);
	console.log(monsters);

	useEffect(() => {
		navigator.geolocation.getCurrentPosition(
			(position) => {
				setUserLatitude(position.coords.latitude);
				setUserLongitude(position.coords.longitude);
			},
			(err) => setErrors(err.message),
			{ enableHighAccuracy: true }
		);
	}, []);

	console.log(errors);
	console.log(`User Latitude = ${userLatitude}`);
	console.log(`User Longitude = ${userLongitude}`);
	if (!monsters) return <h1>Loading...</h1>;

	return userLatitude && userLongitude ? (
		<Map
			userLatitude={userLatitude}
			userLongitude={userLongitude}
			monsters={monsters}
		/>
	) : (
		<div>Loading map...</div>
	);
}
