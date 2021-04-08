<section class="project-item">
	<div class="sticky-header">
		<h1 class="display-5 text-end">Hackathon B-Hack</h1>
	</div>
	<div class="project-item__content">
		<div class="content-image">
			<img src="assets/hackathon.jpg" />
		</div>
	</div>
</section>

<style>
	.project-item {
		height: 100%;
	}

	.sticky-header {
		width: 50vw;
		left: 50vw;
		position: sticky;
		top: 2rem;
		z-index: 1;
	}

	.project-item__content {
		position: relative;
		height: 70vh;
		padding: 3rem;
	}

	.content-image {
		height: 100%;
		max-width: 50vw;
		overflow: hidden;
	}

	.content-image > img {
		height: 100%;
		transform: translateX(-25%) rotateZ(-45deg);
	}
</style>
