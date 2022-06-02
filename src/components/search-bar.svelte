<script>
	import { goto } from '$app/navigation';
	let inputValue = '';

	function handleInput(e) {
		inputValue = e.target.value;
	}

	function handleSubmit(e) {
		e.preventDefault();
		if (!inputValue || inputValue === ' ') {
			return;
		}

		goto(`/city/${inputValue}`);
	}
</script>

<div>
	<form on:submit={handleSubmit}>
		<h1>TMClima</h1>
		<input type="text" on:input={handleInput} value={inputValue} placeholder="Busca una ciudad" />
		<button type="submit">Submit</button>
	</form>
</div>

<style>
	h1 {
		font-size: 3rem;
	}
	div {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	input {
		width: calc(100% - 100px);
		height: 40px;
		border: none;
		outline: none;
		border-radius: 15px;
		font-size: 1rem;
		font-weight: bold;
		text-align: center;
	}

	button {
		width: 100px;
		height: 40px;
		outline: none;
		border: none;
		border-radius: 15px;
		background-color: #eee;
		color: #212121;
		font-size: 1.2rem;
		font-weight: bold;
		cursor: pointer;
	}

	button:active {
		background-color: #212121;
		color: #eee;
	}

	form {
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 20px;
		flex-direction: column;
	}
</style>
