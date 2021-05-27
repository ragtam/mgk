<script>
	import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
	import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
	import LandingPage from './landing-page/landing-page.svelte';
	import MyProjectsHeader from './my-projects-header/My-Projects-Header.svelte';
	import ProjectsList from './my-projects/Projects-List.svelte';
	import Other from './other/other.svelte';
	import Bio from './bio/Bio.svelte';
	import Footer from './footer/Footer.svelte';
</script>

<div>
	<LandingPage />

	<MyProjectsHeader />

	<ProjectsList />

	<Other />

	<Bio />

	<Footer />
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
