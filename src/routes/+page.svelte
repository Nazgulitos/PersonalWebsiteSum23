<script lang="ts">
	import Projects from './Projects.svelte';
	import Contacts from './Contacts.svelte';
	// import imagePersPhoto from '$assets/images/AvaPro.png';
</script>

<main>
	<div id="banner">
		<!-- <img id="mainImg" alt={'Photo of me'} src={imagePersPhoto} /> -->
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

<svelte:head>
	<title>Portfolio</title>
</svelte:head>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Amatic+SC&display=swap');
	* {
		margin: 0px;
		padding: 0px;
		outline: none;
	}
	html {
		height: 100%;
		scroll-behavior: smooth;
	}
	body {
		height: 2700px;
		width: 100%;
		background-color: #fff5ee;
		float: left;
	}
	.clear {
		clear: both;
	}
	header {
		position: fixed;
		list-style-type: none;
		width: 100%;
		margin: 0;
		padding: 0;
		overflow: hidden;
		background-color: #161617;
	}
	a {
		float: left;
	}
	a.head {
		display: block;
		color: white;
		text-align: center;
		padding: 14px 16px;
		text-decoration: none;
		font-family: 'Courier New', Courier, monospace;
		font-size: 1.5em;
	}
	
	a.head:hover {
		background-color: #403851;
		transform: scale(1.04) perspective(1px);
	}
	
	#mainImg {
		float: left;
		width: 30%;
		padding-left: 5%;
		margin-top: 90px;
	}
	
	#banner {
		height: 550px;
		background-color: rgb(202 183 238);
	}
	#wrapper {
		display: flex;
		justify-content: center;
		padding-right: 5%;
		padding-top: 8%;
	}
	
	#banner-title {
		text-align: left;
		padding-top: 20%;
		padding-left: 30%;
	
		width: 29ch;
		color: black;
		font-family: 'Abril Fatface', serif;
		font-size: 2.5em;
		white-space: nowrap;
		overflow: hidden;
		border-top: 20px;
		animation: cursor 0.5s step-end infinite, printed_text 5s steps(29);
		font-weight: 200;
	}
	@keyframes printed_text {
		from {
			width: 0;
		}
	}
	@keyframes cursor {
		0% {
			border-color: transparent;
		}
	
		50% {
			border-color: transparent;
		}
	
		100% {
			border-color: transparent;
		}
	}
	.wrapper2 {
		display: block;
		margin-top: 90px;
		margin-right: 40px;
		height: 500px;
	}
	#about {
		float: right;
		width: 675px;
		height: 550px;
		border-radius: 5%;
		background-color: rgb(202 183 238);
		box-shadow: 12px 5px 12px 0px rgba(255, 0, 47, 0.464);
	}
	.about-title {
		text-align: center;
		font-size: 2em;
		font-family: 'Abril Fatface', serif;
		padding-top: 2%;
		font-weight: 100;
	}
	.about-text {
		margin-left: 60px;
		margin-right: 60px;
		margin-top: 10px;
		font-size: 1.4em;
		font-family: 'Courier New', Courier, monospace;
	}
	.p1-title {
		background-color: #fe9e92;
		text-align: center;
		border-radius: 5px;
		font-weight: 100;
	}
	.p1 {
		color: #161617;
		float: left;
		margin-top: 70px;
		margin-left: 170px;
		font-size: 2em;
		word-spacing: 10px;
		line-height: 70px;
		font-family: 'Abril Fatface', serif;
	}
	.banner2 {
		/* background-image: url('$assets/images/hrebet-Krykty-tau.jpg'); */
		height: 600px;
		background-attachment: fixed;
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
	}
	.banner2-title {
		text-align: left;
		font-size: 4em;
		color: #fff5ee;
		margin-left: 80px;
		padding-top: 60px;
		font-weight: 200;
	}
	#projects {
		background-color: rgb(202 183 238);
		height: 370px;
		margin: 40px;
		margin-top: 60px;
	}
	.projects-wrapper {
		padding-left: 50px;
	}
	.projects-title {
		text-align: center;
		color: #fff5ee;
		padding-top: 5px;
		font-size: 3em;
		font-weight: 200;
		font-family: 'Abril Fatface', serif;
	}
	.projects-text {
		font-size: 2.8em;
		color: #000000;
		text-align: left;
		font-weight: 400;
		padding-left: 10px;
		font-family: 'Amatic SC', cursive;
	}
	li.list::marker {
		font-size: 0.8em;
		color: #403851;
	}
	#contact {
		display: flex;
		justify-content: space-between;
		align-items: center;
		background-color: #a4caff;
		margin: 40px;
		height: 500px;
	}
	.textMe {
		padding-left: 200px;
		font-size: 4em;
		font-family: 'Amatic SC', cursive;
		font-weight: 300;
	}
	a[href^='mailto:'] {
		font-size: 16px;
		line-height: 32px;
		color: #ffffff;
		margin-left: 50px;
	
		border-color: #fe9e92;
		font-family: 'Abril Fatface', serif;
		font-size: 1.5em;
		margin-top: 10px;
		height: 40px;
		width: 300px;
		text-align: center;
		border-radius: 5px;
	
		/* background-image: url('$assets/images/email.png'); */
		background-size: 100%;
		width: 150px;
		height: 150px;
	}
	.catImg {
		padding-right: 130px;
	}
	
	#contact2 {
		background-color: #ffffff;
		box-shadow: 12px 5px 12px 0px rgba(255, 0, 47, 0.464);
		width: 915px;
		height: 120px;
		margin: auto;
		border-radius: 10px;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	a.icon-github {
		/* background-image: url('$/assets/images/github.png'); */
		background-size: 100%;
		width: 100px;
		height: 100px;
		margin-left: 100px;
	}
	a.icon-insta {
		/* background-image: url('$/assets/images/instagram.png'); */
		background-size: 100%;
		width: 100px;
		height: 100px;
	}
	a.icon-tg {
		/* background-image: url('$/assets/images/telegram.png'); */
		background-size: 100%;
		width: 100px;
		height: 100px;
		margin-right: 100px;
	}
	a:hover {
		transform: scale(1.08) perspective(1px);
	}
	.blog {
		font-family: 'Abril Fatface', serif;
		font-size: 1.5em;
		color: #ffffff;
		background-color: #fe9e92;
		height: 40px;
		width: 300px;
		text-align: center;
		border-radius: 5px;
		border-color: #fe9e92;
		margin-right: 300px;
		margin-top: 10px;
	}
	
	.blog:hover {
		background-color: #f98e80;
		transform: scale(1.02) perspective(1px);
	}

</style>
