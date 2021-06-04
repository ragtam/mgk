<script>
	import { onMount } from 'svelte';
	import { fetchNPMPackageDownloadCountSince } from '../../services/npm-stats';

	import MyProject from '../template/My-Project.svelte';
	import MyProjectTopLeft from '../template/slots/My-Project-Top-Left.svelte';
	import MyProjectBottomLeft from '../template/slots/My-Project-Bottom-Left.svelte';
	import MyProjectCard from '../template/slots/My-Project-Card.svelte';
	import MyProjectRight from '../template/slots/My-Project-Right.svelte';

	let downloadCount = 0;

	onMount(() => {
		fetchNPMPackageDownloadCountSince(new Date('2020-02-13'), 'date-faker').then((count) => {
			downloadCount = count;
		});
	});
</script>

<MyProject
	parallaxClassName="date-faker-parallax"
	mainCssRef="date-faker-color"
	backgroundCssRef="date-faker-background"
	cardCssRef="date-faker-card"
>
	<MyProjectTopLeft slot="top-left">
		<p class="text-muted font-weight-bold text-uppercase">| tech stack</p>
		<ul class="text-light text-right text-md-left">
			<li>Javascript</li>
			<li>Jest</li>
			<li>Parcel</li>
		</ul>
	</MyProjectTopLeft>

	<MyProjectBottomLeft slot="bottom-left">
		<p class="text-muted font-weight-bold text-uppercase mb-0">| type</p>
		<h6 class="display-2 pt-0 d-none d-sm-block" style="color: #F77F00;">NPM Package</h6>
		<h6 class="display-4 pt-0 d-block d-sm-none" style="color: #F77F00;">NPM Package</h6>
	</MyProjectBottomLeft>

	<MyProjectCard slot="card">
		<h1 class="h5 font-weight-bold text-uppercase mt-5 pb-0 mb-0 text-center text-secondary">NPM Package</h1>
		<h1 class="display-3 text-center mb-5 d-none d-sm-block text-muted">Date-faker</h1>
		<h1 class="display-5 text-center mb-1 mb-sm-5 d-block d-sm-none text-muted">Date-faker</h1>

		<p class="pt-0 pt-sm-3 text-right text-light">
			Package overriding what the now ( new Date(), Date.now() ) is in JS. It allows to manually change current date with moment.js
			like syntax.
		</p>
		<a
			href="https://www.npmjs.com/package/date-faker"
			target="_blank"
			class="btn btn-warning mt-0 mb-5 mt-sm-3 col-10 offset-1"
			style="background-color: #F77F00"
			role="button">Check on NPM</a
		>
	</MyProjectCard>

	<MyProjectRight slot="right">
		<div style="width: 100%">
			<div class="d-flex justify-content-between">
				<p class="text-muted font-weight-bold text-uppercase">| date</p>
				<p class="text-sm-left text-light">03.2020</p>
			</div>
			<div class="d-flex justify-content-between">
				<p class="text-muted font-weight-bold text-uppercase">| downloads</p>
				<p class="text-sm-left text-light">{downloadCount}</p>
			</div>
		</div>
	</MyProjectRight>
</MyProject>

<style>
	:global([backgroundCssRef='date-faker-background']) {
		background: repeating-linear-gradient(135deg, #003049, #003049 20px, #f77f00 20px, #f77f00 40px);
	}

	:global([mainCssRef='date-faker-color']) {
		background-color: #003049;
	}

	:global([cardCssRef='date-faker-card']) {
		background: rgba(0, 48, 73, 0.1);
	}
</style>
