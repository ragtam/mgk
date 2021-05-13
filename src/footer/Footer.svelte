<script>
	import { onMount } from 'svelte';
	import { initializeRellax, destroyRellax } from '../utils';

	onMount(() => {
		const parallaxObserver = getParallaxObserver();
		const element = document.querySelector('.footer');
		parallaxObserver.observe(element);
	});

	function getParallaxObserver() {
		return new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					rellax = initializeRellax('.rellax');
				} else {
					destroyRellax(rellax);
				}
			});
		});
	}
</script>

<div class="footer py-5">
	<div class="container">
		<div class="footer__frame d-flex align-items-center justify-content-center ">
			<div class="d-flex flex-column">
				<h1 class="display-5 text-dark text-center font-weight-light">Liked my portfolio?</h1>
				<button class="btn btn-warning" style="background-color: #fcbf49">Let`s get in touch</button>
			</div>
		</div>
	</div>
</div>

<style>
	.footer {
		box-shadow: inset 0px 9px 6px 1px rgb(0 0 0 / 20%);
		background: repeating-radial-gradient(circle, #f77f00, #f77f00 40px, #d62828 40px, #d62828 80px);
	}

	.footer__frame {
		background-color: #d62828;
		min-height: 50vh;
		border: 3px solid #fcbf49;
		border-radius: 10px;
		box-shadow: 4px 4px 5px 6px rgb(0 0 0 / 20%);
	}
</style>
