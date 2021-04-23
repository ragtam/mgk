<script>
	import anime from 'animejs/lib/anime.es';
	import { onMount } from 'svelte';

	onMount(() => {
		setTimeout(() => {
			var animationTimeline = anime.timeline({
				duration: 1000,
				autoplay: false,
			});
			// animationTimeline.add({
			// 	targets: '.secondary-background',
			// 	translateX: ['-100%', '0'],
			// });
			animationTimeline.add({
				targets: '.my-projects-header .secondary-text',
				width: ['0', '100%'],
				easing: 'easeOutInBounce',
			});

			const observer = new IntersectionObserver(
				(entries, observer) => {
					entries.forEach((entry) => {
						if (entry.isIntersecting) {
							animationTimeline.play();
							observer.unobserve(entry.target);
						}
					});
				},
				{ threshold: 0.8 }
			);

			const target = document.querySelector('.my-projects-header');
			observer.observe(target);
		});
	});
</script>

<div class="my-projects-header">
	<div class="secondary-background" />
	<h1 class="main-text display-1">
		<div class="secondary-text">My Projects</div>
		My Projects
	</h1>
</div>

<style>
	.my-projects-header {
		min-height: 50vh;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-bottom: -50px;
		position: relative;
	}

	.my-projects-header .main-text {
		position: relative;
		color: #2e2e2e;
		-webkit-text-stroke: 1px #d9003a;
		font-weight: bolder;
		text-transform: uppercase;
	}

	.my-projects-header .secondary-text {
		content: 'My Projects';
		white-space: nowrap;
		position: absolute;
		width: 0;
		height: 100%;
		top: 0;
		left: 0;
		color: #d9003a;
		-webkit-text-stroke: 1px #d9003a;
		text-shadow: -0.001em -0.001em 1px rgba(255, 255, 255, 0.15);
		overflow: hidden;
	}

	.secondary-background {
		position: absolute;
		transform: translateX(0);
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		background-color: #2e2e2e;
	}
</style>
