<section class="project-item pt-5">
	<!-- <div class="bg-parent">
		<div class="bg-stripes">
			<div style="background-color: #FFBB00" />
			<div style="background-color: #FF5A00" />
			<div style="background-color: #FF002C" />
			<div style="background-color: #AF00D0" />
			<div style="background-color: #6300BA" />
		</div>
	</div> -->

	<h1 class="display-5 text-end pt-5">Hackathon B-Hack</h1>
	<div class="project-item__container row">
		<div class="row project-item__content">
			<div class="col-12 col-md-7 d-flex px-5">
				<img class="align-self-center" style="width: 100%" src="/assets/hackathon.jpg" alt="" />
			</div>
			<div class="col-12 col-md-5">
				<p class="mt-5">
					Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to
					twinkle. By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside, the sable
					cloud beneath was dished out
				</p>

				<div class="d-grid mt-5">
					<button class="btn btn-primary" style="background-color: #2e2e2e" type="button">Go to storybook</button>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.project-item {
		background-color: #f9f1e4;
	}

	.sticky-header {
		width: 100%;
		position: sticky;
		top: 3vh;
		z-index: 0;
	}

	.project-item__container {
		position: relative;
		/* background-image: url('/assets/project-item-bottom.svg');
		background-repeat: no-repeat;
		background-position: right bottom; */
	}

	.project-item__content {
		min-height: 80vh;
	}

	.bg-parent {
		position: absolute;
		overflow: hidden;
		height: 100%;
		width: 10rem;
		top: 0;
	}

	.bg-stripes {
		display: grid;
		grid-template-columns: repeat(5, auto);
		width: 100%;
		height: 100%;
	}
</style>
