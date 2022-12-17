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

function shotInOnz() {
	let millilitri;
	millilitri = vShot * 30;
	millilitri = millilitri / 29.57;
	return millilitri;
}

function glassInOnz() {}

function moleInGrams() {
	let millimoliLitro = bloodAlcool;
	let moliLitro = millimoliLitro / 1000;
	let grammiLitro = moliLitro * 88.148;
	//bloodAlcool = bloodAlcool / 1000;
	//bloodAlcool = bloodAlcool * 88.148;
	return grammiLitro;
}

function shotFormula() {
	consumedAlcool = shotInOnz();
	weight = weight * 2.2046;
	bloodAlcool =
		((consumedAlcool * alcoolPercent * 5.14) / (weight * alcoolConstant)) * 100 -
		0.015 * timeInSeconds;
	//||console.log('millimoli/litro  ', bloodAlcool); //*Contenuto alcool espresso in millimoli/litro
	bloodAlcool = moleInGrams(); //*Conversion contenuto alcool da millimoli/litro a grammi/litro
	console.log(bloodAlcool);
	//||console.log('grammi/litro ', bloodAlcool);
}

function glassFormula() {
	consumedAlcool = glassInOnz();
	weight = weight * 2.2046;
	bloodAlcool =
		((consumedAlcool * alcoolPercent * 5.14) / (weight * alcoolConstant)) * 100 -
		0.015 * timeInSeconds;
	//||console.log('millimoli/litro  ', bloodAlcool); //*Contenuto alcool espresso in millimoli/litro
	bloodAlcool = moleInGrams(); //*Conversion contenuto alcool da millimoli/litro a grammi/litro
	//||console.log('grammi/litro ', bloodAlcool);
}

function minuteConverter(minuti) {
	timeInSeconds = minuti * 60;
}

/*bloodAlcool =
	((consumedAlcool * alcoolPercent * 5.14) / (weight * alcoolConstant)) * 100 -
	0.015 * timeInSeconds;
*/
