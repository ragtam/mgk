<script>
	import { onMount } from 'svelte';
	import Rellax from 'rellax';
	import { initializeTiltElement, destroyTilt } from '../../utils/tilt-animation';

	export let parallaxClassName;
	export let mainCssRef;
	export let backgroundCssRef;
	export let cardCssRef;

	let rellax;
	let tiltElement;

	onMount(() => {
		const sectionObserver = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					rellax = initializeRellax(`.${parallaxClassName}`);
					tiltElement = initializeTiltElement(`.${parallaxClassName}--tilt`, { max: 3 });
				} else {
					destroyRellax(rellax);
					destroyTilt(tiltElement);
				}
			});
		});

		const sectionElement = document.querySelector(`[mainCssRef='${mainCssRef}']`);
		sectionObserver.observe(sectionElement);
	});

	function initializeRellax(cssSelector) {
		return new Rellax(cssSelector, {
			breakpoints: [576, 768, 1201],
		});
	}

	function destroyRellax(rellaxRef) {
		if (rellaxRef) {
			rellaxRef.destroy();
		}
	}
</script>

<div {mainCssRef} class="my-project">
	<div class="row no-gutters">
		<div class="position-absolute background-section">
			<div {backgroundCssRef} class="col-2 offset-10 col-sm-5 offset-sm-7" />
		</div>
		<div
			class="col-12 col-sm-12 col-md-4 order-1 order-sm-1 section-left {parallaxClassName}"
			data-rellax-speed="-3"
			data-rellax-mobile-speed="0.5"
			data-rellax-xs-speed="0.5"
			data-rellax-percentage="0.5"
		>
			<slot name="top-left" />
			<slot name="bottom-left" />
		</div>
		<div class="col-12 col-sm-11 offset-sm-1 offset-md-0 col-md-4 order-3 order-sm-3 order-md-2 d-flex align-items-center">
			<div
				class="px-4 px-md-5 {parallaxClassName}"
				data-rellax-speed="-10"
				data-rellax-mobile-speed="3"
				data-rellax-xs-speed="3"
				data-rellax-percentage="0.5"
			>
				<div class="vhs-tape {parallaxClassName + '--tilt'} " {cardCssRef}>
					<slot name="card" />
				</div>
			</div>
		</div>
		<div
			class="col-12 col-sm-12 col-md-4 order-2 order-sm-2 order-md-3 section-right {parallaxClassName}"
			data-rellax-speed="1.5"
			data-rellax-mobile-speed="0.5"
			data-rellax-xs-speed="0.5"
			data-rellax-percentage="0.5"
		>
			<slot name="right" />
			<div class="col-12 col-sm-11 offset-sm-1 order-1 order-md-2 d-flex flex-column align-self-center mt-3 mt-sm-0" />
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

		backdrop-filter: blur(10px);
		--webkit-backdrop-filter: blur(10px);
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
		height: 60vh;
	}
</style>
