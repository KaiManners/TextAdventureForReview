var player = {
	items: [],
	currentLocation : unknown,

	pickup : function(itemName){
		var item = itemName.toLowerCase();
		itemList = document.querySelector("#inventorylist");
		addedItem = document.createElement("li");
		itemOne = this.currentLocation.item1;
		itemTwo = this.currentLocation.item2;
		if(item == itemOne){
			player.items.push(item);
			itemName = document.createElement(item)
			itemName.innerHTML = item;
			addedItem.appendChild(itemName);
			addedItem.setAttribute("id", item);
			itemList.appendChild(addedItem);        
		}else if(item == itemTwo){
			player.items.push(item);
			itemName = document.createElement(item)
			itemName.innerHTML = item;
			addedItem.appendChild(itemName);
			addedItem.setAttribute("id", item);
			itemList.appendChild(addedItem);        
		}else{
			display("Nothing here");		
	}
	},

	drop : function (itemName){
		var item = itemName.toLowerCase();
		itemList = document.getElementById("inventorylist");
		itemName = document.getElementById(item);
		itemList.removeChild(itemName);
		/*searchList = document.getElementById("realFoundItems");
		searchNames = document.querySelector(".list");
		searchList.removeChild(searchNames);*/
	},
			

	lookat : function(itemName){
		var item = itemName.toLowerCase();
		if(item == this.currentLocation.item1){
			display(this.currentLocation.item1descrip);
		}else if(item == this.currentLocation.item2){
			display(this.currentLocation.item2descrip);
		}else{
			display("What are you looking at?");
		}
	},

	wherecanigo : function(){
		var loc = map.listConnect(this.currentLocation);
		display("You can go to the " + loc);
	},

	/*
	goto : function(location){
		var availableLocations = map.listConnect(this.currentLocation);
		for(var i = 0; i < availableLocations.length; i++){
			if(location == availableLocations[i]){
				var object = map.listConnect(this.currentLocation, 0);
				this.currentLocation = object[i];
				display(this.currentLocation.descrip);
				break;
			}
		display("First collect both your items!")
		}
	},*/
	
	goto : function(loc){
		/*var x;
		if(Math.random() > 0.5){
			x = this.currentLocation.item1;
		}else{
			x = this.currentLocation.item2;
		}*/
			
		var location = loc.toLowerCase();
		var availableLocations = map.listConnect(this.currentLocation);
		for(var i = 0; i < availableLocations.length; i++){
			if(location == availableLocations[i]){
				if(this.items.length == 2){
						player.drop(this.items[0]);
						player.drop(this.items[1]);
						var object = map.listConnect(this.currentLocation, 0);
						this.currentLocation = object[i];
						display(this.currentLocation.descrip);
						break;
				}
				
			}
		display("First collect both your items!")
		}
	},
	
	
	whereami : function(){
		var location = document.querySelector("#realCurrentLoc");
		location.innerHTML = player.currentLocation.name;
	},
		
	

	searchfor : function(word){
			input = word.toLowerCase();
			var foundItems = document.querySelector("#foundItems");
			var list = document.createElement("li");
			list.setAttribute("class", "list");
			if(input == "firstitem"){
				var text = document.createTextNode(this.currentLocation.item1);	
				list.appendChild(text);
				foundItems.appendChild(list);
				display("Found a " + this.currentLocation.item1);
			}else if(input == "seconditem"){
				var text = document.createTextNode(this.currentLocation.item2);	
				list.appendChild(text);
				foundItems.appendChild(list);
				display("Found a " + this.currentLocation.item2);
			}else{
				display("Nothing here!");
			}
		
	},

}

var display = function(text){
	var para = document.querySelector("#descrip");
	para.removeChild(para.firstChild);
	var textNode = document.createTextNode(text);
	para.appendChild(textNode);
};


