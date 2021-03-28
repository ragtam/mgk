<script>
	import ColorfulStrap from '../utils/colorful-strap.svelte';
</script>

<div>
	<section class="sticky">
		<ColorfulStrap height="1rem" />
		<section class="project-header">
			<h1 class="display-2">
				<span class="fw-light">My</span><span class="fw-bold">Projects</span>
			</h1>
		</section>
	</section>
	<div class="scroll">
		<div class="scrollable-item">a</div>
		<div class="scrollable-item">b</div>
		<div class="scrollable-item">c</div>
		<div class="scrollable-item">d</div>
		<div class="scrollable-item">e</div>
	</div>
</div>

<style>
	.sticky {
		position: sticky;
		top: 0;
		height: 100vh;
	}

	.scroll {
		position: relative;
		margin-left: 1rem;
		width: 30vw;
		margin-top: -50vh;
	}

	.scrollable-item {
		height: 60vh;
	}
</style>
