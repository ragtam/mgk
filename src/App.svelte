<script>
	import Home from './home-screen/Home.svelte';
	import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
</script>

<div class="overflow-x-hidden">
	<Home />
	<h1>Next section</h1>
	<button type="button" class="btn btn-primary">Primary</button>
	<div style="height: 1000px">asdf</div>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
</div>

<style>
	.overflow-x-hidden {
		overflow-x: hidden;
	}
</style>
