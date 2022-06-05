import { youtube } from "@googleapis/youtube";

// initialize the Youtube API library
const youtubeSearchURL = "https://youtube.googleapis.com/youtube/v3/search";

// a very simple example of searching for youtube videos
export async function searchVideos(query: string) {
	const res = await fetch(youtubeSearchURL, {
		method: "GET",
		headers: {
			"Accept": "application/json",
			"Authorization": `Bearer ${__SNOWPACK_ENV_}`	
		}
	});

	return res.data;
}

