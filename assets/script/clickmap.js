const circleClass = "mob-marker-circle";
const rectClass = "mob-marker-rectangle";
const svgNamespace = "http://www.w3.org/2000/svg";

function createMarkers() {
	if(typeof markers === 'undefined' || !Array.isArray(markers)) {
		console.error("markers not array");
		return;
	}

	const svgElement = document.getElementById('clickmap-svg');
	if(!svgElement) {
		console.error("svgElement does not exist");
		return;
	}

	const infoBox = document.getElementById('info-box');
	if(!infoBox) {
		console.error("infoBox does not exist");
		return;
	}

	const mapContainer = document.getElementById('map-container');
	if(!mapContainer) {
		console.error("mapContainer does not exist");
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

		/*
		const hrefElement = document.createElementNS(svgNamespace, 'a');
		hrefElement.setAttributeNS(null, 'href', marker.href);

		// 'build' the marker and attach to the svg
		clickableShapeElement.appendChild(titleElement);
		hrefElement.appendChild(clickableShapeElement);
		svgElement.appendChild(hrefElement);*/


		// 'build' the marker and attach to the svg
		clickableShapeElement.appendChild(titleElement);
		svgElement.appendChild(clickableShapeElement);

		// thank you deepseek my beloved

		clickableShapeElement.addEventListener('click', e => {
			const svgRect = svgElement.getBoundingClientRect();
			const shapeRect = clickableShapeElement.getBoundingClientRect();

			// Calculate position for info box
			const clickX = shapeRect.left - svgRect.left;
			const clickY = shapeRect.top - svgRect.top;
			// Position the info box
			infoBox.style.left = `${clickX}px`;

			// Determine if box should appear above or below
			if (clickY > mapContainer.offsetHeight / 2) {
				// Position above if clicked in lower half
				infoBox.style.top = `${clickY - infoBox.offsetHeight - 10}px`;
			} else {
				// Position below if clicked in upper half
				infoBox.style.top = `${clickY + shapeRect.height + 10}px`;
		}

		  infoBox.innerHTML = '<a href="' + marker.href + '">' + marker.title + '</a>';
		  infoBox.style.display = 'block';
		});
	});


	// Close info box when clicking elsewhere
	document.addEventListener('click', e => {
		if(!e.target.classList.contains('mob-marker-circle') && e.target !== infoBox) {
			infoBox.style.display = 'none';
		}
	});
}

createMarkers();