function Location(name, descrip, item1, item1descrip, item2, item2descrip){
	this.name = name; 
	this.descrip = descrip; 
	this.item1 = item1;
	this.item1descrip = item1descrip;
	this.item2 = item2;
	this.item2descrip = item2descrip;
}

var map = {
	locations : [],
	connections : [
	[0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0],
	],

	connect : function(loc1, loc2){
	var i = this.locations.indexOf(loc1);
	var j = this.locations.indexOf(loc2);
	this.connections[i][j] = 1; 
	this.connections[j][i] = 1;
	},

	halfConnect : function(loc1, loc2){
	var i = this.locations.indexOf(loc1);
	var j = this.locations.indexOf(loc2);
	this.connections[i][j] = 1; 
	},
	
	listConnect : function(location, type){
		var locationObjects = [];
		var locationNames = [];
		var indexOfLoc = this.locations.indexOf(location);
		var row = this.connections[indexOfLoc];
		for(var i = 0; i < row.length; i++){
			if(row[i] == 1){
				var obj = this.locations[i];
				locationObjects.push(obj)
				var name = obj.name;
				locationNames.push(name);
			}			
		}

		if(type == 0){
			return locationObjects;	
		}else{
			return locationNames;
		}
	},

	
}

//descriptions
var officeDescrip = "Ivan had just received the news that he has an incurable disease. He fell down a stepladder and hurt his side and now he's destined to die. You follow Ivan and listen.";
var unknownDescrip = "You awake to nothingness. You cannot see your own body but your consciousness is still able to observe.";
var battlefieldDescrip = "Snake peers outside of his cover: a cardboard box. Two enemy soldiers converse briskly and then part ways. Snake follows one of them to neutralize him.";
var barDescrip = "The room is dark and tinges with a musky scent. The wood surrounding the actual bar appears to be rotting. You sit down and listen to the bartender.";
var roomDescrip = "Rosa lies on her bed. Her face is pressed against a pillow while she silently listens to the voicemail of loved one who had recently passed. Like many others, she cannot see or hear you, so you quietly observe.";
var nightclubDescrip = "John has hired an escort for the night. He normally doesn't do that sort of thing and he wonders why he's even doing it. The woman prepares herself in the restroom while John waits anxiously.";
var houseDescrip = "Mark has lived by himself for a long time. He's had a physical disability and because of this, he doesn't have much company. He's embarrased by his ailments and feels like he'd impose on others if he were to meet people. You read through his journal.";
var cafeDescrip = "Kim considers herself some sort of pessimist. How can one find any joy in a world where people starve, die alone, and live in pain? John finds her persistent cynicism irritating and even juvenille. While he doesn't entirely disagree with her, in spite of all this, he can't believe this. He continues to speak.";


//the unexpected quality of death
var office = new Location("Hospital", officeDescrip, "Note", "It reads, 'Physical Ailment: Unknown. Life Expectancy: At most a year. Prescribed medication: none.'", "Journal", "Ivan felt as though everything up to this point in his life was leading to his illness. His failure to live authentically now came in full force. Death was coming for him, but he never truly lived anyways, so there wasn't much to lose.");

//introduction
var unknown = new Location("Unknown", unknownDescrip, "Glass", "You hold it but it doesn't cut you. You don't see yourself.", "Sand", "You're unable to hold it, as if your hand were made up of tiny straws.");

//the implications of war
var battlefield = new Location("Battlefield", battlefieldDescrip, "TranqGun", "It seems to belong to the soldier you've been following. Funny how he uses a tranquilzer as opposed to a real gun.", "Wallet", "Inside is a picture of a child and a beautiful woman. Blood seems to soak the wallet and not much money was in it in the first place.");

//the purpose of drinking
var bar = new Location("Pub", barDescrip, "Beer", "5% alcohol content. The beer bottle is one of many consumed by the middle-aged drunkard.", "Receipt", "Five beers, two 'special drinks', and a shot of vodka. All for one man.");

//how to mourn
var room = new Location("Room", roomDescrip, "Picture", "It's a picture of Rosa and her now-deceased boyfriend. She mutters that she wish she never met him to avoid such pain.", "Voicemail", "The voicemail goes, 'Hi, it's Danny. I can't come to phone right now, but leave your name and number and I'll get back to you.' Rosa repeated it again.");

//paid company
var nightclub = new Location("Nightclub", nightclubDescrip, "Money", "200 dollars left on the dresser. He'd rather give up money than be vulnerable to any woman ever again.", "Photo", "The photo is a bit wrinkled on the edges as it peaks out of the man's wallet. It seems to have been crumpled up but then straighted out.");

//living with a mark 
var house = new Location("House", houseDescrip, "Journal", "It's been ten years since he's had this illness. He doesn't go outside much, but when he does, he wishes he were at least pallatable to the human eye. Nature creates everything beautiful; everything but him.", "Comic Book", "It's a comic book of Superman. How the man wishes he could be strong like the Man of Steel. To take flight and to save people. Superman never gave up on people, but it's hard for the man not to when so many can't love him. But he looks past it anyway.");

//things aren't too bad
var cafe = new Location("Cafe", cafeDescrip, "Coffee", "Coffee is shared between the man and woman. Bittersweet and warm.", "Notepad", "The only thing written on the notepad is: 'Light Amidst the Darkness.'");

map.locations.push(unknown, office, battlefield, bar, room, nightclub, house, cafe);

map.halfConnect(unknown, office);
map.halfConnect(office, battlefield); 
map.halfConnect(battlefield, bar); 
map.halfConnect(bar, nightclub);
map.halfConnect(nightclub, room);
map.halfConnect(room, house);
map.halfConnect(house, cafe);






		


