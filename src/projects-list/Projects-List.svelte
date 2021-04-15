<script>
	import ProjectItem from './project-item/Project-Item.svelte';
</script>

<div>
	<section class="project-list__header--sticky">
		<div class="row">
			<div class="col-12 bg-color" style="height: 3vh" />
		</div>
		<div class="row">
			<div class="col-5 bg-color" style="height: 6vh">My Projects</div>
			<div class="col-1 bg-color" style="height: 6vh; clip-path: polygon(0% 0%,0% 100%,100% 0%);" />
		</div>
	</section>

	<section
		class="bg-color"
		style="margin-top: -6vh; display: flex; justify-content: center; padding: 10vh 0; position: relative; z-index: 99;"
	>
		<div style="max-width: 50%; height: 20vh;">
			<!-- <PortfolioFolder /> -->
		</div>
	</section>

	<div class="bg-footer">
		<img src="/assets/project-item-bottom.svg" />
	</div>

	<div class="scrollable-item" style="z-index: 3; bottom: 2rem">
		<ProjectItem />
	</div>
	<div class="scrollable-item" style="z-index: 2; bottom: 1.5rem">
		<ProjectItem />
	</div>
	<div class="scrollable-item" style="z-index: 1;">
		<ProjectItem />
	</div>
</div>

<style>
	.scrollable-item {
		/* position: sticky;
		bottom: 0;
		height: 100vh;
		padding: 1rem;
		z-index: -1; */
		/* align-items: center; */
		bottom: 0;
		display: flex;
		/* justify-content: center; */
		height: 100vh;
		position: sticky;
		width: 100%;
		box-shadow: 0 6px 20px 0 rgba(0, 0, 0, 0.19);
	}

	.bg-color {
		background-color: #2e2e2e;
	}

	.project-list__header--sticky {
		position: sticky;
		top: 0rem;
		z-index: 100;
		color: white;
	}

	.bg-footer {
		display: flex;
		align-items: flex-end;
		z-index: 100;
		height: 0px;
		overflow-y: visible;
		width: 100%;
		position: sticky;
		top: 100vh;
	}
</style>
