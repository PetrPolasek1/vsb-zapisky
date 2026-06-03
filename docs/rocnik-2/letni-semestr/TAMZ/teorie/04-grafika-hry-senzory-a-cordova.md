---
title: Grafika, hry, senzory a Cordova
sidebar_label: 4. Grafika, hry a senzory
sidebar_position: 4
---

# Grafika, hry, senzory a Cordova

Tato kapitola spojuje low-level GUI, Canvas, SVG, WebGL, vstupní události pro hry, orientaci zařízení, pohybové senzory a Apache Cordova.

## Low-level GUI

Mobilní platforma musí umožnit kreslit grafické prvky přímo na displej nebo do vybrané oblasti. V HTML5 se používají hlavně tři přístupy:

| Technologie | Typ grafiky | Vhodné pro |
|---|---|---|
| Canvas | rastrová 2D grafika | hry, animace, dynamické kreslení |
| SVG | vektorová 2D grafika | ikony, mapy, diagramy |
| WebGL | 3D grafika | 3D scény, pokročilá grafika |

## Canvas

Canvas je bitmapová kreslicí plocha ovládaná JavaScriptem.

```html
<canvas id="game" width="300" height="150"></canvas>
```

```js
const canvas = document.querySelector('#game');
const ctx = canvas.getContext('2d');

ctx.fillRect(10, 10, 100, 50);
```

Canvas je vhodný pro:

- hry,
- animace,
- simulace,
- dynamické překreslování,
- jednoduchou 2D grafiku.

Výhody:

- rychlé překreslování,
- jednoduché API,
- vhodné pro herní smyčku.

Nevýhody:

- výsledek je rastrový,
- jednotlivé objekty nejsou DOM prvky,
- složitější reakce na kliknutí do konkrétních tvarů,
- horší přístupnost.

## SVG

SVG je vektorová grafika založená na XML. Prvky SVG jsou součástí DOM, takže na ně lze navázat události a upravovat je podobně jako HTML prvky.

```html
<svg width="200" height="100">
  <circle cx="50" cy="50" r="30" />
</svg>
```

SVG je vhodné pro:

- ikony,
- grafy,
- diagramy,
- mapy,
- škálovatelnou grafiku.

Výhody:

- nezávislé na rozlišení,
- dobré pro statickou nebo méně dynamickou grafiku,
- prvky lze stylovat CSS,
- prvky lze ovládat JavaScriptem.

Nevýhody:

- u velkého počtu objektů může být pomalé,
- není ideální pro akční hry s častým překreslováním celé scény.

## WebGL

WebGL umožňuje vykreslovat 3D grafiku do canvasu pomocí API založeného na OpenGL ES. Používá se pro pokročilejší grafiku, 3D modely a efekty.

V běžných menších projektech se často nepoužívá přímo, ale přes knihovny jako Three.js.

## Herní smyčka

Jednoduchá hra potřebuje pravidelně:

1. zpracovat vstup,
2. aktualizovat stav hry,
3. překreslit scénu.

Jednoduchá smyčka:

```js
function loop() {
  update();
  draw();
  requestAnimationFrame(loop);
}

requestAnimationFrame(loop);
```

`requestAnimationFrame` je pro animace vhodnější než `setInterval`, protože se synchronizuje s překreslováním prohlížeče.

## Události pro ovládání her

Klávesnice:

```js
document.addEventListener('keydown', event => {
  console.log(event.key);
});

document.addEventListener('keyup', event => {
  console.log(event.key);
});
```

Myš:

```js
canvas.addEventListener('mousedown', onDown);
canvas.addEventListener('mousemove', onMove);
canvas.addEventListener('mouseup', onUp);
```

Dotyk:

```js
canvas.addEventListener('touchstart', onTouchStart);
canvas.addEventListener('touchmove', onTouchMove);
canvas.addEventListener('touchend', onTouchEnd);
```

Pointer events:

```js
canvas.addEventListener('pointerdown', event => {
  console.log(event.pointerType);
});
```

Pointer events jsou praktické, protože sjednocují myš, dotyk a stylus.

## Souřadnicový systém zařízení

Mobilní zařízení má tři osy:

- `x` – vodorovně po displeji doprava,
- `y` – svisle po displeji nahoru,
- `z` – kolmo ven z displeje.

Rotace:

- `alpha` – rotace kolem osy `z`,
- `beta` – rotace kolem osy `x`,
- `gamma` – rotace kolem osy `y`.

## `deviceorientation`

Událost poskytuje aktuální orientaci zařízení.

```js
window.addEventListener('deviceorientation', event => {
  console.log(event.alpha);
  console.log(event.beta);
  console.log(event.gamma);
});
```

Použití:

- kompas,
- ovládání hry náklonem,
- reakce na natočení zařízení,
- jednoduché experimenty se senzory.

Podpora se liší podle zařízení, prohlížeče a oprávnění.

## `devicemotion`

Událost poskytuje informace o pohybu zařízení.

Obsahuje například:

- `acceleration`,
- `accelerationIncludingGravity`,
- `rotationRate`,
- `interval`.

Příklad:

```js
window.addEventListener('devicemotion', event => {
  console.log(event.accelerationIncludingGravity);
});
```

Použití:

- detekce zatřesení,
- krokoměr,
- fyzikální hry,
- reakce na pohyb zařízení.

## Apache Cordova

Apache Cordova umožňuje vytvářet hybridní mobilní aplikace pomocí HTML, CSS a JavaScriptu. Aplikace běží ve WebView, ale přes pluginy může přistupovat k nativním funkcím zařízení.

Princip:

- UI je napsané ve webových technologiích,
- aplikace je zabalena jako mobilní aplikace,
- Cordova poskytuje bridge mezi JavaScriptem a nativním systémem,
- nativní funkce se používají přes pluginy.

Výhody:

- jeden základ kódu pro více platforem,
- webové technologie,
- rychlý start,
- možnost použít existující webovou aplikaci.

Nevýhody:

- výkon nemusí být jako u nativní aplikace,
- závislost na pluginech,
- rozdíly mezi platformami,
- složitější ladění některých problémů,
- WebView se může chovat jinak než běžný prohlížeč.

## Shrnutí

- Canvas je vhodný pro hry a dynamickou grafiku.
- SVG je vhodné pro škálovatelnou vektorovou grafiku.
- WebGL slouží pro pokročilou 3D grafiku.
- Pointer events sjednocují vstupy z myši, dotyku a stylusu.
- `deviceorientation` a `devicemotion` umožňují pracovat se senzory.
- Cordova umožňuje vytvářet hybridní mobilní aplikace z webového kódu.
