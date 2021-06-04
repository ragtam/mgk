<script>
	import Hackathon from './projects/Hackathon.svelte';
	import ReusableMenuArticle from './projects/Reusable-Menu-Article.svelte';
	import DateFaker from './projects/Date-Faker.svelte';
	import YtPlayerAngular from './projects/Yt-Player-Angular.svelte';
</script>

<div class="projects-list">
	<Hackathon />

	<ReusableMenuArticle />

	<DateFaker />

	<YtPlayerAngular />
</div>

<style>
	.projects-list {
		position: relative;
		z-index: 1;
	}
</style>
