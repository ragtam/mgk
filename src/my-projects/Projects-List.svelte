<script>
	import MyProject from './Projects/My-Project.svelte';
	import MyProjectTopLeft from './Projects/slots/My-Project-Top-Left.svelte';
	import MyProjectBottomLeft from './Projects/slots/My-Project-Bottom-Left.svelte';
	import MyProjectCard from './Projects/slots/My-Project-Card.svelte';
	import MyProjectRight from './Projects/slots/My-Project-Right.svelte';
</script>

<div>
	<MyProject
		parallaxClassName="hackathon-parallax"
		mainCssRef="first-project-color"
		backgroundCssRef="first-project-background"
		cardCssRef="first-project-card"
	>
		<MyProjectTopLeft slot="top-left">
			<p class="text-muted font-weight-bold text-uppercase">| tech stack</p>
			<ul class="text-dark text-right text-md-left">
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
			<h1 class="h5 font-weight-bold text-uppercase mt-5 pb-0 mb-0 text-center text-secondary">Hackathon B-Hack</h1>
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
			<p class="text-dark text-sm-left">11.2020</p>
		</MyProjectRight>
	</MyProject>

	<MyProject
		parallaxClassName="indepth-parallax"
		mainCssRef="indepth-color"
		backgroundCssRef="indepth-background"
		cardCssRef="indepth-card"
	>
		<MyProjectTopLeft slot="top-left">
			<p class="text-muted font-weight-bold text-uppercase">| tech stack</p>
			<ul class="text-dark text-right text-md-left">
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
			<h1 class="h5 font-weight-bold text-uppercase mt-5 pb-0 mb-0 text-center text-secondary">Indepth.dev Article</h1>
			<h1 class="display-3 text-center mb-5 d-none d-sm-block">Reusable context menu</h1>
			<h1 class="display-5 text-center mb-1 mb-sm-5 d-block d-sm-none">Reusable context menu</h1>

			<p class="pt-0 pt-sm-3 text-right">
				Tutorial article on how to build a generic context menu with Angular. Menu items configurable with HTML with no sub-menu
				nesting. Guide focuses on menu`s logic, not the looks.
			</p>
			<a
				href="https://indepth.dev/posts/1297/building-a-reusable-menu-component"
				target="_blank"
				class="btn btn-secondary mt-0 mb-5 mt-sm-3 col-10 offset-1"
				style="background-color: #BF7224"
				role="button">Go to article</a
			>
		</MyProjectCard>

		<MyProjectRight slot="right">
			<p class="text-muted font-weight-bold text-uppercase">| date</p>
			<p class="text-dark text-sm-left">07.2020</p>
		</MyProjectRight>
	</MyProject>

	<MyProject
		parallaxClassName="date-faker-parallax"
		mainCssRef="date-faker-color"
		backgroundCssRef="date-faker-background"
		cardCssRef="date-faker-card"
	>
		<MyProjectTopLeft slot="top-left">
			<p class="text-muted font-weight-bold text-uppercase">| tech stack</p>
			<ul class="text-light text-right text-md-left">
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
				Package overriding what the now ( new Date(), Date.now() ) is in JS. It allows to manually change current date with
				moment.js like syntax.
			</p>
			<a
				href="https://www.npmjs.com/package/date-faker"
				target="_blank"
				class="btn btn-secondary mt-0 mb-5 mt-sm-3 col-10 offset-1"
				style="background-color: #03ab7a"
				role="button">Check on NPM</a
			>
		</MyProjectCard>

		<MyProjectRight slot="right">
			<p class="text-muted font-weight-bold text-uppercase">| date</p>
			<p class="text-sm-left text-light">03.2020</p>
		</MyProjectRight>
	</MyProject>

	<MyProject
		parallaxClassName="yt-player-parallax"
		mainCssRef="yt-player-color"
		backgroundCssRef="yt-player-background"
		cardCssRef="yt-player-card"
	>
		<MyProjectTopLeft slot="top-left">
			<p class="text-muted font-weight-bold text-uppercase">| tech stack</p>
			<ul class="text-right text-md-left">
				<li>Angular</li>
				<li>Typescript</li>
			</ul>
		</MyProjectTopLeft>

		<MyProjectBottomLeft slot="bottom-left">
			<p class="text-muted font-weight-bold text-uppercase mb-0">| type</p>
			<h6 class="display-2 pt-0 d-none d-sm-block" style="color: #fffbe5;">NPM Package</h6>
			<h6 class="display-4 pt-0 d-block d-sm-none" style="color: #fffbe5;">NPM Package</h6>
		</MyProjectBottomLeft>

		<MyProjectCard slot="card">
			<h1 class="h5 font-weight-bold text-uppercase mt-5 pb-0 mb-0 text-center text-secondary">NPM Package</h1>
			<h1 class="display-3 text-center mb-5 d-none d-sm-block">Yt-Player-Angular</h1>
			<h1 class="display-5 text-center mb-1 mb-sm-5 d-block d-sm-none">Yt-Player-Angular</h1>

			<p class="pt-0 pt-sm-3 text-right">
				The package is an Angular wrapper for yt-player, YouTube Player API. Lets you embed Youtube video and control it (
				play/pause/seek and many more ) programatically.
			</p>
			<a
				href="https://www.npmjs.com/package/yt-player-angular"
				target="_blank"
				class="btn btn-secondary mt-0 mb-5 mt-sm-3 col-10 offset-1"
				style="background-color: #d9003a"
				role="button">Check on NPM</a
			>
		</MyProjectCard>

		<MyProjectRight slot="right">
			<p class="text-muted font-weight-bold text-uppercase">| date</p>
			<p class="text-sm-left">09.2019</p>
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

	:global([cardCssRef='first-project-card']) {
		background: rgba(240, 237, 230, 0.3);
	}

	:global([backgroundCssRef='date-faker-background']) {
		background: linear-gradient(180deg, #03ab7a 1%, #4a4a4a 99%);
	}

	:global([mainCssRef='date-faker-color']) {
		background-color: #4a4a4a;
	}

	:global([cardCssRef='date-faker-card']) {
		background: rgba(74, 74, 74, 0.3);
	}

	:global([backgroundCssRef='indepth-background']) {
		background: linear-gradient(180deg, #a1998c 1%, #4a4a4a 99%);
	}

	:global([mainCssRef='indepth-color']) {
		background-color: #a1998c;
	}

	:global([cardCssRef='indepth-card']) {
		background: rgba(161, 153, 140, 0.3);
	}

	:global([backgroundCssRef='yt-player-background']) {
		background: linear-gradient(130deg, #d9003a, #810140);
	}

	:global([mainCssRef='yt-player-color']) {
		background-color: #d9003a;
	}

	:global([cardCssRef='yt-player-card']) {
		background: rgba(255, 251, 229, 0.7);
	}
</style>
