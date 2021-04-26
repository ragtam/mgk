<div class="my-project">
	<div class="row">
		<div class="col-4 section-left">
			<div class="col-12 col-sm-8 offset-sm-1 d-flex justify-content-between align-self-center">
				<p class="text-muted">TECH STACK/</p>
				<ul class="text-dark font-weight-light">
					<li>Vue</li>
					<li>Nuxt</li>
					<li>Vuetify</li>
					<li>Storybook</li>
				</ul>
			</div>
			<div class="col-11 offset-1  d-flex flex-column align-self-center">
				<p class="text-muted">NAME/</p>
				<h6 class="display-2" style="color: #f83d46;">Hackathon B-Hack</h6>
			</div>
		</div>
		<div class="col-4 d-flex align-items-center"><div class="vhs-tape mx-0 mx-lg-5">tape</div></div>
		<div class="col-4 section-right">
			<div class="col-12 col-sm-8 offset-sm-1 d-flex justify-content-between align-self-center">
				<p class="text-muted">DATE/</p>
				<p class="text-dark font-weight-bold">11.2021</p>
			</div>
			<div class="col-11 offset-1 d-flex flex-column align-self-center">
				<p class="text-muted">NAME/</p>
				<h6 class="display-2" style="color: #f83d46;">Hackathon B-Hack</h6>
			</div>
		</div>
	</div>
</div>

<style>
	.my-project {
		/* display: flex; */
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
		/* width: 50vh;
		height: 80vh; */
		/* align-self: center; */
		/* margin: auto; */
		/* border: 8px solid white;
		border-radius: 20px; */
		/* position: relative; */
		box-shadow: 7px 10px 5px 5px rgb(0 0 0 / 20%);
	}

	.section-left,
	.section-right {
		display: grid;
	}
	/* 
	.vhs-tape::before {
		content: '';
		position: absolute;
		bottom: 0;
		right: 0;
		width: 17%;
		height: 59%;
		background: linear-gradient(180deg, #f83d46 20%, #4a4a4a 0%);
	} */

	.my-project ul {
		list-style-type: none;
	}
</style>
