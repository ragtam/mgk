<script>
	import Rellax from 'rellax';
	import anime from 'animejs/lib/anime.es.js';

	import ManBehindTheDesk from './Man-Behind-The-Desk.svelte';

	setTimeout(() => {
		setUpParallaxEffect();
		setUpBackgroundColorChangeOnScroll();
	}, 0);

	function setUpParallaxEffect() {
		setTimeout(() => {
			new Rellax('.rellax');
		}, 0);
	}

	function setUpBackgroundColorChangeOnScroll() {
		const overlayAnimation = anime({
			targets: '.overlay',
			easing: 'easeInOutQuad',
			opacity: 1,
			autoplay: false,
			duration: 500,
		});

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (!entry.isIntersecting) {
						overlayAnimation.play();
					} else {
						overlayAnimation.seek(0);
					}
				});
			},
			{ threshold: 0.5 }
		);

		const target = document.querySelector('.sentinel');

		observer.observe(target);
	}
</script>

<div class="home row overflow-hidden gx-0">
	<div class="overlay" />
	<div class="sentinel" />
	<div class="col-12 col-lg-4 d-flex align-items-center min-height-50vh">
		<div class="mx-5 position-absolute">
			<div class="rellax" data-rellax-speed="-2" data-rellax-xs-speed="0">
				<h1 class="display-4 text-muted rellax">Hello!</h1>
				<h1 class="display-1 text-white rellax">I'm Mateusz</h1>
				<h1 class="display-6 text-secondary rellax">Front End Developer struggling with CSS.</h1>
			</div>
		</div>
	</div>
	<div class="col-12 col-lg-8 d-flex justify-content-end max-height-50vh position-relative">
		<div class="align-self-end">
			<ManBehindTheDesk />
		</div>
	</div>
</div>

<style>
	.overlay {
		position: absolute;
		height: 100vh;
		width: 100%;
		background-image: linear-gradient(#e8bd3b, #af3736, #4f315b);
		opacity: 0;
	}

	.home {
		height: 100vh;
		background-color: #e8bd3b;
	}

	.min-height-50vh {
		min-height: 50vh;
	}

	.position-absolute {
		position: absolute;
		z-index: 1;
	}
</style>
