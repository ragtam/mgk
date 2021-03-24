<script>
	import ManBehindTheDesk from './Man-Behind-The-Desk.svelte';
	import { animateOnEntry, setUpParallaxEffect, setUpScrollAnimation } from './home.js';

	setTimeout(() => {
		animateOnEntry();
		setUpParallaxEffect();
		setUpScrollAnimation();
	}, 0);
</script>

<div class="home row overflow-hidden gx-0">
	<div class="background-overlay" />

	<div class="intro-overlay">
		<div style="background-color: #E8BD3B" />
		<div style="background-color: #E87927" />
		<div style="background-color: #DB4C46" />
		<div style="background-color: #AF3736" />
		<div style="background-color: #4F315B" />
		<div style="background-color: #3D1C49" />
	</div>

	<div class="overlay" />
	<div class="sentinel" />
	<div class="col-12 col-lg-4 d-flex align-items-center min-height-50vh">
		<div class="mx-5 position-absolute">
			<div id="text" class="rellax" data-rellax-speed="-2" data-rellax-xs-speed="0">
				<h1 class="display-4 text-muted rellax">Hello!</h1>
				<h1 class="display-1 text-white rellax">I'm Mateusz</h1>
				<h1 class="display-6 text-secondary rellax">Front End Developer struggling with CSS.</h1>
			</div>
		</div>
	</div>
	<div id="image" class="col-12 col-lg-8 d-flex justify-content-end position-relative">
		<div class="align-self-end">
			<ManBehindTheDesk />
		</div>
	</div>
</div>

<style>
	.background-overlay {
		position: absolute;
		width: 100%;
		height: 100vh;
		background-color: #e8bd3b;
		opacity: 0;
	}

	.intro-overlay {
		position: absolute;
		display: grid;
		grid-template-columns: repeat(6, auto);
	}

	.intro-overlay div {
		height: 100vh;
		transition: background-color 1s;
		opacity: 0;
	}

	.overlay {
		position: absolute;
		height: 100vh;
		width: 100%;
		background-image: linear-gradient(#e8bd3b, #af3736, #4f315b);
		opacity: 0;
	}

	.home {
		height: 100vh;
	}

	.min-height-50vh {
		min-height: 50vh;
	}

	.position-absolute {
		position: absolute;
		z-index: 1;
	}
</style>
