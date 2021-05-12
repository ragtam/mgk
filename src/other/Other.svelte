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
	let rellax;

	onMount(() => {
		const sectionObserver = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					rellax = initializeRellax('.rellax');
				} else {
					destroyRellax(rellax);
				}
			});
		});
		const element = document.querySelector('.other');
		sectionObserver.observe(element);
	});
</script>

<div class="other">
	<div class="row rellax" data-rellax-speed="-4" data-rellax-percentage="0.7">
		<div class="col-12">
			<h1 class="display-4 text-muted font-weight-light">|conferences |workshops |trainings |contributions</h1>
		</div>
	</div>
	<div class="other__list d-flex align-items-center py-5">
		<div class="container rellax" data-rellax-speed="3" data-rellax-percentage="0.5">
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
		background-color: #fcbf49;
		overflow: hidden;
	}

	.other__list {
		min-height: 80vh;
	}
</style>
