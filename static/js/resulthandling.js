const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
//resultBloodAlcool = urlParams.get('bloodAlcool');
let weight = urlParams.get('Weight');
weight = parseFloat(weight);
let alcoolPercent = urlParams.get('whatDrinked');
alcoolPercent = parseFloat(alcoolPercent);
let vShot = urlParams.get('numerodishottini');
let usedTime = urlParams.get('usedTime');
usedTime = parseFloat(usedTime);
usedTime = usedTime * 60;
let bloodAlcool;
soberResult = document.querySelector('#firstResult');
happyResult = document.querySelector('#secondResult');
drunkResult = document.querySelector('#thirdResult');

function indirizzaRisultatoScienza() {
	/*if (glassType.checked) {
		glassFormula();
	} else {
		shotFormula();
	}*/

	if (bicchiere) {
		bloodAlcool = glassFormula();
	} else {
		bloodAlcool = shotFormula();
	}
	indirizzamento(bloodAlcool);
}

function indirizzamento(bloodAlcool) {
	if (bloodAlcool < breakPoint1) {
		soberResult.classList.toggle('hidden');
	} else if (bloodAlcool > breakPoint1 && bloodAlcool < breakPoint2) {
		happyResult.classList.toggle('hidden');
	} else if (bloodAlcool > breakPoint2) {
		drunkResult.classList.toggle('hidden');
	} else {
		console.log('errore', bloodAlcool);
	}

	/*switch (true) {
		case bloodAlcool < breakPoint1:
			soberResult.classList.toggle('.hidden');
			break;

		case bloodAlcool > breakPoint1 && bloodAlcool < breakPoint2:
			happyResult.classList.toggle('.hidden');
			break;

		case bloodAlcool > breakPoint2:
			drunkResult.classList.toggle('.hidden');
			break;

		default:
			console.log('errore', bloodAlcool);
			break;
	}*/
}

window.addEventListener('load', function (e) {
	indirizzaRisultatoScienza();
});
