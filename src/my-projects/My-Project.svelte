<div class="my-project">
	<div class="row">
		<div class="col-4 section-left">
			<div class="col-12 col-sm-8 offset-sm-1 d-flex justify-content-between align-self-center">
				<p class="text-muted font-weight-bold text-uppercase">| tech stack</p>
				<ul class="text-dark ">
					<li>Vue</li>
					<li>Nuxt</li>
					<li>Vuetify</li>
					<li>Storybook</li>
				</ul>
			</div>
			<div class="col-11 offset-1  d-flex flex-column align-self-center">
				<p class="text-muted font-weight-bold text-uppercase">| name</p>
				<h6 class="display-2" style="color: #f83d46;">Hackathon B-Hack</h6>
			</div>
		</div>
		<div class="col-4 d-flex align-items-center">
			<div class="vhs-tape mx-0 mx-lg-5">
				<div class="container">
					<h1 class="h2 font-weight-light mt-5 text-center">Hackathon B-Hack Barbórka</h1>
					<p>
						Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased
						to twinkle. By the same illusion which lifts the horizon of.
					</p>
				</div>
			</div>
		</div>
		<div class="col-4 section-right">
			<div class="col-12 col-sm-8 offset-sm-1 d-flex justify-content-between align-self-center">
				<p class="text-muted font-weight-bold text-uppercase">| date</p>
				<p class="text-dark">11.2021</p>
			</div>
			<div class="col-11 offset-1 d-flex flex-column align-self-center">
				<!-- <p class="text-muted font-weight-bold text-uppercase">NAME/</p>
				<h6 class="display-2" style="color: #f83d46;">Hackathon B-Hack</h6> -->
			</div>
		</div>
	</div>
</div>

<style>
	.my-project {
		position: relative;
		min-height: 100vh;
		background-color: #f0ede6;
	}

	.my-project > div {
		height: 100vh;
	}

	.my-project::before {
		content: '';
		position: absolute;
		bottom: 0;
		right: 0;
		width: 43%;
		height: 60%;
		background: linear-gradient(180deg, #f83d46 20%, #4a4a4a 0%);
	}

	.vhs-tape {
		height: 60vh;
		width: 100%;
		position: relative;
		box-shadow: 3px 3px 5px 6px rgb(0 0 0 / 20%);
		border-radius: 10px;
	}

	.section-left,
	.section-right {
		display: grid;
	}

	.my-project ul {
		list-style-type: none;
	}
</style>
