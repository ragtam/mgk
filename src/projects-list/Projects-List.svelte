<div>
	<div class="sticky">sticky header</div>
	<div class="scroll">
		<div class="scrollable-item">a</div>
		<div class="scrollable-item">b</div>
		<div class="scrollable-item">c</div>
		<div class="scrollable-item">d</div>
		<div class="scrollable-item">e</div>
	</div>
</div>

<style>
	.sticky {
		position: sticky;
		top: 0;
		background-color: #e8bd3b;
		height: 100vh;
	}

	.scroll {
		position: relative;
		margin-left: 1rem;
		width: 30vw;
		margin-top: -50vh;
	}

	.scrollable-item {
		height: 60vh;
		background-color: #db4c46;
	}
</style>
