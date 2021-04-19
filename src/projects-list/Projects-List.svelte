<script>
	import ProjectItem from './project-item/Project-Item.svelte';
</script>

<div>
	<div class="scrollable-item" style="z-index: 3; bottom: 3rem; height: calc(100vh - 3rem); transform: rotateZ(1deg)">
		<div class="scrollable-item__clip-path" style="background-color: #f9f1e4;">
			<ProjectItem />
		</div>
	</div>
	<div class="scrollable-item" style="z-index: 2; bottom: 2rem; height: calc(100vh - 2rem); transform: rotateZ(0deg)">
		<div class="scrollable-item__clip-path" style="background-color: #FF5A00">
			<ProjectItem />
		</div>
	</div>
	<div class="scrollable-item" style="z-index: 1; bottom: 1rem; height: calc(100vh - 1rem); transform: rotateZ(-1deg)">
		<div class="scrollable-item__clip-path" style="background-color: #FFBB00">
			<ProjectItem />
		</div>
	</div>
</div>

<style>
	/* .project-list {
		position: relative;
	} */

	.scrollable-item {
		bottom: 0;
		display: flex;
		position: sticky;
		width: 100%;
		box-shadow: 6px 6px 5px 5px rgb(0 0 0 / 20%);
	}

	.scrollable-item__clip-path {
		clip-path: polygon(100% 0%, 100% 100%, 0% 100%, 0% 5%, 38% 5%, 40% 0%);
	}
</style>
