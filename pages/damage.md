---
layout: default
title: Sebzés
nav_order: 4
has_children: false
has_toc: false
---
<head>
	<style>
		input[type='number'] { width: 4em; }
	</style>
</head>

Sebzés

<input id="damage" class="result-updater" type="number" min="0.0" value="1.0" step="0.5">
<br>

Átütés

<input id="pierce" class="result-updater" type="number" min="0.0" value="0.0" step="0.5">
<br>

Védelem

<input id="defense" class="result-updater" type="number" min="0.0" value="0.0" step="0.5">
<br>

<p id="result">Final damage</p>

<script>
	const clamp = (num, min, max) => Math.min(Math.max(num, min), max);

	const damageElement = document.getElementById("damage");
	const pierceElement = document.getElementById("pierce");
	const defenseElement = document.getElementById("defense");

	const resultElement = document.getElementById("result");
	
	function updateResult() {
		let damage = Math.max(0, damageElement.value);
		let pierceModifier = 1 - clamp(pierceElement.value, 0.0, 100.0)/100.0;
		let defense = Math.max(0, defenseElement.value);
		let result = Math.max(0, damage - defense*pierceModifier).toFixed(2);

		resultElement.innerHTML = "Final damage: " + Math.round(result*100)/100;
	}

	
	const elements = document.getElementsByClassName("result-updater");
	for(let i = 0; i < elements.length; i++) {
		elements[i].addEventListener("input", updateResult);
	}

	updateResult();

</script>