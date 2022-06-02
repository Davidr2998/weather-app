export function getCurrentDate() {
	let month = [
		'Enero',
		'Febrero',
		'Marzo',
		'Abril',
		'Mayo',
		'Junio',
		'Julio',
		'Agosto',
		'Septiembre',
		'Octubre',
		'Noviembre',
		'Diciembre'
	];
	let currentDay = new Date().getDate();
	let currentMonth = new Date().getMonth();
	let currentYear = new Date().getFullYear();

	return `${month[currentMonth]} ${currentDay}, ${currentYear}`;
}
