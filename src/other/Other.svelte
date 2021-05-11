<script>
	import { onMount } from 'svelte';
	import OtherListItem from './other-list-item/Other-List-Item.svelte';
	import { initializeRellax, destroyRellax } from '../utils';

	const items = [
		{
			header: 'Advanced Angular Architecture',
			subheader: 'workshop by Manfred Steyer',
		},
		{
			header: 'NG Poland',
			subheader: 'Conference',
		},
		{
			header: 'Another Thing',
			subheader: 'description',
		},
	];
</script>

<div class="other">
	<div class="row">
		<div class="col-12">
			<h1 class="display-4 text-muted font-weight-light">conferences | workshops | trainings | contributions</h1>
		</div>
	</div>
	<div class="other__list d-flex align-items-center py-5">
		<div class="container">
			{#each items as item, index}
				<OtherListItem
					><p slot="index">0{index + 1}</p>
					{item.header}
					<p slot="subheader">{item.subheader}</p>
				</OtherListItem>
			{/each}
		</div>
	</div>
</div>

<style>
	.other {
		background-color: #f7c334;
	}

	.other__list {
		min-height: 80vh;
	}
</style>
