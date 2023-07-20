import { dev } from '$app/environment';
import { generateJoke } from './comic.api';

export const csr = dev;
export const prerender = true;

export async function load({
	fetch
}: {
	fetch: (input: RequestInfo, init?: RequestInit) => Promise<Response>;
}) {
	try {
		const data = await generateJoke(fetch);
		return {
			props: {
				img: data.img,
				alt: data.alt,
				safe_title: data.safe_title,
				date: data.date
			}
		};
	} catch (error) {
		console.log(error);
		return {
			status: 500,
			error: 'An error occurred while fetching data.'
		};
	}
}
