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

<div class="home">
	<div class="leading-text rellax" data-rellax-speed="-3">
		<h1 class="display-4 text-muted">Hello</h1>
		<h1 class="display-1 text-white">I'm Mateusz</h1>
		<h1 class="display-6 text-secondary">Front End Developer struggling with CSS.</h1>
	</div>
	<img class="mouse-icon" src="/assets/icons/mouse.svg" alt="" width="32" height="32" />
	<div class="image-container">
		<ManBehindTheDesk />
	</div>
</div>

<style>
	.home {
		display: flex;
		height: 100vh;
		justify-content: end;
		background-color: #3f3d56;
	}

	.image-container {
		align-self: end;
	}

	.leading-text {
		position: absolute;
		left: 0;
		margin-left: 2rem;
		margin-right: 2rem;
		align-self: center;
	}

	.mouse-icon {
		color: white;
		position: absolute;
		align-self: flex-end;
		left: 0;
		right: 0;
		margin: 0 auto;
		margin-bottom: 4rem;

		animation: animate-mouse-icon 1s linear 1s infinite alternate;
	}

	@keyframes animate-mouse-icon {
		from {
			transform: scale(1);
		}
		to {
			transform: scale(1.2);
		}
	}
</style>
