<script>
	import Home from './home-screen/Home.svelte';
	import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
	import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
</script>

<div class="overflow-x-hidden">
	<Home />
	<h1>Next section</h1>
	<div class="row">
		<i class="bi-alarm" />
		<i class="bi-alarm" style="font-size: 2rem; color: cornflowerblue;" />
	</div>

	<div style="height: 1000px">asdf</div>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
</div>

<style>
	.overflow-x-hidden {
		overflow-x: hidden;
	}
</style>
