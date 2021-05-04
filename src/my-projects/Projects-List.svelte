<script>
	import MyProject from './Projects/My-Project.svelte';
	import MyProjectTopLeft from './Projects/slots/My-Project-Top-Left.svelte';
	import MyProjectBottomLeft from './Projects/slots/My-Project-Bottom-Left.svelte';
	import MyProjectCard from './Projects/slots/My-Project-Card.svelte';
	import MyProjectRight from './Projects/slots/My-Project-Right.svelte';
</script>

<div>
	<MyProject parallaxClassName="hackathon-parallax" mainCssRef="first-project-color" backgroundCssRef="first-project-background">
		<MyProjectTopLeft slot="top-left">
			<p class="text-muted font-weight-bold text-uppercase">| tech stack</p>
			<ul class="text-dark text-right text-sm-left">
				<li>Vuee</li>
				<li>Nuxt</li>
				<li>Vuetify</li>
				<li>Storybook</li>
			</ul>
		</MyProjectTopLeft>

		<MyProjectBottomLeft slot="bottom-left">
			<p class="text-muted font-weight-bold text-uppercase mb-0">| type</p>
			<h6 class="display-2 pt-0 d-none d-sm-block" style="color: #f83d46;">Hackathon</h6>
			<h6 class="display-4 pt-0 d-block d-sm-none" style="color: #f83d46;">Hackathon</h6>
		</MyProjectBottomLeft>

		<MyProjectCard slot="card">
			<h1 class="h5 font-weight-bold text-uppercase mt-5 pb-0 mb-0 text-center">Hackathon B-Hack</h1>
			<h1 class="display-3 text-center mb-5 d-none d-sm-block">Barbórka 4.0</h1>
			<h1 class="display-5 text-center mb-1 mb-sm-5 d-block d-sm-none">Barbórka 4.0</h1>

			<p class="pt-0 pt-sm-3 text-right">
				Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to
				twinkle. By the same illusion which lifts the horizon of.
			</p>
			<button class="btn btn-secondary mt-0 mb-5 mt-sm-3 col-10 offset-1" style="background-color: #4a4a4a" type="button"
				>Storybook page</button
			>
		</MyProjectCard>

		<MyProjectRight slot="right">
			<p class="text-muted font-weight-bold text-uppercase">| date</p>
			<p class="text-dark text-sm-left">11.2021</p>
		</MyProjectRight>
	</MyProject>

	<MyProject parallaxClassName="indepth-parallax" mainCssRef="indepth-color" backgroundCssRef="indepth-background">
		<MyProjectTopLeft slot="top-left">
			<p class="text-muted font-weight-bold text-uppercase">| tech stack</p>
			<ul class="text-dark text-right text-sm-left">
				<li>Angular</li>
				<li>Typescript</li>
				<li>SCSS</li>
			</ul>
		</MyProjectTopLeft>

		<MyProjectBottomLeft slot="bottom-left">
			<p class="text-muted font-weight-bold text-uppercase mb-0">| type</p>
			<h6 class="display-2 pt-0 d-none d-sm-block" style="color: #BF7224;">Article</h6>
			<h6 class="display-4 pt-0 d-block d-sm-none" style="color: #BF7224;">Article</h6>
		</MyProjectBottomLeft>

		<MyProjectCard slot="card">
			<h1 class="h5 font-weight-bold text-uppercase mt-5 pb-0 mb-0 text-center">Indepth.dev Article</h1>
			<h1 class="display-3 text-center mb-5 d-none d-sm-block">Reusable menu component</h1>
			<h1 class="display-5 text-center mb-1 mb-sm-5 d-block d-sm-none">Reusable menu component</h1>

			<p class="pt-0 pt-sm-3 text-right">
				Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to
				twinkle. By the same illusion which lifts the horizon of.
			</p>
			<button class="btn btn-secondary mt-0 mb-5 mt-sm-3 col-10 offset-1" style="background-color: #BF7224" type="button"
				>Go to article</button
			>
		</MyProjectCard>

		<MyProjectRight slot="right">
			<p class="text-muted font-weight-bold text-uppercase">| date</p>
			<p class="text-dark text-sm-left">11.2021</p>
		</MyProjectRight>
	</MyProject>

	<MyProject parallaxClassName="date-faker-parallax" mainCssRef="date-faker-color" backgroundCssRef="date-faker-background">
		<MyProjectTopLeft slot="top-left">
			<p class="text-muted font-weight-bold text-uppercase">| tech stack</p>
			<ul class="text-light text-right text-sm-left">
				<li>Javascript</li>
				<li>Jest</li>
				<li>Parcel</li>
			</ul>
		</MyProjectTopLeft>

		<MyProjectBottomLeft slot="bottom-left">
			<p class="text-muted font-weight-bold text-uppercase mb-0">| type</p>
			<h6 class="display-2 pt-0 d-none d-sm-block" style="color: #03ab7a;">NPM Package</h6>
			<h6 class="display-4 pt-0 d-block d-sm-none" style="color: #03ab7a;">NPM Package</h6>
		</MyProjectBottomLeft>

		<MyProjectCard slot="card">
			<h1 class="h5 font-weight-bold text-uppercase mt-5 pb-0 mb-0 text-center text-secondary">NPM Package</h1>
			<h1 class="display-3 text-center mb-5 d-none d-sm-block">Date-faker</h1>
			<h1 class="display-5 text-center mb-1 mb-sm-5 d-block d-sm-none">Date-faker</h1>

			<p class="pt-0 pt-sm-3 text-right text-light">
				Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to
				twinkle. By the same illusion which lifts the horizon of.
			</p>
			<button class="btn btn-secondary mt-0 mb-5 mt-sm-3 col-10 offset-1" style="background-color: #03ab7a" type="button"
				>Check on NPM</button
			>
		</MyProjectCard>

		<MyProjectRight slot="right">
			<p class="text-muted font-weight-bold text-uppercase">| date</p>
			<p class="text-sm-left text-light">11.2021</p>
		</MyProjectRight>
	</MyProject>

	<MyProject parallaxClassName="yt-player-parallax" mainCssRef="yt-player-color" backgroundCssRef="yt-player-background">
		<MyProjectTopLeft slot="top-left">
			<p class="text-muted font-weight-bold text-uppercase">| tech stack</p>
			<ul class="text-right text-sm-left">
				<li>Angular</li>
				<li>Typescript</li>
			</ul>
		</MyProjectTopLeft>

		<MyProjectBottomLeft slot="bottom-left">
			<p class="text-muted font-weight-bold text-uppercase mb-0">| type</p>
			<h6 class="display-2 pt-0 d-none d-sm-block" style="color: #f83d46;">NPM Package</h6>
			<h6 class="display-4 pt-0 d-block d-sm-none" style="color: #f83d46;">NPM Package</h6>
		</MyProjectBottomLeft>

		<MyProjectCard slot="card">
			<h1 class="h5 font-weight-bold text-uppercase mt-5 pb-0 mb-0 text-center text-secondary">NPM Package</h1>
			<h1 class="display-3 text-center mb-5 d-none d-sm-block">Yt-Player-Angular</h1>
			<h1 class="display-5 text-center mb-1 mb-sm-5 d-block d-sm-none">Yt-Player-Angular</h1>

			<p class="pt-0 pt-sm-3 text-right">
				Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to
				twinkle. By the same illusion which lifts the horizon of.
			</p>
			<button class="btn btn-secondary mt-0 mb-5 mt-sm-3 col-10 offset-1" style="background-color: #f83d46" type="button"
				>Check on NPM</button
			>
		</MyProjectCard>

		<MyProjectRight slot="right">
			<p class="text-muted font-weight-bold text-uppercase">| date</p>
			<p class="text-sm-left">11.2021</p>
		</MyProjectRight>
	</MyProject>
</div>

<style>
	:global([backgroundCssRef='first-project-background']) {
		background: linear-gradient(180deg, #f83d46 20%, #a1998c 0%);
	}

	:global([mainCssRef='first-project-color']) {
		background-color: #f0ede6;
	}

	:global([backgroundCssRef='date-faker-background']) {
		background: linear-gradient(180deg, #03ab7a 1%, #4a4a4a 99%);
	}

	:global([mainCssRef='date-faker-color']) {
		background-color: #4a4a4a;
	}

	:global([backgroundCssRef='indepth-background']) {
		background: linear-gradient(180deg, #a1998c 1%, #4a4a4a 99%);
	}

	:global([mainCssRef='indepth-color']) {
		background-color: #a1998c;
	}

	:global([backgroundCssRef='yt-player-background']) {
		background: linear-gradient(180deg, white 1%, #f83d46 99%);
	}

	:global([mainCssRef='yt-player-color']) {
		background-color: white;
	}
</style>
