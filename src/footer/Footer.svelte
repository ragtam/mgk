<script>
	import { onMount } from 'svelte';
	import anime from 'animejs';

	onMount(() => {
		const animation = anime({
			targets: '.footer > .animation-stagger > *',
			opacity: [0, 1],
			delay: anime.stagger(100),
			autoplay: false,
		});

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						animation.play();
					} else {
					}
				});
			},
			{ threshold: 0.5 }
		);
		const element = document.querySelector('.footer');
		observer.observe(element);
	});
</script>

<div class="footer">
	<div class="animation-stagger text-center">
		<h1 class="h5 text-muted font-weight-light">This page was designed in Figma.</h1>
		<h1 class="h5 text-muted font-weight-light">Then it was coded in Svelte.</h1>
		<h1 class="h5 text-muted font-weight-light">Later Firebase took care of hosting.</h1>
		<h1 class="h5 text-muted font-weight-light">And now you are seeing it in your favourite browser!</h1>
		<h1 class="h5 text-muted font-weight-light">If you like it, feel free to</h1>
		<button class="btn btn-dark text-uppercase mt-3"> reach me out</button>
	</div>
</div>

<style>
	.footer {
		position: relative;
		z-index: 1;
		box-shadow: 0px -8px 6px 1px rgb(0 0 0 / 20%);
		min-height: 50vh;
		background-color: #003049;

		display: grid;
		justify-content: center;
		align-content: center;
	}
</style>
