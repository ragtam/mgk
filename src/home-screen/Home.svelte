<script>
	import ManBehindTheDesk from './Man-Behind-The-Desk.svelte';

	// setTimeout(() => {
	// 	var rellax = new Rellax('.rellax');
	// }, 0);
</script>

<div class="home">
	<div class="leading-text">
		<h1>Hello</h1>
	</div>
	<div class="image-container">
		<ManBehindTheDesk />
	</div>
</div>

<style>
	.home {
		display: flex;
		height: 100vh;
		justify-content: end;
		background-color: #3f3d56;
	}

	.image-container {
		align-self: end;
	}

	.leading-text {
		position: absolute;
	}
</style>
