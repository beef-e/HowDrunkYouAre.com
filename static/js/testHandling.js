form = document.querySelector('#form');

form.addEventListener('submit', function (e) {
	e.preventDefault();
	if (glassType.checked) {
		glassFormula();
	} else {
		shotFormula();
		//indirizzaRisultatoScienza();
	}
});

weightQuestion = document.querySelector('#Weight');
heightQuestion = document.querySelector('#Height');
ageQuestion = document.querySelector('#age');
whatDrinkedQuestion = document.querySelector('#whatDrinked');
var remembersDrinking = document.getElementsByName('remembersDrinking');
var requiredRemembers = document.getElementsByClassName('requiredRemembers');
nVshotQuestion = document.querySelector('#nVshots');
glassType = document.querySelector('#GlassSwitch');
usedTime = document.querySelector('#usedTime');
soberResult = document.querySelector('#firstResult');
happyResult = document.querySelector('#secondResult');
drunkResult = document.querySelector('#thirdResult');

weightQuestion.addEventListener('input', function (e) {
	e.preventDefault();
	weight = parseFloat(weightQuestion.value);
	//console.log(typeof weight, weight);
});

heightQuestion.addEventListener('input', function (e) {
	e.preventDefault();
	height = parseFloat(heightQuestion.value);
	//console.log(typeof height, height);
});

ageQuestion.addEventListener('input', function (e) {
	e.preventDefault();
	age = parseFloat(ageQuestion.value);
	//console.log(typeof age, age);
});

function check() {
	//check di un radiobutton
	for (let i = 0; i < remembersDrinking.length; i++) {
		if (remembersDrinking[i].checked) {
			if (i == 0) {
				//console.log('remembersDrinking');
				document.getElementById('remembersWhatDrinked').classList.remove('hidden');
				for (let j = 0; j < requiredRemembers.length; j++) {
					requiredRemembers[j].required = true;
				}
			} else {
				//console.log("doesn't remeber");
				document.getElementById('remembersWhatDrinked').classList.add('hidden');
				for (let j = 0; j < requiredRemembers.length; j++) {
					requiredRemembers[j].required = false;
				}
			}
		}
	}
}

whatDrinkedQuestion.addEventListener('input', function (e) {
	e.preventDefault();
	alcoolPercent = parseFloat(whatDrinkedQuestion.value);
	alcoolPercent = alcoolPercent / 100;
	//*whatDrinkedQuestion = $(whatDrinkedQuestion).find('option:selected');
	//whatDrinkedQuestion = whatDrinkedQuestion.find('option:selected');
	//*if (whatDrinkedQuestion.classList.contains('Bicchiere')) {
	/*
		TODO: COME FACCIO A CONTROLLARE LA CLASSE DELLA OPTION^^^^
		*/
	//*console.log('checked');
	//*glassType.checked = true;
	//*}
	//console.log(typeof alcoolPercent, alcoolPercent);
});

nVshotQuestion.addEventListener('input', function (e) {
	e.preventDefault();
	vShot = parseInt(nVshotQuestion.value);
	//console.log(typeof vShot, vShot);
});

/*
|| TODO FIGURE OUT COME CAMBIARE LA FORMULA DELLA QUANTITA DI ALCOL IN BASE AL BICCHIERE SELEZIONATO
TODO FIGURE OUT FUNZIONAMENTO RADIO BUTTON INPUT
 */
usedTime.addEventListener('input', function (e) {
	e.preventDefault();
	let minuti = usedTime.value;
	minuteConverter(minuti);
	//console.log(typeof timeInSeconds, timeInSeconds);
});

/*
 *Individuazione del contenuto di alcool nel sangue e relativo indirizzamento al giusto risultato
 */

function indirizzaRisultatoScienza() {
	switch (bloodAlcool) {
		case bloodAlcool < breakPoint1:
			soberResult.classList.toggle('.hidden');
			break;

		case bloodAlcool > breakPoint1 && bloodAlcool < breakPoint2:
			happyResult.classList.toggle('.hidden');
			break;

		case bloodAlcool > breakPoint2:
			drunkResult.classList.toggle('.hidden');
			break;
	}
}
