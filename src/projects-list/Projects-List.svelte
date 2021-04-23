<script>
	import ProjectItem from './project-item/Project-Item.svelte';
</script>

<div class="projects-list">
	<div class="scrollable-item">
		<div class="scrollable-item__clip-path">
			<ProjectItem />
		</div>
	</div>
	<div class="scrollable-item">
		<div class="scrollable-item__clip-path">
			<ProjectItem />
		</div>
	</div>
	<div class="scrollable-item">
		<div class="scrollable-item__clip-path">
			<ProjectItem />
		</div>
	</div>
</div>

<style>
	.scrollable-item {
		bottom: 0;
		display: flex;
		position: sticky;
		width: 100%;
		box-shadow: 7px 10px 5px 5px rgb(0 0 0 / 20%);
	}

	.scrollable-item__clip-path {
		clip-path: polygon(100% 0%, 100% 100%, 0% 100%, 0% 5%, 38% 5%, 40% 0%);
	}

	.projects-list .scrollable-item:nth-child(1) {
		z-index: 3;
		bottom: 3rem;
		height: calc(100vh - 3rem);
		transform: rotateZ(1deg);
	}

	.projects-list .scrollable-item:nth-child(2) {
		z-index: 2;
		bottom: 2rem;
		height: calc(100vh - 2rem);
		transform: rotateZ(0deg);
	}

	.projects-list .scrollable-item:nth-child(3) {
		z-index: 1;
		bottom: 1rem;
		height: calc(100vh - 1rem);
		transform: rotateZ(-1deg);
	}

	.projects-list > .scrollable-item:nth-child(1) > div {
		background-color: #f9f1e4;
	}

	.projects-list > .scrollable-item:nth-child(3) > div {
		background-color: #ffbb00;
	}

	.projects-list > .scrollable-item:nth-child(2) > div {
		background-color: #ff5a00;
	}
</style>
