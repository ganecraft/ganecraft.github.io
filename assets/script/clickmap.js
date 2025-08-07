const circleClass = "mob-marker-circle";
const rectClass = "mob-marker-rectangle";
const svgNamespace = "http://www.w3.org/2000/svg";

function createMarkers() {
	console.log("createMarkers called");
	if(typeof markers === 'undefined' || !Array.isArray(markers)) {
		console.log("markers not array");
		return;
	}

	const svgElement = document.getElementById('clickmap-svg');
	if(!svgElement) {
		console.log("svgElement does not exist");
		return;
	}

	markers.forEach(marker => {
		let clickableShapeElement;
		if(marker.type === 'circle') {
			clickableShapeElement = document.createElementNS(svgNamespace, 'circle');
			clickableShapeElement.classList.add(circleClass);
			clickableShapeElement.setAttributeNS(null, 'cx', marker.x);
			clickableShapeElement.setAttributeNS(null, 'cy', marker.y);
			clickableShapeElement.setAttributeNS(null, 'r', marker.size);
		}
		else if(marker.type === 'rect') {
			clickableShapeElement = document.createElementNS(svgNamespace, 'rect');
			clickableShapeElement.classList.add(rectClass);
			clickableShapeElement.setAttributeNS(null, 'x', marker.x);
			clickableShapeElement.setAttributeNS(null, 'y', marker.y);
			clickableShapeElement.setAttributeNS(null, 'width', marker.size);
			clickableShapeElement.setAttributeNS(null, 'height', marker.size);
		} else {
			console.error("Invalid marker type for marker: " + marker);
			return;
		}
		
		const titleElement = document.createElementNS(svgNamespace, 'title');
		titleElement.innerHTML = marker.title;

		const hrefElement = document.createElementNS(svgNamespace, 'a');
		hrefElement.setAttributeNS(null, 'href', marker.href);

		// 'build' the marker and attach to the svg
		clickableShapeElement.appendChild(titleElement);
		hrefElement.appendChild(clickableShapeElement);
		svgElement.appendChild(hrefElement);
	});
	console.log("createMarkers end");
}

createMarkers();