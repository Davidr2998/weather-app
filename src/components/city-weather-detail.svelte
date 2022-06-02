<script>
	import WeatherFooter from './weather-footer.svelte';
	import WeatherIcon from './weather-icon.svelte';
	export let weather;
</script>

<section>
	<h1>{weather.locationName}</h1>
	<h2>{weather.temperature}º</h2>
	<h3>{weather.conditionText}</h3>
	<WeatherIcon text={weather.conditionText} icon={weather.conditionIcon} />
</section>
<WeatherFooter />

<style>
	section {
		padding: 16px;
		display: flex;
		flex-direction: column;
		align-items: center;
		color: #fff;
	}

	h1 {
		font-weight: 300;
		text-transform: uppercase;
		padding: 16px 0 0 0;
	}

	h2 {
		font-weight: 300;
		font-size: 120px;
		text-transform: uppercase;
		padding: 0;
	}

	h3 {
		font-weight: 700;
		transform: rotate(-90deg);
		position: absolute;
		top: 56px;
		right: 12px;
	}
</style>
