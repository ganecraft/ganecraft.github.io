const links = [];
links["Zöld könyv"] =			"/pages/items/greenbook.html";
links["Aranyalma"] =			"/pages/items/gapple.html";
links["Enchantolt Aranyalma"] =	"/pages/items/e_gapple.html";

links["Zombie v1"] =			"/pages/mobs/mobarena2/zombiev1.html"
links["Skeleton v1"] =			"/pages/mobs/mobarena2/skeletonv1.html"
links["Husk v1"] =				"/pages/mobs/mobarena2/huskv1.html"
links["Wither skeleton v1"] =	"/pages/mobs/mobarena2/w_skeletonv1.html"
links["Zombie v2"] =			"/pages/mobs/mobarena2/zombiev2.html"
links["Skeleton v2"] =			"/pages/mobs/mobarena2/skeletonv2.html"
links["Husk v2"] =				"/pages/mobs/mobarena2/huskv2.html"
links["Wither skeleton v2"] =	"/pages/mobs/mobarena2/w_skeletonv2.html"

function addLinkIfExists(item, elementClass = null) {
	if(typeof links[item] === 'undefined') {
		return item;
	}

	if(elementClass) {
		return "<a class=\"" + elementClass + "\" href=\"" + links[item] + "\">" + item + "</a>";
	}

	return "<a href=\"" + links[item] + "\">" + item + "</a>";
}
