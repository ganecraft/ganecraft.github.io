const itemDropsPlaceholder = "???, ???, ???";
const linkHighlightClass = "mob-link-highlight";

function fillItemDrops() {
	const itemDropsElement = document.getElementById("item-drops");
	if(!itemDropsElement) {
		return;
	}
	
	if(typeof itemDrops === 'undefined' || !Array.isArray(itemDrops) || itemDrops.length < 1) {
		itemDropsElement.innerHTML = itemDropsPlaceholder;
		return;
	}

	let itemDropsContent = addLinkIfExists(itemDrops[0], linkHighlightClass);
	for(let i = 1; i < itemDrops.length; i++) {
		itemDropsContent += ", " + addLinkIfExists(itemDrops[i], linkHighlightClass);
	}

	itemDropsElement.innerHTML = itemDropsContent;
}

fillItemDrops();