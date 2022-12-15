//*CALCOLO DELLA COSTANTE DI ALCOL NEL MASCHIO
let consumedAlcool;
let vShot;
let alcoolPercent;
let weight;
let height;
let age;
let firstQuestionAnswer;
let alcoolConstant = 0.73;
let timeInSeconds;
let bloodAlcool;

/*let selectedAnswer;

firstQuestionAnswer = document.getElementsByName['remembersDrinking'];

firstQuestionAnswer.addEventListener('checked', function (e) {
	selectedAnswer = firstQuestionAnswer.checked.value;
});

for (let i = 0; i < 2; i++) {
	if (firstQuestionAnswer[i].checked) {
		selectedAnswer = firstQuestionAnswer.value;
	}
}*/

/*firstQuestionAnswer.addEventListener('input', function (e) {
	console.log(typeof firstQuestion, firstQuestion);
});*/

function shotInOnz(params) {
	let millilitri;
	millilitri = vShot * 30;
	millilitri = millilitri / 29.57;
	return millilitri;
}

function glassInOnz(params) {}

function shotFormula(params) {
	consumedAlcool = shotInOnz;
	bloodAlcool =
		((consumedAlcool * alcoolPercent * 5.14) / (weight * alcoolConstant)) * 100 -
		0.015 * timeInSeconds;
	console.log(bloodAlcool);
}

function glassFormula(params) {
	consumedAlcool = glassInOnz;
	bloodAlcool =
		((consumedAlcool * alcoolPercent * 5.14) / (weight * alcoolConstant)) * 100 -
		0.015 * timeInSeconds;
	console.log(bloodAlcool);
}

bloodAlcool =
	((consumedAlcool * alcoolPercent * 5.14) / (weight * alcoolConstant)) * 100 -
	0.015 * timeInSeconds;
