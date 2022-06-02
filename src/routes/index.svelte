<script>
	import { getWeatherFrom } from '../services/weather.js';
	import CityWeatherDetail from '../components/city-weather-detail.svelte';

	const jamonConQueso = getWeatherFrom('cali');
</script>

{#await jamonConQueso then weather}
	<CityWeatherDetail {weather} />
{/await}
