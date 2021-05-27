<script>
	import { onMount } from 'svelte';
	import OtherListItem from './other-list-item/Other-List-Item.svelte';
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
			translateX: ['-8px', '0'],
			delay: anime.stagger(100),
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
			{ threshold: '0.9' }
		);
	}
</script>

<div class="other">
	<div class="some-text">
		<div class="row">
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
		box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
		min-height: 90vh;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		position: relative;
		z-index: 1;
	}

	.other__list > div {
		backdrop-filter: blur(4px);
		--webkit-backdrop-filter: blur(4px);
	}

	.other__list {
		min-height: 60vh;
		width: 100%;
	}

	.some-text {
		position: sticky;
		top: 3rem;
	}
</style>
