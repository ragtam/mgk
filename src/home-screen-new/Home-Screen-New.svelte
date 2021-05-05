<script>
	import { onMount } from 'svelte';
	import Rellax from 'rellax';
	import anime from 'animejs/lib/anime.es.js';
	import { initializeTiltElement, destroyTilt } from '../utils/tilt-animation';

	let isSectionVisible = false;
	let rellax;
	let tiltElement;

	onMount(() => {
		const entryAnimation = getEntryAnimation();
		const backgroundOpacityAnimationIn = getBackgroundOpacityAnimationIn();
		const backgroundOpacityAnimationOut = getBackgroundOpacityAnimationOut();

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (!entry.isIntersecting) {
						backgroundOpacityAnimationIn.play();
					} else {
						backgroundOpacityAnimationOut.play();
					}
				});
			},
			{ threshold: 1 }
		);

		const target = document.querySelector('.frame__background--transitional');

		const sectionObserver = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					rellax = new Rellax('.rellax');
					tiltElement = initializeTiltElement('.frame', { max: 1 });
				} else {
					rellax.destroy();
					destroyTilt(tiltElement);
				}
			});
		});

		const sectionElement = document.querySelector('.home-screen');
		sectionObserver.observe(sectionElement);

		setTimeout(() => {
			isSectionVisible = true;
		}, 500);
		setTimeout(() => {
			entryAnimation.play();
			entryAnimation.finished.then(() => {
				observer.observe(target);
			});
		}, 500);
	});

	function getEntryAnimation() {
		const timeline = anime.timeline({
			duration: 750,
			autoplay: false,
		});
		timeline
			.add({
				targets: '.horizontal-stripes div',
				easing: 'easeOutExpo',
				translateX: ['-100vw', '0'],
				delay: anime.stagger(150, { direction: 'reverse' }),
			})
			.add(
				{
					targets: '.frame',
					easing: 'easeOutExpo',
					translateX: ['-100vw', '0'],
				},
				'-=800'
			);
		return timeline;
	}

	function getBackgroundOpacityAnimationIn() {
		return anime({
			targets: '.frame__background--transitional',
			opacity: [0, 1],
			duration: 200,
			easing: 'linear',
			autoplay: false,
		});
	}

	function getBackgroundOpacityAnimationOut() {
		return anime({
			targets: '.frame__background--transitional',
			opacity: [1, 0],
			duration: 1000,
			easing: 'linear',
			autoplay: false,
		});
	}
</script>

<div class="home-screen d-flex align-items-xs-start align-items-sm-start align-items-md-center bg-color">
	<div class="horizontal-stripes rellax {isSectionVisible ? 'home-screen--visible' : 'home-screen--hidden'}" data-rellax-speed="-3">
		<div />
		<div />
		<div />
		<div />
		<div />
	</div>
	<div class="frame mt-3 mt-md-0  {isSectionVisible ? 'home-screen--visible' : 'home-screen--hidden'}">
		<div class="frame__background--transitional" />

		<div class="container position-relative">
			<div class="row g-0 mt-3 ml-1">
				<div class="dots-in-line">
					<div />
					<div />
					<div />
				</div>
			</div>
			<div class="d-flex g-0 mt-3 justify-content-between">
				<div>
					<h1 class="h1 font-weight-light">Hello</h1>
				</div>
				<div class="platforms">
					<a href="https://github.com/ragtam" target="_blank" class="btn rounded-circle" role="button"
						><i class="bi bi-github" /></a
					>
					<a
						href="https://www.linkedin.com/in/mateusz-garbaciak-b50b20194/"
						target="_blank"
						class="btn rounded-circle"
						role="button"><i class="bi bi-linkedin" /></a
					>
				</div>
			</div>
			<div class="row g-0 mt-5 introduction-text">
				<div class="col-8 col-sm-8 col-md-9 col-lg-10">
					<h1 class="h2 font-weight-light d-none d-sm-block">My name is</h1>
					<p class="display-1 mb-0 d-none d-sm-block">Mateusz</p>
					<h1 class="h3 font-weight-light d-block d-sm-none">My name is</h1>
					<h1 class="display-5 mb-0 d-block d-sm-none">Mateusz</h1>
					<p>Front-end developer with .NET background.</p>
				</div>
				<div class="col-4 col-sm-4 col-md-3 col-lg-2 d-flex justify-content-center">
					<img src="/assets/avatar.jfif" alt="avatar" />
				</div>
			</div>
		</div>
		<div class="container frame__footer d-flex justify-content-start position-relative">
			<div>ANGULAR</div>
			<div>VUE</div>
		</div>
	</div>
</div>

<style>
	.home-screen--visible {
		visibility: visible;
	}

	.home-screen--hidden {
		visibility: hidden;
	}

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

	.platforms > a {
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
		box-shadow: 8px 7px 10px 9px rgb(0 0 0 / 26%);
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
		/* box-shadow: 7px 10px 5px 5px rgb(0 0 0 / 20%); */

		background: rgba(255, 251, 229, 0.1);
		box-shadow: 3px 3px 5px 6px rgb(0 0 0 / 20%);
		/* box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37); */
		/* backdrop-filter: blur(2px);
		-webkit-backdrop-filter: blur(2px); */
		border-radius: 20px;
		/* border: 1px solid rgba(255, 255, 255, 0.18); */
		/* transform: translateX(-100vw); */
	}

	.frame__background--transitional {
		opacity: 0;
		position: absolute;
		width: 100%;
		height: 100%;
		background-color: rgba(255, 251, 229, 0.7);
		border-radius: 20px;
	}

	.horizontal-stripes {
		width: 100%;
		height: 30vh;
		position: absolute;
		top: 50vh;
		display: grid;
		grid-template-rows: repeat(5, auto);
	}

	.horizontal-stripes div {
		transform: translateX(-100vw);
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
