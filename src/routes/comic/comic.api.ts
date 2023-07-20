import { formatDistanceToNow } from 'date-fns';

const email = 'n.salikhova@innopolis.university';

export async function generateJoke(
	fetch: (input: RequestInfo, init?: RequestInit) => Promise<Response>
) {
	try {
		const response = await fetch(`https://fwd.innopolis.university/api/hw2?email=${email}`);
		const id = await response.json();
		const comicResponse = await fetch(`https://fwd.innopolis.university/api/comic?id=${id}`);
		const comicData = await comicResponse.json();

		const { year, month, day } = comicData;
		return {
			img: comicData.img,
			alt: comicData.alt,
			safe_title: comicData.safe_title,
			date: formatDistanceToNow(new Date(year, month, day))
		};
	} catch (error) {
		throw new Error('An error occurred while fetching data.');
	}
}
