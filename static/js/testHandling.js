form = document.querySelector('#form');

form.addEventListener('submit', function (e) {
	form.preventDefault();
});

weightQuestion = document.querySelector('#Weight');
heightQuestion = document.querySelector('#Height');
ageQuestion = document.querySelector('#age');
whatDrinkedQuestion = document.querySelector('#whatDrinked');
nVshotQuestion = document.querySelector('#nVshots');

weightQuestion.addEventListener('input', function (e) {
	e.preventDefault();
	weight = parseFloat(weightQuestion.value);
	console.log(typeof weight, weight);
});

heightQuestion.addEventListener('input', function (e) {
	e.preventDefault();
	height = parseFloat(heightQuestion.value);
	console.log(typeof height, height);
});

ageQuestion.addEventListener('input', function (e) {
	e.preventDefault();
	age = parseFloat(ageQuestion.value);
	console.log(typeof age, age);
});

whatDrinkedQuestion.addEventListener('input', function (e) {
	e.preventDefault();
	alcoolPercent = parseFloat(whatDrinkedQuestion.value);
	alcoolPercent = alcoolPercent / 100;
	console.log(typeof alcoolPercent, alcoolPercent);
});

nVshotQuestion.addEventListener('input', function (e) {
	e.preventDefault();
	vShot = parseInt(nVshotQuestion.value);
	console.log(typeof vShot, vShot);
});

/*
TODO FIGURE OUT COME CAMBIARE LA FORMULA DELLA QUANTITA DI ALCOL IN BASE AL BICCHIERE SELEZIONATO
TODO FIGURE OUT FUNZIONAMENTO RADIO BUTTON INPUT
 */
