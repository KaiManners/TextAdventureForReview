var player = {
	items: [],
	currentLocation : nightclub,

	pickup : function(item){
		itemList = document.querySelector("#inventorylist");
		addedItem = document.createElement("li");
		itemOne = this.currentLocation.item1;
		itemTwo = this.currentLocation.item2;
		if(item == itemOne){
			player.items.push(item);
			itemName = document.createElement(item)
			itemName.innerHTML = item;
			addedItem.appendChild(itemName);
			itemList.appendChild(addedItem);        
		}else if(item == itemTwo){
			player.items.push(item);
			itemName = document.createElement(item)
			itemName.innerHTML = item;
			addedItem.appendChild(itemName);
			itemList.appendChild(addedItem);        
		}else{
			display("Nothing here");		
	}
	},

	lookCloser : function(item){
		if(item == this.currentLocation.item1){
			display(this.currentLocation.item1descrip);
		}
		if(item == this.currentLocation.item2){
			display(this.currentLocation.item2descrip);
		}
	},

	availableLocations : function(){
		display(map.listConnect(this.currentLocation));
	},

	goto : function(loc){
		var availableLocations = map.listConnect(this.currentLocation);
		for(i = 0; i < availableLocations.length; i++){
			if(loc == availableLocations[i]){
				var locations = map.listConnect(this.currentLocation);
				this.currentLocation = locations[i];
				display(this.currentLocation.descrip);

			}
		}
	},
	

	drop : function(item){
		for(i in this.items){
			if(this.items[i] === item){
					this.items.splice(i, 1);
					document.getElementById("item").remove();
			}
		}
	},

	displayCurrentLocation : function(){
		var location = document.querySelector("#realCurrentLoc");
		location.innerHTML = player.currentLocation.name;
	},
		
	

	searchFor : function(input){
			var foundItems = document.querySelector("#foundItems");
			var list = document.createElement("li");
			if(input == "FirstItem"){
				var text = document.createTextNode(this.currentLocation.item1);	
				list.appendChild(text);
				foundItems.appendChild(list);
			}else if(input == "SecondItem"){
				var text = document.createTextNode(this.currentLocation.item2);	
				list.appendChild(text);
				foundItems.appendChild(list);
			}
		
	},

}

var display = function(text){
	var para = document.querySelector("#descrip");
	para.removeChild(para.firstChild);
	var textNode = document.createTextNode(text);
	para.appendChild(textNode);
};


