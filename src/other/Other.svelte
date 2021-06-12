<script>
	import { onMount } from 'svelte';
	import OtherListItem from './other-list-item/Other-List-Item.svelte';
	import anime from 'animejs/lib/anime.es.js';

	const items = [
		{
			header: 'Vanilla-tilt.js',
			subheader: 'contribution: installation manual update',
		},
		{
			header: 'Advanced Angular Architecture',
			subheader: 'workshop by Manfred Steyer',
		},
		{
			header: 'NG Poland',
			subheader: 'conference',
		},
		{
			header: 'Rethinking Asynchronous Programming',
			subheader: 'training by Kyle Simpson',
		},
		{
			header: 'Functional-Lite JavaScript',
			subheader: 'training by Kyle Simpson',
		},
	];

	onMount(() => {
		const entryAnimationObserver = getEntryAnimationObserver(getAnimation());
		const otherListElement = document.querySelector('.other__list');
		entryAnimationObserver.observe(otherListElement);
	});

	function getAnimation() {
		return anime({
			autoplay: false,
			targets: '.other__list-item',
			opacity: ['0', '1'],
			delay: anime.stagger(100),
		});
	}

	function getEntryAnimationObserver(animation) {
		return new IntersectionObserver(
			(entries, observer) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						animation.play();
						observer.unobserve(entry.target);
					}
				});
			},
			{ threshold: 0.4 }
		);
	}
</script>

<div class="other">
	<div class="some-text mt-5">
		<div class="row d-none d-lg-block">
			<div class="col-12">
				<h1 class="display-5 text-muted font-weight-light text-center">| conferences | workshops | trainings | contributions</h1>
			</div>
		</div>
		<div class="d-block d-lg-none">
			<div class="row">
				<div class="col-12 col-sm-6">
					<h1 class="display-5 text-muted font-weight-light text-left">| conferences</h1>
				</div>
				<div class="col-12 col-sm-6">
					<h1 class="display-5 text-muted font-weight-light text-left">| workshops</h1>
				</div>
				<div class="col-12 col-sm-6">
					<h1 class="display-5 text-muted font-weight-light text-left">| trainings</h1>
				</div>
				<div class="col-12 col-sm-6">
					<h1 class="display-5 text-muted font-weight-light text-left">| contributions</h1>
				</div>
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
		box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		position: relative;
		z-index: 1;
	}

	.other__list {
		min-height: 60vh;
		width: 100%;
		backdrop-filter: blur(4px);
		--webkit-backdrop-filter: blur(4px);
		background-color: rgba(252, 191, 73, 0.7);
		z-index: 1;
	}

	.some-text {
		position: sticky;
		top: 3rem;
	}
</style>
