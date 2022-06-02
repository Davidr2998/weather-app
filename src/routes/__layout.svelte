<script>
	import AsideMenu from '../components/aside-menu.svelte';
</script>

<div>
	<AsideMenu />
	<main>
		<slot />
	</main>
</div>

<style>
	:global(body) {
		background: -moz-linear-gradient(90deg, rgba(182, 233, 254, 1) 0%, rgba(191, 204, 255, 1) 100%);
		background: -webkit-linear-gradient(
			90deg,
			rgba(182, 233, 254, 1) 0%,
			rgba(191, 204, 255, 1) 100%
		);
		background: linear-gradient(90deg, rgba(182, 233, 254, 1) 0%, rgba(191, 204, 255, 1) 100%);
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
	main {
		background: rgb(106, 188, 244);
		background: -moz-linear-gradient(135deg, rgba(106, 188, 244, 1) 0%, rgba(80, 112, 235, 1) 100%);
		background: -webkit-linear-gradient(
			135deg,
			rgba(106, 188, 244, 1) 0%,
			rgba(80, 112, 235, 1) 100%
		);
		background: linear-gradient(135deg, rgba(106, 188, 244, 1) 0%, rgba(80, 112, 235, 1) 100%);
		border-radius: 3.5rem;
	}
	div {
		padding: 10px;
		background: #000;
		display: grid;
		grid-template-columns: 150px 1fr;
		aspect-ratio: 9 / 16;
		width: 400px;
		max-width: 100%;
		box-shadow: 0 0 100px rgba(0, 0, 0, 0.1);
		border-radius: 3.5rem;
		position: relative;
	}

	@media only screen and (max-width: 600px) {
		div {
			grid-template-columns: 1fr;
		}
	}

	@media only screen and (min-width: 760px) {
		div {
			aspect-ratio: 14 / 16;
			width: 750px;
			grid-template-columns: 150px 1fr;
		}
	}
</style>
