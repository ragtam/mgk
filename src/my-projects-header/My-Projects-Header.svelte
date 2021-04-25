<script>
	import anime from 'animejs/lib/anime.es';
	import { onMount } from 'svelte';

	let isSectionVisible = false;

	onMount(() => {
		setTimeout(() => {
			const animation = getAnimationDefinition();
			const willChangeObserver = getWillChangeObserver();
			const animationObserver = getAnimationObserver(animation);
			const target = getElementToObserve();
			animationObserver.observe(target);
			willChangeObserver.observe(target);
		});
	});

	function getAnimationDefinition() {
		return anime({
			targets: '.my-projects-header .secondary-text',
			width: ['0', '100%'],
			easing: 'easeOutInBounce',
			duration: 1000,
			autoplay: false,
		});
	}

	function getWillChangeObserver() {
		return new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						isSectionVisible = true;
					} else {
						isSectionVisible = false;
					}
				});
			},
			{ threshold: 0.1 }
		);
	}

	function getAnimationObserver(animation) {
		return new IntersectionObserver(
			(entries, observer) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						animation.play();
						observer.unobserve(entry.target);
					}
				});
			},
			{ threshold: 0.8 }
		);
	}

	function getElementToObserve() {
		return document.querySelector('.my-projects-header');
	}
</script>

<div class="my-projects-header">
	<h1 class="main-text display-1 py-4 px-2">
		<div class="secondary-text py-4 px-2 {isSectionVisible ? 'secondary-text__width-will-change' : ''}">My Projects</div>
		My Projects
	</h1>
</div>

<style>
	.my-projects-header {
		z-index: -1;
		background-color: #2e2e2e;
		min-height: 50vh;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-bottom: -50px;
		position: relative;
	}

	.my-projects-header .main-text {
		position: sticky;
		top: 1.3rem;
		color: #333333;
		-webkit-text-stroke: 1px black;
		font-weight: bolder;
		text-transform: uppercase;
	}

	.my-projects-header .secondary-text {
		white-space: nowrap;
		position: absolute;
		width: 0;
		height: 100%;
		top: 0;
		left: 0;
		color: #595959;
		-webkit-text-stroke: 1px #feb603;
		overflow: hidden;
		border-right: 3px solid #feb603;
	}

	.secondary-text__width-will-change {
		will-change: width;
	}
</style>
