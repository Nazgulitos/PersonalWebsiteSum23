import { generateJoke } from './comic.api';

export async function get() {
	try {
		const data = await generateJoke(fetch);
		return {
			body: {
				img: data.img,
				alt: data.alt,
				safe_title: data.safe_title,
				date: data.date
			}
		};
	} catch (error) {
		return {
			status: 500,
			body: {
				error: 'An error occurred while fetching data.'
			}
		};
	}
}
