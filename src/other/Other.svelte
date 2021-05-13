<script>
	import { onMount } from 'svelte';
	import OtherListItem from './other-list-item/Other-List-Item.svelte';
	import { initializeRellax, destroyRellax } from '../utils';
	import anime from 'animejs/lib/anime.es.js';

	const items = [
		{
			header: 'Advanced Angular Architecture',
			subheader: 'workshop by Manfred Steyer',
		},
		{
			header: 'NG Poland',
			subheader: 'Conference',
		},
		{
			header: 'Another Thing',
			subheader: 'description',
		},
	];
	let rellax;

	onMount(() => {
		const parallaxObserver = getParallaxObserver();
		const entryAnimationObserver = getEntryAnimationObserver(getAnimation());

		const element = document.querySelector('.other');
		const otherListElement = document.querySelector('.other__list');

		parallaxObserver.observe(element);
		entryAnimationObserver.observe(otherListElement);
	});

	function getAnimation() {
		return anime({
			autoplay: false,
			targets: '.other__list-item',
			translateX: ['-8px', '0'],
			delay: anime.stagger(100),
		});
	}

	function getParallaxObserver(animation) {
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

	function getEntryAnimationObserver(animation) {
		return new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						animation.play();
					}
				});
			},
			{ threshold: '0.7' }
		);
	}
</script>

<div class="other">
	<div class="container-fluid">
		<div class="row rellax" data-rellax-speed="-3" data-rellax-percentage="0.5">
			<div class="col-12">
				<h1 class="display-4 text-muted font-weight-light text-md-center text-left">
					|conferences |workshops |trainings |contributions
				</h1>
			</div>
		</div>
	</div>
	<div class="other__list d-flex align-items-center mt-5">
		<div class="container">
			{#each items as item, index}
				<div class="other__list-item">
					<OtherListItem
						><p slot="index">0{index + 1}</p>
						{item.header}
						<p slot="subheader">{item.subheader}</p>
					</OtherListItem>
				</div>
			{/each}
		</div>
	</div>
</div>

<style>
	.other {
		background-color: #fcbf49;
		overflow: hidden;
		box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
	}

	.other__list > div {
		backdrop-filter: blur(4px);
		--webkit-backdrop-filter: blur(10px);
	}

	.other__list {
		min-height: 60vh;
	}
</style>
