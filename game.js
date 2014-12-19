function interpret(string){
	var stuff = {}
	var FirstStep = string.trim();
	var SecondStep = FirstStep.split(" ");
	var ThirdStep = SecondStep.shift();
	stuff.action = ThirdStep;
	var FourthStep = SecondStep.join();
	stuff.object = FourthStep;
	return stuff;
};

var execute = function (command) {
	var action = command.action;
	var object = command.object;
	player[action](object);
};


function gameStep (input){
	var command = interpret(input);	
	execute(command);
}

function gameStart(){
	display(player.currentLocation.descrip);
	var inputBox = document.querySelector("input");
	inputBox.addEventListener("keyup", function(event) {
		if (event.keyCode === 13){
			gameStep(this.value);

		}
	});

}

window.onload = gameStart;
