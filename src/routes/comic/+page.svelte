<script lang="ts">
	import { onMount } from 'svelte';
	import { formatDistanceToNow } from 'date-fns';

	const email = 'n.salikhova@innopolis.university';

	let img = './src/assets/images/loading-splash.gif';
	let alt: string;
	let safe_title: string;
	let date: string;

	function generateJoke() {
		fetch(`https://fwd.innopolis.university/api/hw2?email=${email}`)
			.then((response: Response) => response.json())
			.then((data: string) => {
				const id: string = data;

				fetch(`https://fwd.innopolis.university/api/comic?id=${id}`)
					.then((response: Response) => response.json())
					.then((comicData: JokesApi) => {
						img = comicData.img;
						alt = comicData.alt;
						safe_title = comicData.safe_title;
						const { year, month, day } = comicData;
						date = formatDistanceToNow(new Date(year, month, day));
					})
					.catch((error) => console.log(error));
			})
			.catch((error) => console.log(error));
	}

	onMount(() => {
		generateJoke();
	});

	interface JokesApi {
		img: string;
		alt: string;
		safe_title: string;
		year: number;
		month: number;
		day: number;
	}
</script>

<main>
	<div class="container">
		<p id="safe_title">{safe_title}</p>
		<img id="image" {alt} src={img} />
		<p id="date">{date}</p>
		<button class="generate" on:click={generateJoke}>Generate</button>
	</div>
</main>

<style>
	@import './comic.css';
</style>
