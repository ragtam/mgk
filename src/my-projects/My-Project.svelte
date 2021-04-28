<script>
	import { onMount } from 'svelte';
	import Rellax from 'rellax';

	let rellax;

	onMount(() => {
		const sectionObserver = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					rellax = new Rellax('.rellaxx', {
						breakpoints: [576, 768, 1201],
					});
				} else {
					rellax.destroy();
				}
			});
		});

		const sectionElement = document.querySelector('.my-project');
		sectionObserver.observe(sectionElement);
	});
</script>

<div class="my-project">
	<div class="row no-gutters">
		<div class="position-absolute background-section">
			<div
				class="col-2 offset-10 col-sm-5 offset-sm-7 rellaxx"
				data-rellax-speed="-1"
				data-rellax-mobile-speed="1.5"
				data-rellax-xs-speed="1.5"
			/>
		</div>
		<div
			class="col-12 col-sm-4 order-1 order-sm-1 section-left rellaxx"
			data-rellax-speed="-2"
			data-rellax-mobile-speed="0"
			data-rellax-xs-speed="0"
		>
			<slot name="top-left" />
			<slot name="bottom-left" />
		</div>
		<div class="col-12 col-sm-4 order-3 order-sm-2 d-flex align-items-end">
			<div
				class="vhs-tape mx-0 mb-5 mt-1 mx-lg-5 rellaxx"
				data-rellax-speed="2"
				data-rellax-mobile-speed="0"
				data-rellax-xs-speed="0"
			>
				<slot name="card" />
			</div>
		</div>
		<div
			class="col-12 col-sm-4 order-2 order-sm-3 section-right rellaxx"
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
		background-color: #f0ede6;
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
		background: linear-gradient(180deg, #f83d46 20%, #4a4a4a 0%);
		height: 100vh;
	}
</style>
