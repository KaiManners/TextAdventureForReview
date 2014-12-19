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
			this.items.push(item);
			itemName = document.createElement(item)
			itemName.innerHTML = item;
			addedItem.appendChild(itemName);
			addedItem.setAttribute("id", item);
			itemList.appendChild(addedItem);        
		}else if(item == itemTwo){
			this.items.push(item);
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
	for(i = 0; i < this.items.length; i++){
		if(item == this.items[i]){
			itemList = document.getElementById("inventorylist");
			itemName = document.getElementById(item);
			itemList.removeChild(itemName);
        		this.items.splice(i, 1);
        		// after removing item from the player, add it to the current location
    		} else {
        		display("Can't find.");
			//display feedback indicating that the player doesn't have item
    		}
		}
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
						player.drop(this.items[i]);
						player.drop(this.items[i]);
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


