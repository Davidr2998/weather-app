<script>
	import { page } from '$app/stores';
	import { CITYSTORE, SEARCHSTORE } from '../../stores/store.js';
	import { getWeatherFrom } from '../../services/weather';
	import CityWeatherDetail from '../../components/city-weather-detail.svelte';

	$: cityName = $page.params.city;
	$: CITYSTORE.update((value) => {
		return (value = cityName);
	});

	$: SEARCHSTORE.update((value) => {
		const checkHistory = value?.find((item) => item === cityName);
		if (checkHistory) {
			return [...value];
		}
		return (value = [...value, cityName]);
	});

	$: fetchWeatherData = getWeatherFrom(cityName);
</script>

{#await fetchWeatherData then weather}
	<CityWeatherDetail {weather} />
{/await}
