<script>
	import { onMount } from 'svelte';
	import Rellax from 'rellax';
	import anime from 'animejs/lib/anime.es.js';

	onMount(() => {
		const r = new Rellax('.rellax');

		const t = anime.timeline({
			duration: 750,
			autoplay: false,
		});
		t.add({
			targets: '.horizontal-stripes div',
			easing: 'easeOutExpo',
			translateX: ['-100vw', '0'],
			delay: anime.stagger(150, { direction: 'reverse' }),
		}).add(
			{
				targets: '.frame',
				easing: 'easeOutExpo',
				translateX: ['-100vw', '0'],
			},
			'-=800'
		);

		setTimeout(() => {
			t.play();
		}, 500);
	});
</script>

<div class="home-screen d-flex align-items-xs-start align-items-sm-start align-items-md-center bg-color">
	<div class="horizontal-stripes rellax" data-rellax-speed="-3">
		<div />
		<div />
		<div />
		<div />
		<div />
	</div>
	<div class="frame mt-3 mt-md-0 rellax" data-rellax-speed="2">
		<div class="container">
			<div class="row g-0 mt-3">
				<div class="dots-in-line">
					<div />
					<div />
					<div />
				</div>
			</div>
			<div class="d-flex g-0 mt-3 justify-content-between">
				<div>
					<h1 class="display-5">Hello</h1>
				</div>
				<div class="platforms">
					<button class="btn rounded-circle"><i class="bi bi-github" /></button>
					<button class="btn rounded-circle"><i class="bi bi-linkedin" /></button>
				</div>
			</div>
			<div class="row g-0 mt-5 introduction-text">
				<div class="col-8 col-sm-8 col-md-9 col-lg-10">
					<h1 class="h1">My name is</h1>
					<h1 class="display-1 mb-0 fw-bolder">Mateusz</h1>
					<p>Front-end developer with .NET background.</p>
				</div>
				<div class="col-4 col-sm-4 col-md-3 col-lg-2 d-flex justify-content-center">
					<img src="/assets/avatar.jfif" alt="avatar" />
				</div>
			</div>
		</div>
		<div class="container frame__footer d-flex justify-content-end">
			<div>ANGULAR</div>
			<div>VUE</div>
		</div>
	</div>
</div>

<style>
	.dots-in-line {
		display: inline-block;
	}

	.dots-in-line > div {
		width: 0.5rem;
		height: 0.5rem;
		display: inline-block;
		border-radius: 50%;
	}

	.dots-in-line > div:nth-child(1) {
		background-color: #f73333;
	}

	.dots-in-line > div:nth-child(2) {
		background-color: #f7c334;
	}

	.dots-in-line > div:nth-child(3) {
		background-color: #acf735;
	}

	.platforms > button {
		font-size: 1.5rem;
	}

	.introduction-text > div > h1:nth-child(1) {
		margin-bottom: -0.5rem;
	}

	.introduction-text img {
		max-width: 100%;
		height: auto;
		object-fit: cover;
	}

	.bg-color {
		background-color: #fffbe5;
	}

	.home-screen {
		height: 100vh;
		justify-content: center;
		box-shadow: 6px 6px 5px 5px rgb(0 0 0 / 20%);
		position: relative;
		overflow-y: hidden;
	}

	.frame {
		display: grid;
		align-content: space-between;
		width: 80vw;
		height: 87vh;
		/* border: 8px solid white;
		border-radius: 20px; */
		position: relative;
		box-shadow: 7px 10px 5px 5px rgb(0 0 0 / 20%);

		background: rgba(46, 46, 46, 0.1);
		box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
		/* backdrop-filter: blur(2px);
		-webkit-backdrop-filter: blur(2px); */
		border-radius: 20px;
		/* border: 1px solid rgba(255, 255, 255, 0.18); */
	}

	.horizontal-stripes {
		width: 100%;
		height: 30vh;
		position: absolute;
		top: 50vh;
		display: grid;
		grid-template-rows: repeat(5, auto);
	}

	.horizontal-stripes > div:nth-child(1) {
		background-color: #feb603;
	}

	.horizontal-stripes > div:nth-child(2) {
		background-color: #fc3b00;
	}

	.horizontal-stripes > div:nth-child(3) {
		background-color: #fc0000;
	}

	.horizontal-stripes > div:nth-child(4) {
		background-color: #d9003a;
	}

	.horizontal-stripes > div:nth-child(5) {
		background-color: #810140;
	}

	.frame__footer {
		margin-bottom: 1.5rem;
	}

	.frame__footer > div {
		margin-left: 0.2rem;
		padding: 1.2rem;
		border-radius: 1.2rem;
		line-height: 0;
		font-size: small;
		font-weight: bold;
		display: inline-block;
		border: 0.13rem solid black;
	}
</style>
