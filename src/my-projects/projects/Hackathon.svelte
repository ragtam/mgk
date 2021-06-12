<script>
	import MyProject from '../template/My-Project.svelte';
	import MyProjectTopLeft from '../template/slots/My-Project-Top-Left.svelte';
	import MyProjectBottomLeft from '../template/slots/My-Project-Bottom-Left.svelte';
	import MyProjectCard from '../template/slots/My-Project-Card.svelte';
	import MyProjectRight from '../template/slots/My-Project-Right.svelte';
</script>

<MyProject
	parallaxClassName="hackathon-parallax"
	mainCssRef="first-project-color"
	backgroundCssRef="first-project-background"
	cardCssRef="first-project-card"
>
	<MyProjectTopLeft slot="top-left">
		<p class="text-muted font-weight-bold text-uppercase">| tech stack</p>
		<ul class="text-dark text-right text-md-left">
			<li>Vue</li>
			<li>Nuxt</li>
			<li>Vuetify</li>
			<li>Storybook</li>
		</ul>
	</MyProjectTopLeft>

	<MyProjectBottomLeft slot="bottom-left">
		<p class="text-muted font-weight-bold text-uppercase mb-0">| type</p>
		<h6 class="display-2 pt-0 d-none d-sm-block" style="color: #F77F00;">Hackathon</h6>
		<h6 class="display-4 pt-0 d-block d-sm-none" style="color: #F77F00;">Hackathon</h6>
	</MyProjectBottomLeft>

	<MyProjectCard slot="card">
		<h1 class="h5 font-weight-bold text-uppercase mt-5 pb-0 mb-0 text-center text-secondary">Hackathon B-Hack</h1>
		<h1 class="display-3 text-center mb-5 d-none d-sm-block">Barbórka 4.0</h1>
		<h1 class="display-5 text-center mb-1 mb-sm-5 d-block d-sm-none">Barbórka 4.0</h1>

		<p class="pt-0 pt-sm-3 text-right">
			Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.
			By the same illusion which lifts the horizon of.
		</p>
		<button class="btn btn-warning mt-0 mb-5 mt-sm-3 col-10 offset-1" style="background-color: #F77F00" type="button"
			>Storybook page</button
		>
	</MyProjectCard>

	<MyProjectRight slot="right">
		<p class="text-muted font-weight-bold text-uppercase">| date</p>
		<p class="text-dark text-sm-left">11.2020</p>
	</MyProjectRight>
</MyProject>

<style>
	:global([backgroundCssRef='first-project-background']) {
		background: repeating-radial-gradient(circle, #f77f00, #f77f00 40px, #eae2b7 40px, #eae2b7 80px);
	}

	:global([mainCssRef='first-project-color']) {
		background-color: #eae2b7;
	}

	:global([cardCssRef='first-project-card']) {
		background: rgba(234, 226, 183, 0.5);
	}
</style>
