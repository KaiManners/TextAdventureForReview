function interpret(string){
	var cmd = {}, tokens = input.trim().toLowerCase().split(" ");
	cmd.action = tokens.shift();
	cmd.target = tokens.join(" ");
	return cmd;
}

function execute (command) {
	var action1 = command.action;
	var target1 = command.target;
	player[action1](target1);
}

function report(result){
	displayActions();
	displayInventory();
	//displayScene();
};

function displayActions() {
    var field, action, actionList;
    actionList = document.querySelector("#help > ul");
    clearContent(actionList);
    for (field in player) {
        if (player[field] instanceof Function) {
            action = document.createElement("li");
            action.textContent = field;
            actionList.appendChild(action);
        }
    }
}

function displayInventory() {
    var i, item, inventory;
    inventory = document.querySelector("#inventory > ul");
    clearContent(inventory);
    for (i in player.items) {
        item = document.createElement ("li");
        item.textContent = player.items[i];
        inventory.appendChild(item);
    }
}


function report (result){
	for (i in newPlayer.items){
		var content = document.querySelectorAll("#inventory > ul");
		return content; 
	}
}

function gameIntro(){
	var inputBox = document.querySelector("input");
	var listener = function(event) { 
		if (event.keyCode == 13){
			event.target.removeEventListener("keyup", listener);
			customizePlayer(this.value);
			gameStart();
		}
	}
	inputBox.addEventListener("keyup", listener);
}

function gameStep (input){
	var cmd = interpret(input);
	var result = execute(cmd);
	report(result);
}

function gameStart(){
	var inputBox = document.querySelector("input");
	inputBox.addEventListener("keyup", function(event) {
		if (event.keyCode === 13){
			gameStep(this.value);

		}
	}

}

window.onload = gameStart;
