<script>
	export let humidity;
	export let windSpeed;
	export let feelsLike;
</script>

<footer>
	<div>
		<span> {humidity} </span>
		<strong> Humidity </strong>
	</div>

	<div>
		<span> {windSpeed} </span>
		<strong> Windspeed </strong>
	</div>

	<div>
		<span> {feelsLike} </span>
		<strong> Feels like </strong>
	</div>
</footer>

<style>
	footer {
		color: #fff;
		grid-column: 2/3;
		border: 2px solid #fff;
		padding: 12px 32px;
		width: 80%;
		margin: 0 auto;
		border-radius: 10px;
		display: flex;
		text-align: center;
		justify-content: space-evenly;
		position: absolute;
		left: 0;
		right: 0;
		bottom: 32px;
	}

	span {
		display: block;
		font-weight: 600;
		font-size: 14px;
	}

	strong {
		color: #444;
		font-size: 14px;
		font-weight: 500;
	}

	@media only screen and (max-width: 600px) {
		footer {
			grid-column: 1/2;
		}
	}

	@media only screen and (min-width: 760px) {
		footer {
			grid-column: 2/3;
		}
	}
</style>
