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

	<!-- <div class="bg-footer">
		<img src="/assets/project-item-bottom.svg" />
	</div> -->

	<div class="scrollable-item" style="z-index: 3; bottom: 1.6rem">
		<div class="test">
			<ProjectItem />
		</div>
	</div>
	<div class="scrollable-item" style="z-index: 2; bottom: .8rem">
		<div class="test">
			<ProjectItem />
		</div>
	</div>
	<div class="scrollable-item" style="z-index: 1;">
		<div class="test">
			<ProjectItem />
		</div>
	</div>

	<div class="list-footer" />
</div>

<svg width="0" height="0" viewBox="0 0 478 374" fill="none" xmlns="http://www.w3.org/2000/svg">
	<defs>
		<clipPath id="svgPath" clipPathUnits="objectBoundingBox">
			<path
				transform="scale(0.00235, 0.00254)"
				d="M0 0H478V319.343C478 319.343 314.381 319.343 283.463 319.343C252.545 319.343 242.435 371.266 220.646 373.159C198.856 375.051 0 373.159 0 373.159V0Z"
				fill="#FFFFFF"
				stroke="#000000"
			/>
		</clipPath>
	</defs>
</svg>

<style>
	.list-footer {
		position: sticky;
		bottom: 0;
		height: 30vh;
		margin-top: -30vh;
		background-image: url('/assets/vhs-plastic.jpg');
	}

	.test {
		clip-path: url(#svgPath);
	}

	.scrollable-item {
		bottom: 0;
		display: flex;
		height: 100vh;
		position: sticky;
		width: 100%;
		/* box-shadow: 0 6px 20px 0 rgba(0, 0, 0, 0.19); */
		filter: drop-shadow(-1px 6px 3px rgba(50, 50, 0, 0.5));
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
</style>
