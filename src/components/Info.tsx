import React, { useEffect, useState } from "react";
import { searchVideos } from "../lib/youtube";

export default function Info() {
	const [info, setInfo] = useState<string | null>(null);

	useEffect(() => {
		searchVideos("radiohead nude cover").then((results) => {
			setInfo(JSON.stringify(results));
			console.log(results);
		});
	}, []);

	return (
		<div>{info ?? "Fetching youtube search results..."}</div>
	);
}