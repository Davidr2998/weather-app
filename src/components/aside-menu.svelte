<script>
	import { CITYSTORE } from '../stores/store.js';
	import OPTION_SETTINGS from '../utils/asideOptions.js';
	let city;
	let current = 'foo';

	CITYSTORE.subscribe((value) => {
		city = value;
	});
</script>

<aside>
	<span>May 05 2022</span>
	<ul>
		<li class:selected={current === 'foo'} on:click={() => (current = 'foo')}>
			<a href="/city/cali">Foo</a>
		</li>
		<li class:selected={current === 'bar'} on:click={() => (current = 'bar')}>
			<a href="/city/bogota">Bar</a>
		</li>
		<li class:selected={current === 'baz'} on:click={() => (current = 'baz')}>
			<a href="/city/medellin">Baz</a>
		</li>
	</ul>
	<ul>
		{#each OPTION_SETTINGS as option}
			<li>
				<img src={option.icon} alt="" />
				{option.name}
			</li>
		{/each}
	</ul>
</aside>

<style>
	a {
		color: #fff;
		text-decoration: none;
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
		align-items: center;
		gap: 12px;
		margin: 0;
		padding: 12px;
		font-size: 1.25rem;
		letter-spacing: 0.05rem;
		transition: all 0.25s ease-in-out;
		border-radius: 5px;
	}

	li:hover {
		background-color: #f5f5f5;
		color: #000;
		width: 100%;
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
