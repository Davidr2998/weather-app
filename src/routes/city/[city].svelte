<script>
	import { CITYSTORE } from '../../stores/store.js';
	import { page } from '$app/stores';
	import { getWeatherFrom } from '../../services/weather';
	import CityWeatherDetail from '../../components/city-weather-detail.svelte';

	$: cityName = $page.params.city;
	$: CITYSTORE.update((value) => {
		return (value = cityName);
	});

	$: fetchWeatherData = getWeatherFrom(cityName);
</script>

{#await fetchWeatherData then weather}
	<CityWeatherDetail {weather} />
{/await}
