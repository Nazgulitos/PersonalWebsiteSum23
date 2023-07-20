<script lang="ts">
	import { generateJoke } from './comic.api';

	export let img = '';
	export let alt = '';
	export let safe_title = '';
	export let date = '';

	async function fetchJoke() {
		try {
			const data = await generateJoke(fetch);
			img = data.img;
			alt = data.alt;
			safe_title = data.safe_title;
			date = data.date;
		} catch (error) {
			console.log(error);
		}
	}
</script>

<svelte:head>
	<meta charset="utf-8" />
	<title>Jokes_API</title>
	<meta name="description" content="This page provides a comic using Joke API" />
</svelte:head>

<main>
	<div class="container">
		<p id="safe_title">{safe_title}</p>
		<img id="image" {alt} src={img} />
		<p id="date">{date}</p>
		<button class="generate" on:click={fetchJoke}>Generate</button>
	</div>
</main>

<style>
	@import './comic.css';
</style>
