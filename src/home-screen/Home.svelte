<script>
	import ManBehindTheDesk from './Man-Behind-The-Desk.svelte';
	import { animateOnEntry, setUpParallaxEffect, setUpScrollAnimation, animateScrollIndicator } from './home.js';

	let colors = ['#E8BD3B', '#E87927', '#DB4C46', '#AF3736', '#4F315B', '#3D1C49'];

	setTimeout(() => {
		animateOnEntry();
		setUpParallaxEffect();
		setUpScrollAnimation();
		animateScrollIndicator();
	}, 0);
</script>

<div class="home row overflow-hidden gx-0">
	<div class="background-overlay" />

	<div class="intro-overlay">
		{#each colors as color}
			<div style="background-color: {color}" />
		{/each}
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
		<div class="scroll-indicator">
			<i class="bi bi-mouse" />
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

	.scroll-indicator {
		position: absolute;
		display: flex;
		align-self: end;
		justify-content: center;
		width: 100%;
	}

	.scroll-indicator i {
		font-size: 2rem;
	}
</style>
