<script>
	import Rellax from 'rellax';
	import anime from 'animejs/lib/anime.es.js';

	import ManBehindTheDesk from './Man-Behind-The-Desk.svelte';

	setTimeout(() => {
		setUpInitialAnimationEffect();
		setUpParallaxEffect();
		setUpBackgroundColorChangeOnScroll();
	}, 0);

	function setUpInitialAnimationEffect() {
		const t = anime.timeline({
			easing: 'easeOutExpo',
			duration: 750,
		});
		t.add({
			targets: '.intro-overlay div',
			opacity: 1,
			delay: anime.stagger(100),
		});
		t.add(
			{
				targets: '.background-overlay',
				opacity: 1,
			},
			'-=400'
		);
		t.add(
			{
				targets: '.intro-overlay div',
				opacity: 0,
				delay: anime.stagger(100),
			},
			'-=900'
		);
		t.add(
			{
				targets: '.image',
				translateX: ['100%', '0'],
				easing: 'spring(1, 80, 10, 0)',
			},
			'-=900'
		);
	}

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
	<div class="background-overlay" />

	<section class="intro-overlay">
		<div style="background-color: #E8BD3B" />
		<div style="background-color: #E87927" />
		<div style="background-color: #DB4C46" />
		<div style="background-color: #AF3736" />
		<div style="background-color: #4F315B" />
		<div style="background-color: #3D1C49" />
	</section>

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
	<div class="col-12 col-lg-8 d-flex justify-content-end max-height-50vh position-relative image">
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

	.image {
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
