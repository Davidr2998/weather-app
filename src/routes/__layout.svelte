<script>
	import AsideMenu from '../components/aside-menu.svelte';
</script>

<div>
	<AsideMenu />
	<slot />
</div>

<style>
	:global(body) {
		background: #fdfdfd;
		display: grid;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
			'Open Sans', 'Helvetica Neue', sans-serif;
		place-content: center;
		margin: 0;
		min-height: 100vh;
	}

	:global(*, *::after, *::before) {
		box-sizing: border-box;
	}

	:global(h1, h2, h3, h4, h5) {
		margin: 0;
	}

	div {
		background-color: #000;
		display: grid;
		grid-template-columns: 150px 1fr;
		aspect-ratio: 9 / 16;
		width: 400px;
		max-width: 100%;
		box-shadow: 0 0 100px rgba(0, 0, 0, 0.1);
		border-radius: 4rem;
		position: relative;
	}

	@media only screen and (max-width: 600px) {
		div {
			aspect-ratio: 9 / 16;
			width: 400px;
		}
	}

	@media only screen and (min-width: 760px) {
		div {
			aspect-ratio: 14 / 16;
			width: 750px;
		}
	}
</style>
