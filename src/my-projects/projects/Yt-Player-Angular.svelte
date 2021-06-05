<script>
	import { onMount } from 'svelte';
	import { counterFromZeroToValueAnimation, setUpSectionObserver } from './counter-animations';
	import { fetchNPMPackageDownloadCountSince } from '../../services/npm-stats';

	import MyProject from '../template/My-Project.svelte';
	import MyProjectTopLeft from '../template/slots/My-Project-Top-Left.svelte';
	import MyProjectBottomLeft from '../template/slots/My-Project-Bottom-Left.svelte';
	import MyProjectCard from '../template/slots/My-Project-Card.svelte';
	import MyProjectRight from '../template/slots/My-Project-Right.svelte';

	const COUNTER_HTML_ID = '#yt-player-counter';
	let countAnimation;

	onMount(() => {
		fetchNPMPackageDownloadCountSince(new Date('2019-09-08'), 'yt-player-angular').then((count) => {
			countAnimation = counterFromZeroToValueAnimation(COUNTER_HTML_ID, count);
			setUpSectionObserver(COUNTER_HTML_ID, countAnimation);
		});
	});
</script>

<MyProject
	parallaxClassName="yt-player-parallax"
	mainCssRef="yt-player-color"
	backgroundCssRef="yt-player-background"
	cardCssRef="yt-player-card"
>
	<MyProjectTopLeft slot="top-left">
		<p class="text-muted font-weight-bold text-uppercase">| tech stack</p>
		<ul class="text-right text-md-left">
			<li>Angular</li>
			<li>Typescript</li>
		</ul>
	</MyProjectTopLeft>

	<MyProjectBottomLeft slot="bottom-left">
		<p class="text-muted font-weight-bold text-uppercase mb-0">| type</p>
		<h6 class="display-2 pt-0 d-none d-sm-block" style="color: #d62828;">NPM Package</h6>
		<h6 class="display-4 pt-0 d-block d-sm-none" style="color: #d62828;">NPM Package</h6>
	</MyProjectBottomLeft>

	<MyProjectCard slot="card">
		<h1 class="h5 font-weight-bold text-uppercase mt-5 pb-0 mb-0 text-center text-secondary">NPM Package</h1>
		<h1 class="display-3 text-center mb-5 d-none d-sm-block">Yt-Player-Angular</h1>
		<h1 class="display-5 text-center mb-1 mb-sm-5 d-block d-sm-none">Yt-Player-Angular</h1>

		<p class="pt-0 pt-sm-3 text-right">
			The package is an Angular wrapper for yt-player, YouTube Player API. Lets you embed Youtube video and control it (
			play/pause/seek and many more ) programatically.
		</p>
		<a
			href="https://www.npmjs.com/package/yt-player-angular"
			target="_blank"
			class="btn btn-secondary mt-0 mb-5 mt-sm-3 col-10 offset-1"
			style="background-color: #d62828"
			role="button">Check on NPM</a
		>
	</MyProjectCard>

	<MyProjectRight slot="right">
		<div style="width: 100%">
			<div class="d-flex justify-content-between">
				<p class="text-muted font-weight-bold text-uppercase">| date</p>
				<p class="text-sm-left">09.2019</p>
			</div>
			<div class="d-flex justify-content-between">
				<p class="text-muted font-weight-bold text-uppercase">| downloads</p>
				<p id="yt-player-counter" class="text-sm-left">N/A</p>
			</div>
		</div>
	</MyProjectRight>
</MyProject>

<style>
	:global([backgroundCssRef='yt-player-background']) {
		background-color: #d62828;
	}

	:global([mainCssRef='yt-player-color']) {
		background-color: #eae2b7;
	}

	:global([cardCssRef='yt-player-card']) {
		background: rgba(234, 226, 183, 0.1);
	}
</style>
