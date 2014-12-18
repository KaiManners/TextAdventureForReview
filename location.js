function location(name, description, intialItems){
	this.name = name; 
	this.description = function(description){
		return description; 
	this.items = initialItems;
}




var map = {
	locations : [
		//the unexpected quality of death
		var office = new Location("Doctor's Office", "Ivan had just received the news that he has an incurable disease. He fell down a stepladder and hurt his side and now he's destined to die. You follow Ivan and listen.", ["Doctor's Note"]),
		//introduction
		var unknown = new Location("Unknown", "You awake to nothingness. You cannot see your own body but your consciousness is still able to observe.", [""]),
		//the implications of war
		var battlefield = new Location("Battlefield", "Snake peers outside of his cover: a cardboard box. Two enemy soldiers converse briskly and then part ways. Snake follows one of them to neutralize him.", ["Tranquilizer gun", "Wallet"]),
		//the purpose of drinking
		var bar = new Location("Paddy's Pub", "The room is dark and tinges with a musky scent. The wood surrounding the actual bar appears to be rotting. You sit down and listen to the bartender.", ["Beer bottle"]),
		//how to mourn
		var room = new Location("Rosa's Room", "Rosa lies on her bed. Her face is pressed against a pillow while she silently listens to the voicemail of loved one who had recently passed. Like many others, she cannot see or hear you, so you quietly observe."["Picture", "Voicemail"]),
		//paid company
		var nightclub = new Location("Nightclub", "John has hired an escort for the night. He normally doesn't do that sort of thing and he wonders why he's even doing it. The woman prepares herself in the restroom while John waits anxiously.", ["Money", "Condom"]),
		//living with a mark 
		var house = new Location("Mark's House", "Mark has lived by himself for a long time. He's had a physical disability and because of this, he doesn't have much company. He's embarrased by his ailments and feels like he'd impose on others if he were to meet people. You read through his journal.", ["Journal", ["Comic books"]),
		//things aren't too bad
		var cafe = new Location("Cafe", "Kim considers herself some sort of pessimist. How can one find any joy in a world where people starve, die alone, and live in pain? John finds her persistent cynicism irritating and even juvenille. While he doesn't entirely disagree with her, in spite of all this, he can't believe this. He continues to speak.", ["Coffee", "Notepad"]),

]
	connections : [
	[0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0],
	];
	
}

function connect(loc1, loc2){
	var i = this.locations.indexOf(loc1);
	var j = this.locations.indexOf(loc2);
	this.connections[i][j] = 1; 
	this.connections[j][i] = 1;
}

function halfConnect(loc1, loc2){
	var i = this.locations.indexOf(loc1);
	var j = this.locations.indexOf(loc2);
	this.connections[i][j] = 0; 
}

map.halfConnect(unknown, office);
map.connect(office, battlefield); 
map.connect(battlefield, bar); 
map.connect(bar, nightclub);
map.connect(nightclub, house);
map.connect(house, cafe);

function listConnect(loc){
	var availableLocations = [];
	var currentLocation = this.locations.indexOf(loc);
	var row = this.connections[currentLocation];
	for(i = 0;i < row.length; i++){
		if(row[i] == 1){
			availableLocations.push(this.locations[i].name);
		}
	}
	return availableLocations;
};	
		
		
		
		


