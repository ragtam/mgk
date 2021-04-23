<script>
	export let opacity = 1;

	const colors = ['#E8BD3B', '#E87927', '#DB4C46', '#AF3736', '#4F315B', '#3D1C49'];
</script>

<div class="intro-overlay">
	{#each colors as color}
		<div style="background-color: {color}; opacity: {opacity}" />
	{/each}
</div>

<style>
	.intro-overlay {
		display: grid;
		grid-template-columns: repeat(6, auto);
		height: 100%;
	}

	.intro-overlay div {
		transition: background-color 1s;
	}
</style>
