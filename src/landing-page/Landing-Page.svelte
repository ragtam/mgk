<script>
	import { onMount } from 'svelte';
	import anime from 'animejs/lib/anime.es.js';
	import { initializeTiltElement, destroyTilt, initializeRellax, destroyRellax } from '../utils';
	import LandingPageIntro from './Landing-Page-Intro.svelte';

	let isSectionVisible = false;
	let rellax;
	let tiltElement;

	const description = `I am a frontend developer focusing mainly on Angular. In my free time I explore other frameworks, like Vue or Svelte and make my
						first steps in web design. <br /><br/>Member of <a href="https://indepth.dev/" target="_blank">inDepth.dev</a> community.`;

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
					rellax = initializeRellax('.rellax');
					tiltElement = initializeTiltElement('.frame', { max: 1, gyroscope: false });
				} else {
					destroyRellax(rellax);
					destroyTilt(tiltElement);
				}
			});
		});

		const sectionElement = document.querySelector('.home-screen');

		setTimeout(() => {
			isSectionVisible = true;
		}, 500);
		setTimeout(() => {
			entryAnimation.play();
			entryAnimation.finished.then(() => {
				observer.observe(target);
				sectionObserver.observe(sectionElement);
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
						><i class="bi bi-google" /></a
					>
					<a
						href="https://www.linkedin.com/in/mateusz-garbaciak-b50b20194/"
						target="_blank"
						class="btn rounded-circle"
						role="button"><i class="bi bi-linkedin" /></a
					>
					<a href="https://github.com/ragtam" target="_blank" class="btn rounded-circle" role="button"
						><i class="bi bi-github" /></a
					>
				</div>
			</div>
			<div class="row g-0 mt-5 introduction-text">
				<div class="col-8 col-sm-7 col-md-8 col-lg-9">
					<LandingPageIntro />
					<p class="d-none d-md-block">
						{@html description}
					</p>
				</div>
				<div class="col-4 col-sm-5 col-md-4 col-lg-3 d-flex justify-content-center">
					<img src="/assets/avatar.jfif" alt="avatar" />
				</div>
				<div class="col-12 d-block d-md-none mt-3">
					<p>
						{@html description}
					</p>
				</div>
			</div>
		</div>
		<div class="container frame__footer d-flex justify-content-start position-relative">
			<div>ANGULAR</div>
			<div>VUE</div>
			<div>SVELTE</div>
		</div>
	</div>
</div>

<style>
	.home-screen {
		height: 100vh;
		justify-content: center;
		box-shadow: 8px 7px 10px 9px rgb(0 0 0 / 26%);
		position: relative;
		overflow-y: hidden;
		z-index: 1;
	}

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
		background-color: #003049;
	}

	.dots-in-line > div:nth-child(2) {
		background-color: #d62828;
	}

	.dots-in-line > div:nth-child(3) {
		background-color: #f77f00;
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
		background-color: #fcbf49;
	}

	.frame {
		display: grid;
		align-content: space-between;
		width: 80vw;
		height: 87vh;
		position: relative;
		background: rgba(234, 226, 183, 0.1);
		box-shadow: 3px 3px 5px 6px rgb(0 0 0 / 20%);
		border-radius: 20px;
	}

	.frame__background--transitional {
		opacity: 0;
		position: absolute;
		width: 100%;
		height: 100%;
		background-color: rgba(234, 226, 183, 0.4);
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
		background-color: #eae2b7;
	}

	.horizontal-stripes > div:nth-child(2) {
		background-color: #fcbf49;
	}

	.horizontal-stripes > div:nth-child(3) {
		background-color: #f77f00;
	}

	.horizontal-stripes > div:nth-child(4) {
		background-color: #d62828;
	}

	.horizontal-stripes > div:nth-child(5) {
		background-color: #003049;
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
