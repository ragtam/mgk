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
	<div class="row">
		<div
			class="col-12 col-sm-4 order-1 order-sm-1 section-left rellaxx"
			data-rellax-speed="-2"
			data-rellax-mobile-speed="0"
			data-rellax-xs-speed="0"
		>
			<div class="col-12 col-sm-8 offset-sm-1 order-2 order-sm-1 d-flex justify-content-between align-self-top">
				<p class="text-muted font-weight-bold text-uppercase">| tech stack</p>
				<ul class="text-dark text-right text-sm-left">
					<li>Vue</li>
					<li>Nuxt</li>
					<li>Vuetify</li>
					<li>Storybook</li>
				</ul>
			</div>
			<div class="col-12 col-sm-11 offset-sm-1 order-1 order-sm-2 d-flex flex-column align-self-top mt-3 mt-sm-0">
				<p class="text-muted font-weight-bold text-uppercase mb-0">| name</p>
				<h6 class="display-2 pt-0" style="color: #f83d46;">Hackathon</h6>
			</div>
		</div>
		<div class="col-12 col-sm-4 order-3 order-sm-2 d-flex align-items-end">
			<div class="vhs-tape mx-0 mx-lg-5 rellaxx" data-rellax-speed="2" data-rellax-mobile-speed="0" data-rellax-xs-speed="0">
				<div class="container">
					<h1 class="h5 font-weight-bold text-uppercase mt-5 pb-0 mb-0 text-center">Hackathon B-Hack</h1>
					<h1 class="display-3 text-center mb-5">Barbórka 4.0</h1>
					<p class="col-9 pt-3 text-right">
						Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased
						to twinkle. By the same illusion which lifts the horizon of.
					</p>
					<button class="btn btn-secondary mt-5 col-8 offset-2" style="background-color: #4a4a4a" type="button"
						>Check project`s storybook page</button
					>
				</div>
			</div>
		</div>
		<div
			class="col-12 col-sm-4 order-2 order-sm-3 section-right rellaxx"
			data-rellax-speed="-2"
			data-rellax-mobile-speed="0"
			data-rellax-xs-speed="0"
		>
			<div class="col-12 col-sm-8 offset-sm-1 d-flex justify-content-between align-self-top">
				<p class="text-muted font-weight-bold text-uppercase">| date</p>
				<p class="text-dark text-sm-left">11.2021</p>
			</div>
			<div class="col-11 offset-1 d-flex flex-column align-self-top pt-5 mt-5" />
		</div>
	</div>
</div>

<style>
	.my-project {
		position: relative;
		min-height: 100vh;
		background-color: #f0ede6;
	}

	.my-project > div {
		height: 100vh;
	}

	.my-project::before {
		content: '';
		position: absolute;
		bottom: 0;
		right: 0;
		width: 43%;
		height: 60%;
		background: linear-gradient(180deg, #f83d46 20%, #4a4a4a 0%);
	}

	.vhs-tape {
		height: 60vh;
		width: 100%;
		position: relative;
		box-shadow: 3px 3px 5px 6px rgb(0 0 0 / 20%);
		border-radius: 10px;
	}

	.section-left,
	.section-right {
		display: grid;
	}

	.my-project ul {
		list-style-type: none;
	}
</style>
