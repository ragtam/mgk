<script>
	import Rellax from 'rellax';

	import ManBehindTheDesk from './Man-Behind-The-Desk.svelte';

	setUpParallaxEffect();

	function setUpParallaxEffect() {
		setTimeout(() => {
			new Rellax('.rellax');
		}, 0);
	}
</script>

<div class="home row">
	<div class="col-12 col-lg-4 d-flex align-items-center min-height-50vh">
		<div class="mx-5 position-absolute">
			<div class="rellax" data-rellax-speed="-3">
				<h1 class="display-4 text-muted rellax" data-rellax-speed="-3">Hello</h1>
				<h1 class="display-1 text-white rellax" data-rellax-speed="-3">I'm Mateusz</h1>
				<h1 class="display-6 text-secondary rellax" data-rellax-speed="-3">Front End Developer struggling with CSS.</h1>
			</div>
		</div>
	</div>
	<div class="col-12 col-lg-8 d-flex justify-content-end">
		<div class="align-self-end">
			123
			<!-- <ManBehindTheDesk /> -->
		</div>
	</div>
</div>

<style>
	.home {
		height: 100vh;
		background-color: #3f3d56;
	}

	/* .min-height-50vh {
		min-height: 50vh;
	} */

	.position-absolute {
		position: absolute;
	}
</style>
