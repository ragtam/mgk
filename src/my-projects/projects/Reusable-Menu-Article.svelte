<script>
	import MyProject from '../template/My-Project.svelte';
	import MyProjectTopLeft from '../template/slots/My-Project-Top-Left.svelte';
	import MyProjectBottomLeft from '../template/slots/My-Project-Bottom-Left.svelte';
	import MyProjectCard from '../template/slots/My-Project-Card.svelte';
	import MyProjectRight from '../template/slots/My-Project-Right.svelte';
</script>

<MyProject parallaxClassName="indepth-parallax" mainCssRef="indepth-color" backgroundCssRef="indepth-background" cardCssRef="indepth-card">
	<MyProjectTopLeft slot="top-left">
		<p class="text-muted font-weight-bold text-uppercase">| tech stack</p>
		<ul class="text-dark text-right text-md-left">
			<li>Angular</li>
			<li>Typescript</li>
			<li>SCSS</li>
		</ul>
	</MyProjectTopLeft>

	<MyProjectBottomLeft slot="bottom-left">
		<p class="text-muted font-weight-bold text-uppercase mb-0">| type</p>
		<h6 class="display-2 pt-0 d-none d-sm-block" style="color: #D62828;">Article</h6>
		<h6 class="display-4 pt-0 d-block d-sm-none" style="color: #D62828;">Article</h6>
	</MyProjectBottomLeft>

	<MyProjectCard slot="card">
		<h1 class="h5 font-weight-bold text-uppercase mt-5 pb-0 mb-0 text-center text-secondary">Indepth.dev Article</h1>
		<h1 class="display-3 text-center mb-5 d-none d-sm-block">Reusable context menu</h1>
		<h1 class="display-5 text-center mb-1 mb-sm-5 d-block d-sm-none">Reusable context menu</h1>

		<p class="pt-0 pt-sm-3 text-right">
			Tutorial article on how to build a generic context menu with Angular. Menu items configurable with HTML with no sub-menu
			nesting. Guide focuses on menu`s logic, not the looks.
		</p>
		<a
			href="https://indepth.dev/posts/1297/building-a-reusable-menu-component"
			target="_blank"
			class="btn btn-danger mt-0 mb-5 mt-sm-3 col-10 offset-1"
			style="background-color: #D62828"
			role="button">Go to article</a
		>
	</MyProjectCard>

	<MyProjectRight slot="right">
		<p class="text-muted font-weight-bold text-uppercase">| date</p>
		<p class="text-dark text-sm-left">07.2020</p>
	</MyProjectRight>
</MyProject>

<style>
	:global([backgroundCssRef='indepth-background']) {
		background: linear-gradient(180deg, #fcbf49 80%, #f77f00 20%);
	}

	:global([mainCssRef='indepth-color']) {
		background-color: #f77f00;
	}

	:global([cardCssRef='indepth-card']) {
		background: rgba(247, 127, 0, 0.3);
	}
</style>
