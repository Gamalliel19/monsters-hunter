import { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;

export default function Map({ userLatitude, userLongitude, monsters }) {
	const mapContainerRef = useRef(null);
	const map = useRef(null);
	const userMarkerRef = useRef(null); // Reference to the user marker
	const monsterMarkersRef = useRef([]); // Reference to an array of monster markers

	useEffect(() => {
		// Initialize map only once
		if (!map.current) {
			map.current = new mapboxgl.Map({
				container: mapContainerRef.current,
				style: "mapbox://styles/mapbox/streets-v12",
				center: [userLongitude, userLatitude],
				zoom: 10,
			});
		}

		// Add or update user marker when user location changes
		if (map.current && userLatitude && userLongitude) {
			if (!userMarkerRef.current) {
				// Create marker if it doesn't exist
				userMarkerRef.current = new mapboxgl.Marker()
					.setLngLat([userLongitude, userLatitude])
					.addTo(map.current);
			} else {
				// Update marker position if it already exists
				userMarkerRef.current.setLngLat([userLongitude, userLatitude]);
			}

			// Recenter the map on user location
			map.current.setCenter([userLongitude, userLatitude]);
		}

		// Remove existing monster markers
		monsterMarkersRef.current.forEach((marker) => marker.remove());
		monsterMarkersRef.current = [];

		// Add markers for all monsters
		if (monsters && monsters.length > 0) {
			monsters.forEach((monster) => {
				if (monster.latitude && monster.longitude) {
					const marker = new mapboxgl.Marker({ color: "#ff0000" }) // Using default marker for simplicity
						.setLngLat([monster.longitude, monster.latitude])
						.addTo(map.current);

					// Create and set popup content
					const popup = new mapboxgl.Popup({ offset: 25 }).setHTML(
						`<div style="color: #000000">
                        <h3 >${monster.name}</h3>
                        <p>${monster.lore}</p>
                        </div>`
					);

					// Attach popup to marker
					marker.setPopup(popup);

					// Add the marker to the array of monster markers
					monsterMarkersRef.current.push(marker);
				}
			});
		}
	}, [userLatitude, userLongitude, monsters]); // Re-run the effect if coordinates change

	return (
		<div style={{ width: "100%", height: "100vh", margin: 0, padding: 0 }}>
			<div ref={mapContainerRef} style={{ width: "100%", height: "100%" }} />
		</div>
	);
}
