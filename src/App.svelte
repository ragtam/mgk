<script>
	import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
	import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
	import ProjectsList from './projects-list/Projects-List.svelte';
	import HomeScreenNew from './home-screen-new/Home-Screen-New.svelte';
	import MyProjectsHeader from './my-projects-header/My-Projects-Header.svelte';
	import MyProject from './my-projects/My-Project.svelte';
</script>

<div>
	<HomeScreenNew />

	<MyProjectsHeader />

	<MyProject />

	<ProjectsList />

	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
</div>

<style>
	.bg-dark {
		/* background-image: url('/assets/vhs-plastic.jpg');
		background-attachment: fixed; */
		background-color: #2e2e2e;
	}
</style>
