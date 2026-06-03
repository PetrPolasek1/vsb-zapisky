---
title: DOM, BOM a JavaScript v prohlížeči
sidebar_label: 2. DOM, BOM a JS
sidebar_position: 2
---

# DOM, BOM a JavaScript v prohlížeči

Tato kapitola spojuje Browser Object Model, Document Object Model, práci s událostmi a časovače. Jde o hlavní část JavaScriptu používanou při vývoji webových a hybridních mobilních aplikací.

## BOM – Browser Object Model

BOM představuje objekty prohlížeče. Nejdůležitější objekt je `window`, který reprezentuje okno prohlížeče. Přes něj jsou dostupné další objekty:

- `document` – aktuální HTML dokument,
- `history` – historie prohlížeče,
- `location` – aktuální URL,
- `navigator` – informace o prohlížeči a zařízení,
- `screen` – informace o obrazovce.

Příklady vlastností okna:

```js
window.innerWidth
window.innerHeight
window.outerWidth
window.outerHeight
window.pageXOffset
window.pageYOffset
```

Příklady metod:

```js
alert('Zpráva');
confirm('Opravdu pokračovat?');
prompt('Zadej hodnotu:');
print();
```

## `navigator`

Objekt `navigator` poskytuje informace o prohlížeči, jazyku a stavu připojení.

```js
navigator.userAgent
navigator.language
navigator.onLine
navigator.cookieEnabled
```

`navigator.onLine` říká, jestli je prohlížeč podle svých informací online. Není to absolutní záruka funkčního internetu, ale pro jednoduchou detekci se hodí.

## `location`

Objekt `location` obsahuje aktuální adresu stránky.

```js
location.href
location.protocol
location.hostname
location.pathname
location.search
location.hash
```

Příklad přesměrování:

```js
location.href = 'https://example.com';
```

## `history`

Objekt `history` umožňuje práci s historií prohlížeče.

```js
history.back();
history.forward();
```

U moderních webových aplikací lze historii upravovat i přes History API, aby aplikace působila jako vícestránková, i když se obsah mění JavaScriptem.

## DOM – Document Object Model

DOM reprezentuje HTML dokument jako strom objektů. Každý element stránky je uzel, se kterým lze v JavaScriptu pracovat.

DOM umožňuje:

- hledat prvky,
- měnit text a HTML,
- měnit atributy,
- měnit CSS,
- vytvářet a mazat prvky,
- registrovat události.

Výběr prvků:

```js
const title = document.getElementById('title');
const firstButton = document.querySelector('button');
const allItems = document.querySelectorAll('li');
```

Změna textu:

```js
document.querySelector('#title').textContent = 'Nový nadpis';
```

Změna HTML:

```js
document.querySelector('#box').innerHTML = '<strong>Ahoj</strong>';
```

Změna atributu:

```js
const img = document.querySelector('img');
img.setAttribute('alt', 'Popis obrázku');
```

Změna stylu:

```js
const box = document.querySelector('.box');
box.style.display = 'none';
```

## Vytváření prvků

```js
const li = document.createElement('li');
li.textContent = 'Nová položka';

document.querySelector('ul').appendChild(li);
```

Mazání prvku:

```js
const item = document.querySelector('.old');
item.remove();
```

## Události

Události umožňují reagovat na akce uživatele nebo prohlížeče.

Příklad kliknutí:

```js
const button = document.querySelector('button');

button.addEventListener('click', () => {
  console.log('Kliknuto');
});
```

Časté události:

- `click` – kliknutí,
- `input` – změna hodnoty inputu,
- `submit` – odeslání formuláře,
- `keydown` – stisk klávesy,
- `keyup` – uvolnění klávesy,
- `load` – načtení,
- `resize` – změna velikosti okna.

Formulář:

```js
const form = document.querySelector('form');

form.addEventListener('submit', event => {
  event.preventDefault();
  console.log('Formulář odeslán');
});
```

## Klávesnice, myš a dotyk

Klávesnice:

```js
document.addEventListener('keydown', event => {
  console.log(event.key);
});
```

Myš:

```js
element.addEventListener('mousedown', onDown);
element.addEventListener('mousemove', onMove);
element.addEventListener('mouseup', onUp);
```

Dotykové události:

```js
element.addEventListener('touchstart', onTouchStart);
element.addEventListener('touchmove', onTouchMove);
element.addEventListener('touchend', onTouchEnd);
```

## Pointer events

Pointer events sjednocují myš, dotyk i stylus. Jsou vhodné pro mobilní aplikace, protože nemusíme psát zvlášť obsluhu pro myš a dotyk.

```js
element.addEventListener('pointerdown', event => {
  console.log(event.pointerType);
});
```

Důležité události:

- `pointerdown`,
- `pointermove`,
- `pointerup`,
- `pointercancel`,
- `pointerenter`,
- `pointerleave`.

## Timery

JavaScript v prohlížeči nemá klasická vlákna pro jednoduché opakované úlohy. Proto se používají časovače.

### `setTimeout`

Spustí funkci jednou po zadaném čase.

```js
const id = setTimeout(() => {
  console.log('Spuštěno po 1 sekundě');
}, 1000);

clearTimeout(id);
```

### `setInterval`

Spouští funkci opakovaně.

```js
const id = setInterval(() => {
  console.log('Každou sekundu');
}, 1000);

clearInterval(id);
```

## Fixed-rate vs fixed-delay

`setInterval` odpovídá spíš fixed-rate stylu, kdy se volání plánuje pravidelně podle intervalu. Pro úlohy, které mohou trvat delší dobu, je často bezpečnější fixed-delay, kdy se další běh naplánuje až po dokončení předchozího.

```js
function loop() {
  doWork();
  setTimeout(loop, 1000);
}

setTimeout(loop, 1000);
```

Fixed-delay je vhodný například při periodickém dotazování serveru, aby se requesty nehromadily.

## Rychlý tahák

```js
const el = document.querySelector('#id');
el.textContent = 'Hello';

el.addEventListener('click', () => {
  console.log('Clicked');
});

setTimeout(() => {
  console.log('Později');
}, 1000);

setInterval(() => {
  console.log('Opakovaně');
}, 1000);
```
