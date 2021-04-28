<script>
	import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
	import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
	import HomeScreenNew from './home-screen-new/Home-Screen-New.svelte';
	import MyProjectsHeader from './my-projects-header/My-Projects-Header.svelte';
	import MyProject from './my-projects/My-Project.svelte';
	import MyProjectTopLeft from './my-projects/slots/My-Project-Top-Left.svelte';
	import MyProjectBottomLeft from './my-projects/slots/My-Project-Bottom-Left.svelte';
	import MyProjectCard from './my-projects/slots/My-Project-Card.svelte';
	import MyProjectRight from './my-projects/slots/My-Project-Right.svelte';
</script>

<div>
	<HomeScreenNew />

	<MyProjectsHeader />

	<MyProject>
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
			<h1 class="display-4 text-center mb-1 mb-sm-5 d-block d-sm-none">Barbórka 4.0</h1>

			<p class="col-10 pt-0 pt-sm-3 text-right">
				Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to
				twinkle. By the same illusion which lifts the horizon of.
			</p>
			<button class="btn btn-secondary mt-0 mb-5 mt-sm-3 col-8 offset-1" style="background-color: #4a4a4a" type="button"
				>Storybook page</button
			>
		</MyProjectCard>

		<MyProjectRight slot="right">
			<p class="text-muted font-weight-bold text-uppercase">| date</p>
			<p class="text-dark text-sm-left">11.2021</p>
		</MyProjectRight>
	</MyProject>

	<!-- <ProjectsList /> -->

	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
</div>

<style>
	*,
	*::before,
	*::after {
		box-sizing: border-box;
	}

	/* .bg-dark {
		background-color: #2e2e2e;
	} */
</style>
