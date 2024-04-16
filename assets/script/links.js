const links = [];
links["ZÖLD KÖNYV"] =			"/pages/items/greenbook.html";
links["ARANYALMA"] =			"/pages/items/gapple.html";
links["ENCHANTOLT ARANYALMA"] =	"/pages/items/e_gapple.html";

links["ZOMBIE V1"] =			"/pages/mobs/mobarena2/zombiev1.html"
links["SKELETON V1"] =			"/pages/mobs/mobarena2/skeletonv1.html"
links["HUSK V1"] =				"/pages/mobs/mobarena2/huskv1.html"
links["WITHER SKELETON V1"] =	"/pages/mobs/mobarena2/w_skeletonv1.html"
links["ZOMBIE V2"] =			"/pages/mobs/mobarena2/zombiev2.html"
links["SKELETON V2"] =			"/pages/mobs/mobarena2/skeletonv2.html"
links["HUSK V2"] =				"/pages/mobs/mobarena2/huskv2.html"
links["WITHER SKELETON V2"] =	"/pages/mobs/mobarena2/w_skeletonv2.html"

function addLinkIfExists(item, elementClass = null) {
	if(typeof item !== 'string') {
		return item;
	}

	let itemID = item.toUpperCase();

	if(typeof links[itemID] === 'undefined') {
		return item;
	}

	if(elementClass) {
		return "<a class=\"" + elementClass + "\" href=\"" + links[itemID] + "\">" + item + "</a>";
	}

	return "<a href=\"" + links[itemID] + "\">" + item + "</a>";
}
