<div class="home-screen bg-color">
	<div class="horizontal-stripes">
		<div style="background-color: #FEB603" />
		<div style="background-color: #FC3B00" />
		<div style="background-color: #FC0000" />
		<div style="background-color: #D9003A" />
		<div style="background-color: #810140" />
	</div>
	<div class="frame">
		<div class="dots-in-line">
			<div style="background-color: #F73333" />
			<div style="background-color: #F7C334" />
			<div style="background-color: #ACF735" />
		</div>
	</div>
</div>

<style>
	.dots-in-line {
		display: inline-block;
		margin-left: 4rem;
		margin-top: 2rem;
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
	}

	.frame {
		width: 80vw;
		height: 90vh;
		border: 8px solid white;
		border-radius: 20px;
		position: relative;
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
