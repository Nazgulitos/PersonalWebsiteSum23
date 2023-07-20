<script lang="ts">
	import Projects from './Projects.svelte';
	import Contacts from './Contacts.svelte';
	import imagePersPhoto from '$lib/images/AvaPro.png';
</script>

<svelte:head>
	<meta charset="utf-8" />
	<title>Portfolio</title>
	<meta name="description" content="This page is a portfolio of Nazgul Salikhova that provides list of her projects, contact and bil" />
</svelte:head>

<main>
	<div id="banner">
		<img src={imagePersPhoto} alt="Nazgul" id="mainImg" />
		<div id="wrapper">
			<h1 id="banner-title">Hi! I'm Nazgul. <br /> Welcome to my portfolio!</h1>
		</div>
	</div>

	<div class="wrapper2">
		<div class="p1">
			<h3 class="p1-title">My skills</h3>
			Java Python C/C++<br /> SQL <br /> Adobe Illustrator Figma <br /> HTML, CSS, JS - soon
		</div>
		<div id="about">
			<h1 class="about-title">About me</h1>
			<p class="about-text">
				I am Innopolis University Bachelor student and I have a diverse range of interests and
				skills that make me a well-rounded IT specialist. I have experience in UI design through my
				participation in two projects. Currently, I am expanding my knowledge in frontend
				development by creating websites and contributing to software project with team from my
				study group.
				<br /> In addition to my technical pursuits, I have a passion for sports(mainly running), drawing
				and reading classic books. I am a fan of the Marvel and Star Wars universes. I can speak English,
				Russian and Bashkir(my native language). I do not like coffee and everything with milk.
			</p>
		</div>
	</div>

	<div class="banner2">
		<h1 class="banner2-title">The nature of my home - Bashkortostan</h1>
	</div>

	<Projects />

	<div id="contact">
		<p class="textMe">My email:</p>
		<a
			href={'mailto:n.salikhova@innopolis.university?body=Hi! I want to take over the world with you!&subject=VIP offer'}
			class="textMeImg"
			aria-label="Email"
		/>
		<img
			id="mainImg"
			src={'https://cdn.dribbble.com/users/2789762/screenshots/8630894/media/583b209224b027954cb6e8b9901cb731.gif'}
			alt={'cat'}
			class="catImg"
		/>
	</div>

	<Contacts />
</main>



<style>
	@import './app.css';
</style>
