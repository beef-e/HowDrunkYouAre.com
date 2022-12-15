form = document.querySelector('#form');

form.addEventListener('submit', function (e) {
	e.preventDefault();
	if (glassType.checked) {
		glassFormula();
	} else {
		shotFormula();
	}
});

weightQuestion = document.querySelector('#Weight');
heightQuestion = document.querySelector('#Height');
ageQuestion = document.querySelector('#age');
whatDrinkedQuestion = document.querySelector('#whatDrinked');
nVshotQuestion = document.querySelector('#nVshots');
glassType = document.querySelector('#GlassSwitch');

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
	whatDrinkedQuestion = $(whatDrinkedQuestion).find('option:selected');
	//whatDrinkedQuestion = whatDrinkedQuestion.find('option:selected');
	if (whatDrinkedQuestion.classList.contains('Bicchiere')) {
		/*
		TODO: COME FACCIO A CONTROLLARE LA CLASSE DELLA OPTION^^^^
		*/
		console.log('checked');
		glassType.checked = true;
	}
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
