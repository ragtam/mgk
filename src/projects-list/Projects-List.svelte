<script>
	import ColorfulStrap from '../utils/colorful-strap.svelte';
	import anime from 'animejs/lib/anime.es.js';
	import ProjectItem from './project-item/Project-Item.svelte';
</script>

<div>
	<section class="project-list__header--sticky pb-2 mb-5">
		<section style="height: 1rem; z-index: 2">
			<ColorfulStrap opacity="1" />
		</section>
		<section class="project-header">
			<h1 class="display-2">
				<span class="fw-light">My</span><span class="fw-bold">Projects</span>
			</h1>
		</section>
	</section>
	<div class="scroll">
		<div class="scrollable-item">
			<ProjectItem />
		</div>
		<div class="scrollable-item">
			<ProjectItem />
		</div>
		<div class="scrollable-item">c</div>
		<div class="scrollable-item">d</div>
		<div class="scrollable-item">e</div>
	</div>
</div>

<style>
	.project-list__header--sticky {
		position: sticky;
		top: 0rem;
		z-index: 1;
		background-color: white;
	}

	.scroll {
		position: relative;
	}

	.scrollable-item {
		/* height: 90vh; */
	}
</style>
