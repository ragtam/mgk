<script>
	import { onMount } from 'svelte';
	import Rellax from 'rellax';

	export let parallaxClassName;
	export let mainCssRef;
	export let backgroundCssRef;

	let rellax;

	onMount(() => {
		console.log('mainCssRef :>> ', mainCssRef);

		const sectionObserver = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					console.log('is');
					rellax = new Rellax(`.${parallaxClassName}`, {
						breakpoints: [576, 768, 1201],
					});
				} else {
					console.log('is not');
					rellax.destroy();
				}
			});
		});

		const sectionElement = document.querySelector(`[mainCssRef='${mainCssRef}']`);
		sectionObserver.observe(sectionElement);
	});
</script>

<div {mainCssRef} class="my-project">
	<div class="row no-gutters">
		<div class="position-absolute background-section">
			<div
				{backgroundCssRef}
				class="col-2 offset-10 col-sm-5 offset-sm-7 {parallaxClassName}"
				data-rellax-speed="-1"
				data-rellax-mobile-speed="1.5"
				data-rellax-xs-speed="1.5"
			/>
		</div>
		<div
			class="col-12 col-sm-4 order-1 order-sm-1 section-left {parallaxClassName}"
			data-rellax-speed="-2"
			data-rellax-mobile-speed="0"
			data-rellax-xs-speed="0"
		>
			<slot name="top-left" />
			<slot name="bottom-left" />
		</div>
		<div class="col-12 col-sm-4 order-3 order-sm-2 d-flex align-items-end">
			<div
				class="vhs-tape mx-0 mb-5 mt-1 mx-lg-5 {parallaxClassName}"
				data-rellax-speed="1.7"
				data-rellax-mobile-speed="0"
				data-rellax-xs-speed="0"
			>
				<slot name="card" />
			</div>
		</div>
		<div
			class="col-12 col-sm-4 order-2 order-sm-3 section-right {parallaxClassName}"
			data-rellax-speed="-3"
			data-rellax-mobile-speed="0"
			data-rellax-xs-speed="0"
		>
			<slot name="right" />
		</div>
	</div>
</div>

<style>
	.my-project {
		position: relative;
		min-height: 100vh;
		overflow-y: hidden;
	}

	.my-project > div:nth-child(1) {
		min-height: 100vh;
	}

	.vhs-tape {
		min-height: 65vh;
		width: 100%;
		position: relative;
		box-shadow: 3px 3px 5px 6px rgb(0 0 0 / 20%);
		border-radius: 10px;
	}

	.section-left,
	.section-right {
		display: grid;
	}

	.my-project :global(ul) {
		list-style-type: none;
	}

	.background-section {
		width: 100%;
		height: 60vh;
		right: 0;
		bottom: 0;
	}

	.background-section > div {
		height: 100vh;
	}
</style>
