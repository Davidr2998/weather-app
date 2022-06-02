<script>
	import { CITYSTORE, SEARCHSTORE } from '../stores/store.js';
	import { getCurrentDate } from '../utils/getDate';
	import OPTION_SETTINGS from '../utils/asideOptions.js';
	let current = 'foo';
	let city;
	let searchHistory;

	SEARCHSTORE.subscribe((value) => {
		searchHistory = [...value];
	});

	CITYSTORE.subscribe((value) => {
		city = value;
	});
</script>

<aside>
	<span>{getCurrentDate()}</span>
	<ul>
		{#each searchHistory as historyOption}
			<li>
				<a href={`/city/${historyOption}`}>{historyOption}</a>
			</li>
		{/each}
	</ul>
	<ul>
		{#each OPTION_SETTINGS as option}
			<li>
				<a href={option.route}>
					<img src={option.icon} alt="" />
					{option.name}
				</a>
			</li>
		{/each}
	</ul>
</aside>

<style>
	a {
		width: 100%;
		color: #fff;
		text-decoration: none;
		padding: 12px;
		display: flex;
		align-items: center;
		border-radius: 5px;
		gap: 12px;
	}
	aside {
		border-top-left-radius: 3.5rem;
		border-bottom-left-radius: 3.5rem;
		color: #fff;
		display: grid;
		place-content: center;
		grid-template-rows: auto 1fr auto;
		padding: 45px 0 50px 0;
		height: 100%;
		width: 100%;
	}

	ul {
		width: 100%;
		padding: 0%;
		margin: 0%;
		list-style-type: none;
	}

	li {
		display: flex;
		margin: 0;
		font-size: 1.25rem;
		letter-spacing: 0.05rem;
		transition: all 0.25s ease-in-out;
	}

	a:hover {
		background-color: #f5f5f5;
		color: #000;
		width: 100%;
		transition: all 0.25s ease-in-out;
	}

	a:hover > img {
		filter: brightness(0);
		transition: all 0.25s ease-in-out;
	}

	@media only screen and (max-width: 600px) {
		aside {
			display: none;
		}
	}

	@media only screen and (min-width: 760px) {
		aside {
			display: grid;
		}
	}
</style>
