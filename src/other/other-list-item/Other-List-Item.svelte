<div class="row divider">
	<div class="col-1">
		<p>
			<strong>
				<slot name="index" />
			</strong>
		</p>
	</div>
	<div class="col-11 d-flex align-items-center">
		<div class="divider__line" />
	</div>
</div>
<div class="row">
	<div class="col-12">
		<h1 class="text-right display-6"><slot /></h1>
		<p class="text-right display-6"><slot name="subheader" /></p>
	</div>
</div>

<style>
	.divider .divider__line {
		background-color: #d9003a;
		height: 3px;
		width: 100%;
	}

	.divider div {
		color: #d9003a;
	}
</style>
