const mainElementId = "main-content";
const statPlaceholder = "???";
const statHighlightClass = "mob-highlight";
const itemDropsPlaceholder = "???, ???, ???";
const linkHighlightClass = "mob-link-highlight";
const mobDropsClass = "mob-drops";

const mobImageClass = "mob-image";
const mobImagePlaceholder = "/assets/img/default_mob.png";
const mobDescFlexClass = "mob-div-description-flex";
const mobDescClass = "mob-div-description";


const isObject = (val) => typeof val === 'object' && val !== null && !Array.isArray(val);
const isString = (value) => typeof value === 'string' || value instanceof String;
const getValue = (obj, property, defaultVal = statPlaceholder) => {
	if(typeof obj[property] === 'undefined') {
		return defaultVal;
	}
	return obj[property];
};
const hlSpan = (val) => '<span class="' + statHighlightClass + '">' + val + '</span>';
const customSpan = (val, spanClass) => '<span class="' + spanClass + '">' + val + '</span>';
const statsLabel = (val) => '<h3><u>' + val + '</u>:</h3><br>';


function addImage() {
	const mainContentElement = document.getElementById(mainElementId);
	if(!mainContentElement) {
		return;
	}

	const image = document.createElement('img');
	image.classList.add(mobImageClass);
	if(typeof mobImage === 'undefined' || !isString(mobImage)) {
		image.setAttribute('src', mobImagePlaceholder);
		mainContentElement.appendChild(image);
		return;
	}

	image.setAttribute('src', mobImage);
	image.setAttribute('onerror', "this.onerror=null; this.src='" + mobImagePlaceholder + "';");
	mainContentElement.appendChild(image);
}

function renderDrops() {
	const mainContentElement = document.getElementById(mainElementId);
	if(!mainContentElement) {
		return;
	}

	const mobDropsTableElement = document.createElement('table');

	// process mob kill rewards
	let points = statPlaceholder;
	let exp = statPlaceholder;
	let money = statPlaceholder;
	if(typeof drops !== 'undefined' && isObject(drops)) {
		points = getValue(drops, 'points');
		exp = getValue(drops, 'exp');
		money = getValue(drops, 'money');
	}
	
	// process item drops
	if(typeof itemDrops === 'undefined' || !Array.isArray(itemDrops) || itemDrops.length < 1) {
		var itemDropsContent = itemDropsPlaceholder;
	} else {
		var itemDropsContent = addLinkIfExists(itemDrops[0], linkHighlightClass);
		for(let i = 1; i < itemDrops.length; i++) {
			itemDropsContent += ", " + addLinkIfExists(itemDrops[i], linkHighlightClass);
		}
	}


	// create drops table
	mobDropsTableElement.innerHTML = '<tr><td><h3>Drop:</h3></td><td><h3>Items:</h3></td></tr><tr><td class="' + mobDropsClass + '"><p>Social credit: ' + hlSpan(points) + '</p><p>Exp: ' + hlSpan(exp) + '</p><p>Moner: ' + hlSpan(money) + '</p></td><td><p class="' + statHighlightClass + '">' + itemDropsContent + '</p></td></tr>';
	mainContentElement.appendChild(document.createElement('br'));
	mainContentElement.appendChild(mobDropsTableElement);
}

function renderOtherInfo() {
	const mainContentElement = document.getElementById(mainElementId);
	if(!mainContentElement) {
		return;
	}

	let infoTableElement = document.createElement('table');

	if(typeof otherInfo === 'undefined' || !Array.isArray(otherInfo) || otherInfo.length < 1) {
		infoTableElement.innerHTML = '<tr><td><h3>Other</h3></td></tr><tr><td><ul class="mob-other-info"><li>No other information.</li></ul></td></tr>';
		mainContentElement.appendChild(document.createElement('br'));
		mainContentElement.appendChild(infoTableElement);
		return;
	}

	let infoList = "";
	for(let i = 0; i < otherInfo.length; i++) {
		infoList += "<li>" + otherInfo[i] + "</li>";
	}
	
	infoTableElement.innerHTML = '<tr><td><h3>Other</h3></td></tr><tr><td><ul class="mob-other-info">' + infoList + '</ul></td></tr>';
	mainContentElement.appendChild(document.createElement('br'));
	mainContentElement.appendChild(infoTableElement);
}

function renderStats() {
	const mainContentElement = document.getElementById(mainElementId);
	if(!mainContentElement) {
		return;
	}

	const flexDivElement = document.createElement('div');
	flexDivElement.classList.add(mobDescFlexClass);
	const descDivElement = document.createElement('div');
	descDivElement.classList.add(mobDescClass);

	let statsObj = typeof mobStats === 'undefined' || !isObject(mobStats) ? {} : mobStats;
	let statsHTML = '';
	statsHTML += '<h2 class="mob-name-stat">' + getValue(statsObj, 'mobName') + '</h2><br>';

	// add links to location(s) if exists
	if(typeof mobLoc === 'undefined' || !Array.isArray(mobLoc) || mobLoc.length < 1) {
		statsHTML += '<p>Location: ' + hlSpan(statPlaceholder) + '</p>';
	} else {
		let mobLocContent = addLinkIfExists(mobLoc[0], linkHighlightClass);
		for(let i = 1; i < mobLoc.length; i++) {
			mobLocContent += ", " + addLinkIfExists(mobLoc[i], linkHighlightClass);
		}
		statsHTML += '<p>Location: ' + hlSpan(mobLocContent) + '</p>';
	}

	statsHTML += '<p>Type: ' + customSpan(getValue(statsObj, 'mobType'), statHighlightClass + " mob-type-stat") + '</p>';

	statsHTML += statsLabel("Stats");
	statsHTML += '<p>Health: ' + hlSpan(getValue(statsObj, 'health')) + '</p>';
	let armor = getValue(statsObj, 'armor', 0);
	let toughness = getValue(statsObj, 'toughness', 0);
	statsHTML += '<p>Defense: ' + hlSpan(armor*2 + toughness*3) + ' % (' + hlSpan(armor) + ' armor + ' + hlSpan(toughness) + ' toughness)</p>';
	statsHTML += '<p>Absolute def: ' + hlSpan(getValue(statsObj, 'absoluteDef')) + '</p>';

	statsHTML += statsLabel("Attack value");
	statsHTML += '<p>Damage: ' + hlSpan(getValue(statsObj, 'damage')) + '</p>';
	statsHTML += '<p>Armor pierce: ' + hlSpan(getValue(statsObj, 'armorPierce')) + ' %</p>';
	statsHTML += '<p>Enchant pierce: ' + hlSpan(getValue(statsObj, 'enchantPierce')) + ' %</p>';
	statsHTML += '<p>Shield pierce: ' + hlSpan(getValue(statsObj, 'shieldPierce')) + ' %</p>';
	statsHTML += '<p>Shield cooldown: ' + hlSpan(getValue(statsObj, 'shieldCooldown')) + ' sec</p>';

	statsHTML += statsLabel("Resistances");
	statsHTML += '<p>Crit resistance: ' + hlSpan(getValue(statsObj, 'resCrit')) + ' %</p>';
	statsHTML += '<p>Protection: ' + hlSpan(getValue(statsObj, 'resEnv')) + ' %</p>';
	statsHTML += '<p>Projectile protection: ' + hlSpan(getValue(statsObj, 'resProj')) + ' %</p>';
	statsHTML += '<p>Blast protection: ' + hlSpan(getValue(statsObj, 'resExpl')) + ' %</p>';
	statsHTML += '<p>Fire protection: ' + hlSpan(getValue(statsObj, 'resFire')) + ' %</p>';
	statsHTML += '<p>Fall protection: ' + hlSpan(getValue(statsObj, 'resFall')) + ' %</p>';

	statsHTML += '<br>';
	statsHTML += '<p>Sword resistance: ' + hlSpan(getValue(statsObj, 'resSword')) + ' %</p>';
	
	
	descDivElement.innerHTML = statsHTML;
	flexDivElement.appendChild(descDivElement);
	mainContentElement.appendChild(flexDivElement);
}

addImage();
renderStats();
renderDrops();
renderOtherInfo();