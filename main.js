document.addEventListener("DOMContentLoaded", init);

function init() {


	// removed setTimeout(getMathProblem, 100) because getMathProblem needed to be invoked before remaining code

	getMathProblem();

	var numberStr = "";
	var operatorsArr = ["+", "*"]
	var firstNum;
	var secondNum;
	var additionAnswer;

	function getRandomNum () {

		return Math.floor(Math.random() * (20 - 1))
	}


	function getMathProblem () {
		
		firstNum = getRandomNum();
		secondNum = getRandomNum();
		additionAnswer = firstNum + secondNum;
		document.getElementById("firstNum").textContent = firstNum;
		document.getElementById("secondNum").textContent = secondNum;

	}
	




	//hide submission messages
	document.getElementById("correct").style.visibility = "hidden";
	document.getElementById("incorrect").style.visibility = "hidden";


	//set div content to random nums
	document.getElementById("firstNum").textContent = firstNum;
	document.getElementById("secondNum").textContent = secondNum;


	//set operator
	document.getElementById("operator").textContent = operatorsArr[0];

	//user can make answer negative
	document.getElementById("negativeBtn").addEventListener("click", function (){
		console.log("typeof", typeof numberStr)
		console.log(numberStr);
		numberStr = -1 * Number(numberStr);
		console.log(numberStr);
	})

	//get users input
	document.getElementById('answerBtns').addEventListener("click", function (event) {

		if(event.target.matches("button")){
		
			numberStr += Number(event.target.textContent);
			console.log("numberStr:", numberStr);
			document.getElementById("answer").textContent = numberStr.toString();
		}
	})

	//clear user input
	function clearAnswer(){
		document.getElementById("answer").textContent = "____";
		numberStr = "";		
	}

	//clear user input
	document.getElementById("clearBtn").addEventListener("click", clearAnswer);

	//check answer
	document.getElementById("submitBtn").addEventListener("click", function () {
		
		console.log("numberStr:", numberStr)
		console.log("additionAnswer:", additionAnswer)

		if(numberStr == additionAnswer){
			console.log("correct");
			document.getElementById("correct").style.visibility = "visible";
			document.getElementById("incorrect").style.visibility = "hidden";

			//get new nums & clear
			clearAnswer();
			getMathProblem();

		} else {
			
			document.getElementById("correct").style.visibility = "hidden";
			document.getElementById("incorrect").textContent = "Incorrect: "  + firstNum.toString() + " + " + secondNum.toString() + " = " + additionAnswer.toString();
			document.getElementById("incorrect").style.visibility = "visible";			
			//get new nums & clear
			clearAnswer();
			getMathProblem();
		}
	});

}


