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

let selectedAnswer;

firstQuestionAnswer = document.getElementsByName['remembersDrinking'];

for (let i = 0; i < 2; i++) {
	if (firstQuestionAnswer[i].checked) {
		selectedAnswer = firstQuestionAnswer.value;
	}
}

/*firstQuestionAnswer.addEventListener('input', function (e) {
	console.log(typeof firstQuestion, firstQuestion);
});*/

bloodAlcool =
	((consumedAlcool * alcoolPercent * 5.14) / (weight * alcoolConstant)) * 100 -
	0.015 * timeInSeconds;
