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
	<section class="bg-color" style="margin-top: -6vh; display: flex; justify-content: center; padding: 10vh 0">
		<div style="max-width: 50%; height: 20vh;">
			<!-- <PortfolioFolder /> -->
		</div>
	</section>
	<div class="scroll">
		<div class="scrollable-item">
			<ProjectItem />
		</div>
		<div class="bg-footer">
			<!-- svelte-ignore a11y-missing-attribute -->
			<img src="/assets/project-item-bottom.svg" />
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
	.bg-color {
		background-color: #2e2e2e;
	}

	.project-list__header--sticky {
		position: sticky;
		top: 0rem;
		z-index: 1;
		color: white;
	}

	.scroll {
		position: relative;
	}

	.bg-footer {
		display: flex;
		align-items: flex-end;
		z-index: 1;
		height: 0px;
		overflow-y: visible;
		width: 100%;
		position: sticky;
		top: 100vh;
	}
</style>
