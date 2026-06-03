---
title: Data, bezpečnost, optimalizace a tahák
autosidebar_label: 5. Data a bezpečnost
sidebar_label: 5. Data a bezpečnost
sidebar_position: 5
---

# Data, bezpečnost, optimalizace a tahák

Tato kapitola spojuje datové formáty, XML, webové služby, Subresource Integrity, minifikaci, obfuskaci a závěrečný tahák.

## Datové formáty

Mobilní a webové aplikace často komunikují se serverem nebo mezi sebou pomocí strukturovaných dat.

Časté formáty:

- HTML,
- JSON,
- XML,
- CSV,
- vCard,
- MECARD,
- iCalendar,
- ATOM feed.

## JSON

JSON je jednoduchý textový formát běžně používaný pro API.

```json
{
  "name": "Petr",
  "active": true,
  "points": 42
}
```

Výhody:

- jednoduchý,
- dobře se používá v JavaScriptu,
- menší než XML,
- vhodný pro REST API.

Práce v JavaScriptu:

```js
const text = JSON.stringify({ name: 'Petr' });
const obj = JSON.parse(text);
```

## CSV

CSV je jednoduchý formát pro tabulková data.

```csv
name,points
Petr,42
Anna,38
```

Výhody:

- jednoduché,
- dobře se otevírá v tabulkových programech,
- vhodné pro export/import.

Nevýhody:

- horší práce se složitou strukturou,
- nutnost řešit oddělovače a uvozovky,
- nehodí se pro vnořená data.

## XML

XML je značkovací jazyk pro strukturovaná data.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<wpt lat="50.0000" lon="17.1717">
  <name>Sample point</name>
  <desc>Example GPS point</desc>
</wpt>
```

Vlastnosti:

- hierarchická struktura,
- elementy a atributy,
- možnost validace,
- čitelné pro člověka i stroj,
- často delší než JSON.

## DTD a XML Schema

XML strukturu lze definovat pomocí DTD nebo XML Schema.

DTD:

- starší způsob,
- jednodušší,
- dnes spíše zastaralý.

XML Schema:

- XML-based definice struktury,
- podporuje datové typy,
- umožňuje detailnější validaci,
- modernější než DTD.

## Web services

Webová služba umožňuje aplikacím komunikovat přes síť. Typický postup:

1. klient odešle HTTP request,
2. server požadavek zpracuje,
3. server vrátí odpověď,
4. klient odpověď zpracuje.

Nejčastější formáty odpovědí:

- JSON,
- XML,
- HTML,
- CSV.

U mobilních aplikací je důležité:

- minimalizovat objem dat,
- ošetřit výpadky připojení,
- validovat data ze serveru,
- zobrazovat stav načítání,
- řešit cache.

## Subresource Integrity

Subresource Integrity slouží k ověření, že externě načtený JavaScript nebo CSS nebyl změněn. Používá se hlavně u souborů z CDN.

```html
<script
  src="https://cdn.example.com/library.js"
  integrity="sha512-..."
  crossorigin="anonymous">
</script>
```

Pokud hash nesedí, prohlížeč zdroj nenačte.

Důležité:

- hodí se pro externí knihovny,
- hash musí odpovídat přesnému obsahu souboru,
- není vhodné používat SRI s URL typu `latest`, protože obsah se může změnit.

## Minifikace

Minifikace zmenšuje velikost kódu. Odstraňuje mezery, komentáře a další nepotřebné znaky.

Původní kód:

```js
function add(a, b) {
  return a + b;
}
```

Minifikovaný kód:

```js
function add(a,b){return a+b}
```

Výhody:

- menší soubory,
- rychlejší načítání,
- menší datový přenos.

## Obfuskace

Obfuskace zhoršuje čitelnost kódu. Cílem je ztížit reverzní inženýrství.

Příklad:

```js
function calculateScore(player) {
  return player.points * 2;
}
```

může být převedeno na:

```js
function a(b){return b.c*2}
```

Obfuskace není skutečná bezpečnost. Citlivá logika, klíče a hesla nemají být pouze v klientském JavaScriptu.

## Co si pamatovat ke zkoušce

### HTML / CSS / JS

- struktura HTML dokumentu,
- základní tagy,
- formuláře a input typy,
- CSS selektory,
- JavaScript syntaxe,
- DOM manipulace,
- práce s událostmi.

### Browser API

- `window`,
- `document`,
- `navigator`,
- `location`,
- `history`,
- `setTimeout`,
- `setInterval`.

### Síť

- struktura URI,
- rozdíl mezi doménou, IP adresou a portem,
- TCP vs UDP,
- HTTP request/response,
- GET vs POST,
- stavové kódy.

### Grafika a hry

- Canvas vs SVG vs WebGL,
- herní smyčka,
- keyboard/mouse/touch/pointer events,
- `requestAnimationFrame`.

### Mobilní zařízení

- orientace zařízení,
- `deviceorientation`,
- `devicemotion`,
- hybridní aplikace,
- Apache Cordova.

### Data a bezpečnost

- JSON, XML, CSV,
- XML Schema vs DTD,
- web services,
- SRI,
- minifikace,
- obfuskace.

## Rychlý JavaScript tahák

```js
// Výběr prvku
const el = document.querySelector('#id');

// Změna textu
el.textContent = 'Hello';

// Událost
el.addEventListener('click', () => {
  console.log('Clicked');
});

// Timeout
setTimeout(() => {
  console.log('Po 1 sekundě');
}, 1000);

// Interval
setInterval(() => {
  console.log('Každou sekundu');
}, 1000);

// Fetch
const response = await fetch('/api/data');
const data = await response.json();

// Canvas
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
ctx.fillRect(10, 10, 100, 50);

// Device orientation
window.addEventListener('deviceorientation', event => {
  console.log(event.alpha, event.beta, event.gamma);
});
```
