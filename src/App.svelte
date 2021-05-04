<script>
	import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
	import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
	import HomeScreenNew from './home-screen-new/Home-Screen-New.svelte';
	import MyProjectsHeader from './my-projects-header/My-Projects-Header.svelte';
	import ProjectsList from './my-projects/Projects-List.svelte';
</script>

<div>
	<HomeScreenNew />

	<MyProjectsHeader />

	<ProjectsList />
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
