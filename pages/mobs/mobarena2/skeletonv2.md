---
layout: default
title: Skeleton v2
nav_order: 6
nav_exclude: true
parent: Mobok
---
<head>
	<link rel="stylesheet" href="/assets/css/basics.css">
</head>

![image](/assets/img/mobs/mobarena2/m2skeleton2.png){: class="mob-image" }

<div class="mob-div-description-flex">
	<div class="mob-div-description">
		<h2>Skeleton v2</h2>
		<br>
		<p>Megtalálható: <a class="mob-link-highlight" href="/pages/mobs/mobarena2.html">Mobaréna 2</a></p>
		<p>Típus: <span class="mob-highlight">UNDEAD</span></p>
		<h3><u>Statok</u>:</h3>
		<br>
		<p>Életerő: <span class="mob-highlight">25</span></p>
		<p>Védelem: <span class="mob-highlight">64</span> % (<span class="mob-highlight">20</span> armor + <span class="mob-highlight">8</span> toughness)</p>
		<p>Abszolút védelem: <span class="mob-highlight">2</span></p>
		<h3><u>Támadóérték</u>:</h3>
		<br>
		<p>Sebzés: <span class="mob-highlight">15</span></p>
		<p>Armor átütés: <span class="mob-highlight">10</span> %</p>
		<p>Enchant átütés: <span class="mob-highlight">5</span> %</p>
		<p>Pajzs átütés: <span class="mob-highlight">0</span> %</p>
		<p>Pajzs cooldown: <span class="mob-highlight">3</span> mp</p>
		<h3><u>Ellenállások</u>:</h3>
		<br>
		<p>Krit ellenállás: <span class="mob-highlight">35</span> %</p>
		<p>Általános ellenállás: <span class="mob-highlight">20</span> %</p>
		<p>Lövedék ellenállás: <span class="mob-highlight">20</span> %</p>
		<p>Robbanás ellenállás: <span class="mob-highlight">20</span> %</p>
		<p>Tűz ellenállás: <span class="mob-highlight">55</span> %</p>
		<p>Zuhanás ellenállás: <span class="mob-highlight">70</span> %</p>
		<h3><u>Extra</u>:</h3>
		<br>
		<p>Kard ellenállás: <span class="mob-highlight">30</span> %</p>
	</div>
</div>

<table class="mob-drops">
	<tr>
		<td>
			<h3>Drop:</h3>
		</td>
		<td>
			<h3>Tárgyak:</h3>
		</td>
	</tr>
	<tr>
		<td>
			<p>Szociális kredit: <span class="mob-highlight">1</span></p>
			<p>Exp: <span class="mob-highlight">2.5</span></p>
			<p>Pénz: <span class="mob-highlight">10-40</span></p>
		</td>
		<td>
			<p id="item-drops" class="mob-highlight"></p>
		</td>
	</tr>
</table>

<table>
	<tr>
		<td>
			<h3>Egyéb:</h3>
		</td>
	</tr>
	<tr>
		<td>
			<ul>
				<li>Sokkal kisebb eséllyel dob csontot és nyilat, mint a vanilla skeleton.</li>
				<li>Nem dobja ki a felszerelését; íjat sem.</li>
				<li>Véletlenszerűen enchantolt felszereléssel spawnol.</li>
			</ul>
		</td>
	</tr>
</table>


<script>
	itemDrops = ["Csont", "Nyíl", "Aranyalma"];
</script>
<script src="/assets/script/links.js"></script>
<script src="/assets/script/mob_item_link.js"></script>
