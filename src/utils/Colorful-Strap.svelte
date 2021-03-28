<script>
	export let height = '100vh';

	const colors = ['#E8BD3B', '#E87927', '#DB4C46', '#AF3736', '#4F315B', '#3D1C49'];
</script>

<div class="intro-overlay">
	{#each colors as color}
		<div style="background-color: {color}; height: {height}" />
	{/each}
</div>

<style>
	.intro-overlay {
		display: grid;
		grid-template-columns: repeat(6, auto);
	}

	.intro-overlay div {
		transition: background-color 1s;
		opacity: 0;
	}
</style>
