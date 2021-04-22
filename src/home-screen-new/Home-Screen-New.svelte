<div class="home-screen bg-color">
	<div class="horizontal-stripes">
		<div style="background-color: #FEB603" />
		<div style="background-color: #FC3B00" />
		<div style="background-color: #FC0000" />
		<div style="background-color: #D9003A" />
		<div style="background-color: #810140" />
	</div>
	<div class="frame">
		<div class="container">
			<div class="row g-0 mt-3">
				<div class="dots-in-line">
					<div style="background-color: #F73333" />
					<div style="background-color: #F7C334" />
					<div style="background-color: #ACF735" />
				</div>
			</div>
			<div class="d-flex g-0 mt-3 justify-content-between">
				<div>
					<h1 class="display-5">Hello</h1>
				</div>
				<div>
					<button class="btn rounded-circle"><i class="bi bi-github" style="font-size: 1.5rem" /></button>
					<button class="btn rounded-circle"><i class="bi bi-linkedin" style="font-size: 1.5rem" /></button>
				</div>
			</div>
			<div class="row g-0 mt-5">
				<div class="col-12 col-sm-6">
					<h3 class="h1" style="margin-bottom: -0.5rem;">My name is</h3>
					<h1 class="display-1 mb-0 fw-bolder">Mateusz</h1>
				</div>
				<div class="col-12 col-sm-6 d-flex justify-content-center">
					<img src="/assets/avatar.jfif" style="height: 20vh" alt="avatar" />
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	.dots-in-line {
		display: inline-block;
		/* margin-left: 0.75rem; */
	}

	.dots-in-line > div {
		width: 0.5rem;
		height: 0.5rem;
		display: inline-block;
		border-radius: 50%;
	}

	.bg-color {
		background-color: #fffbe5;
	}

	.home-screen {
		height: 100vh;
		display: flex;
		align-items: center;
		justify-content: center;
		box-shadow: 6px 6px 5px 5px rgb(0 0 0 / 20%);
		position: relative;
		overflow-y: hidden;
	}

	.frame {
		width: 80vw;
		height: 90vh;
		/* border: 8px solid white;
		border-radius: 20px; */
		position: relative;
		box-shadow: 7px 10px 5px 5px rgb(0 0 0 / 20%);

		/* background: rgba(255, 255, 255, 0.1); */
		box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
		/* backdrop-filter: blur(2px);
		-webkit-backdrop-filter: blur(2px); */
		border-radius: 20px;
		/* border: 1px solid rgba(255, 255, 255, 0.18); */
	}

	.horizontal-stripes {
		width: 100%;
		height: 30vh;
		position: absolute;
		top: 50vh;

		display: grid;
		grid-template-rows: repeat(5, auto);
	}
</style>
