<script>
	import ManBehindTheDesk from './Man-Behind-The-Desk.svelte';

	setTimeout(() => {
		var rellax = new Rellax('.rellax');
	}, 0);
</script>

<div class="background-color">
	<div class="row test">
		<div class="col-12 col-lg-5 d-flex align-items-center min-height--half-screen">
			<div class="rellax container" data-rellax-speed="-6">
				<h3 class="text-uppercase text-muted">Hello</h3>
				<h1 class="fs-1 text-white">I'm Mateusz</h1>
				<h3 class="text-white">Front End Developer working with Angular and Vue.</h3>
				<button type="button" class="btn btn-success btn-lg button-style mt-5"> Check my projects </button>
			</div>
		</div>

		<div class="col-12 col-lg-7 d-flex align-items-end">
			<ManBehindTheDesk />
		</div>
	</div>
</div>

<style>
	.background-color {
		background-color: #3f3d56;
		overflow: hidden;
	}

	.min-height--half-screen {
		min-height: 50vh;
	}

	.test {
		height: 100vh;
	}

	.button-style {
		display: block;
		margin: 0 auto;
		min-width: 25vw;
	}
</style>
