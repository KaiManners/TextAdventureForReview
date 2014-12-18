var player = {
	items: [],
	pickup : function(item){
		player.items.push(item);
		inventory = document.querySelector("#inventorylist");
		itemList = document.createElement("li");
		itemList.innerHTML = item;
		node.appendChild(textNode);
		node.setAttribute("id", item);
		newList.appendChild(node);
		
	}

	drop : function(itemName){
		for(i in this.items){
			if(this.items[i] === itemName){
					items.splice(i, 1);
					document.getElementById("itemName").remove();
			}else{
				console.log("You can't drop this!");
			}
		}
	}
		
	/*
	goto : function(locName){
    		var newLoc =locName.getLocNumber();
    		for(i in map.locations){
        		if(locName == map.locations[i].name){ 
            			if(newLoc == currLoc.getLocNum();){
                			currLoc = newLoc;
            			}else{
                			console.log("You can't go there.");
            			}
        		}else{
				console.log("Location doesn't exist.");
        		}
     		}
	}

};
*/


