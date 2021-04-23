<script>
	import anime from 'animejs/lib/anime.es';
	import { onMount } from 'svelte';

	onMount(() => {
		setTimeout(() => {
			var animation = anime({
				targets: '.my-projects-header .secondary-text',
				width: ['0', '100%'],
				easing: 'easeOutInBounce',
				duration: 1000,
				autoplay: false,
			});

			const observer = new IntersectionObserver(
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

			const target = document.querySelector('.my-projects-header');
			observer.observe(target);
		});
	});
</script>

<div class="my-projects-header">
	<h1 class="main-text display-1">
		<div class="secondary-text">My Projects</div>
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
		top: 1rem;
		color: #333333;
		/* -webkit-text-stroke: 1px #d9003a; */
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
		-webkit-text-stroke: 1px #000000;
		overflow: hidden;
	}
</style>
