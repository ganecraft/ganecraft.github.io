const statPlaceholder = "???";
const statHighlightClass = "mob-highlight";
const itemDropsPlaceholder = "???, ???, ???";
const linkHighlightClass = "mob-link-highlight";

const isObject = (val) => typeof val === 'object' && val !== null && !Array.isArray(val);
const getStatValue = (stat, defaultVal = statPlaceholder) => {
	if(typeof mobStats[stat] === 'undefined') {
		return defaultVal;
	}
	return mobStats[stat];
};
const getDropValue = (stat, defaultVal = statPlaceholder) => {
	if(typeof drops[stat] === 'undefined') {
		return defaultVal;
	}
	return drops[stat];
};
const hlSpan = (val) => '<span class="' + statHighlightClass + '">' + val + '</span>';
const statsLabel = (val) => '<h3><u>' + val + '</u>:</h3><br>';


function renderDrops() {
	const mobDropsTableElement = document.getElementById("mob-drop-info");
	if(!mobDropsTableElement) {
		return;
	}

	// process mob kill rewards
	let points = statPlaceholder;
	let exp = statPlaceholder;
	let money = statPlaceholder;
	if(isObject(drops)) {
		points = getDropValue('points');
		exp = getDropValue('exp');
		money = getDropValue('money');
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
	mobDropsTableElement.innerHTML = '<tr><td><h3>Drop:</h3></td><td><h3>Items:</h3></td></tr><tr><td><p>Social credit: ' + hlSpan(points) + '</p><p>Exp: ' + hlSpan(exp) + '</p><p>Moner: ' + hlSpan(money) + '</p></td><td><p class="' + statHighlightClass + '">' + itemDropsContent + '</p></td></tr>';
}

function renderOtherInfo() {
	const infoTableElement = document.getElementById("other-mob-info");
	if(!infoTableElement) {
		return;
	}

	if(typeof otherInfo === 'undefined' || !Array.isArray(otherInfo) || otherInfo.length < 1) {
		infoTableElement.style.display = 'none';
		return;
	}
	
	let infoList = "";
	for(let i = 0; i < otherInfo.length; i++) {
		infoList += "<li>" + otherInfo[i] + "</li>";
	}
	
	infoTableElement.innerHTML = '<tr><td><h3>Other</h3></td></tr><tr><td><ul>' + infoList + '</ul></td></tr>';
}

function renderStats() {
	const statsElement = document.getElementById("mob-stats");
	if(!statsElement) {
		return;
	}

	if(!isObject(mobStats)) {
		statsElement.innerHTML = '<p class="' + statHighlightClass + '">' + statPlaceholder + '</p>';
		return;
	}

	let statsHTML = '';
	statsHTML += '<h2>' + getStatValue('mobName') + '</h2><br>';
	statsHTML += '<p>Type: ' + hlSpan(getStatValue('mobType')) + '</p>';

	statsHTML += statsLabel("Stats");
	statsHTML += '<p>Health: ' + hlSpan(getStatValue('health')) + '</p>';
	let armor = getStatValue('armor', 0);
	let toughness = getStatValue('toughness', 0);
	statsHTML += '<p>Defense: ' + hlSpan(armor*2 + toughness*3) + ' % (' + hlSpan(armor) + ' armor + ' + hlSpan(toughness) + ' toughness)</p>';
	statsHTML += '<p>Absolute def: ' + hlSpan(getStatValue('absoluteDef')) + '</p>';

	statsHTML += statsLabel("Attack value");
	statsHTML += '<p>Damage: ' + hlSpan(getStatValue('damage')) + '</p>';
	statsHTML += '<p>Armor pierce: ' + hlSpan(getStatValue('armorPierce')) + ' %</p>';
	statsHTML += '<p>Enchant pierce: ' + hlSpan(getStatValue('enchantPierce')) + ' %</p>';
	statsHTML += '<p>Shield pierce: ' + hlSpan(getStatValue('shieldPierce')) + ' %</p>';
	statsHTML += '<p>Shield cooldown: ' + hlSpan(getStatValue('shieldCooldown')) + ' sec</p>';

	statsHTML += statsLabel("Resistances");
	statsHTML += '<p>Crit resistance: ' + hlSpan(getStatValue('resCrit')) + ' %</p>';
	statsHTML += '<p>Protection: ' + hlSpan(getStatValue('resEnv')) + ' %</p>';
	statsHTML += '<p>Projectile protection: ' + hlSpan(getStatValue('resProj')) + ' %</p>';
	statsHTML += '<p>Blast protection: ' + hlSpan(getStatValue('resExpl')) + ' %</p>';
	statsHTML += '<p>Fire protection: ' + hlSpan(getStatValue('resFire')) + ' %</p>';
	statsHTML += '<p>Fall protection: ' + hlSpan(getStatValue('resFall')) + ' %</p>';

	statsHTML += '<br>';
	statsHTML += '<p>Sword resistance: ' + hlSpan(getStatValue('resSword')) + ' %</p>';
	
	
	statsElement.innerHTML = statsHTML;
}

renderStats();
renderDrops();
renderOtherInfo();