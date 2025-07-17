const droppedByPlaceholder = "???";
const linkHighlightClass = "mob-link-highlight";

function fillDroppedBy() {
	const droppedByElement = document.getElementById("dropped-by");
	if(!droppedByElement) {
		return;
	}
	
	if(typeof droppedBy === 'undefined' || !Array.isArray(droppedBy) || droppedBy.length < 1) {
		droppedByElement.innerHTML = "<b>Dobja: </b>" + droppedByPlaceholder;
		return;
	}

	let droppedByContent = "<b>Dobja: </b>" + addLinkIfExists(droppedBy[0], linkHighlightClass);
	for(let i = 1; i < droppedBy.length; i++) {
		droppedByContent += ", " + addLinkIfExists(droppedBy[i], linkHighlightClass);
	}

	droppedByElement.innerHTML = droppedByContent;
}

fillDroppedBy();
