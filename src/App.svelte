<script>
	import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
	import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
	import ProjectsList from './projects-list/Projects-List.svelte';
	import HomeScreenNew from './home-screen-new/Home-Screen-New.svelte';
</script>

<div class="bg-dark">
	<HomeScreenNew />

	<div style="min-height: 30vh;">My Projects</div>
	<ProjectsList />

	<h1>Next section</h1>
	<div class="row">
		<i class="bi-alarm" />
		<i class="bi-alarm" style="font-size: 2rem; color: cornflowerblue;" />
	</div>

	<div style="height: 1000px">asdf</div>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
</div>

<style>
	.bg-dark {
		/* background-image: url('/assets/vhs-plastic.jpg');
		background-attachment: fixed; */
		background-color: #2e2e2e;
	}
</style>
