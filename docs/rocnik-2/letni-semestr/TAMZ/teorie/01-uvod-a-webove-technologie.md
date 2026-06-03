---
title: Úvod a webové technologie
sidebar_label: 1. Úvod a web
sidebar_position: 1
---

# Úvod a webové technologie

Tato stránka spojuje základní témata z úvodu do TAMZ I, OTA distribuce, HTML, CSS a JavaScriptu. Cílem je mít jednu souvislou stránku místo několika krátkých poznámek.

## Co je cílem TAMZ I

Předmět TAMZ I se zaměřuje na tvorbu aplikací pro mobilní zařízení pomocí webových technologií. Nejde primárně o nativní Android nebo iOS vývoj, ale o vývoj pomocí HTML, CSS, JavaScriptu, HTML5 API a případně hybridních frameworků.

Hlavní oblasti:

- specifika mobilních zařízení,
- HTML, CSS a JavaScript,
- DOM/BOM a práce s prohlížečem,
- síťová komunikace,
- grafika, Canvas, SVG a jednoduché hry,
- senzory a orientace zařízení,
- Cordova a hybridní aplikace,
- datové formáty,
- optimalizace a bezpečnost klientského kódu.

## Mobilní zařízení

Mobilní zařízení je malé přenosné výpočetní zařízení, typicky s vlastním displejem, vstupním rozhraním a často i senzory. Nemusí jít pouze o telefon.

Příklady:

- smartphone,
- tablet,
- handheld konzole,
- navigace,
- chytré hodinky,
- IoT zařízení,
- monitorovací zařízení,
- fotoaparáty nebo jiná přenosná elektronika.

Při návrhu aplikací pro mobilní zařízení je potřeba počítat s omezeními, která u desktopu nebývají tak výrazná: menší displej, dotykové ovládání, proměnlivé připojení, menší výkon, baterie, rozdílné prohlížeče a různé velikosti obrazovek.

## OTA – Over-the-Air programming

OTA znamená instalaci nebo aktualizaci softwaru bez fyzického připojení zařízení k počítači. Software se do zařízení dostane přes síť, typicky přes mobilní data nebo Wi‑Fi.

Použití OTA:

- aktualizace operačního systému,
- aktualizace aplikací,
- aktualizace firmware,
- distribuce konfiguračních souborů,
- změna operátorských nastavení,
- aktualizace SIM aplikací nebo certifikátů.

Na moderních platformách se často používají inkrementální aktualizace, kdy se nestahuje celý systém, ale pouze rozdíly proti aktuální verzi. U aplikací se OTA princip používá například při aktualizacích přes obchod s aplikacemi nebo při načítání webové aplikace ze serveru.

## Webová aplikace ze serveru

U webové aplikace se HTML, CSS, JavaScript a další zdroje stahují ze serveru do prohlížeče. To je výhodné, protože změnu aplikace stačí provést na serveru. Zároveň to ale přináší problémy s cache a verzemi souborů.

Důležité body:

- prohlížeč může používat starší verzi souboru z cache,
- změna jednoho souboru může být nekompatibilní se starou verzí jiného souboru,
- aplikace může částečně fungovat offline,
- změny lze řídit pomocí HTTP hlaviček jako `ETag` nebo `If-Modified-Since`,
- u častých změn je potřeba řešit verzování souborů.

## HTML dokument

HTML dokument tvoří strukturu stránky. Základní kostra vypadá takto:

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Název stránky</title>
</head>
<body>
  <h1>Nadpis</h1>
  <p>Text stránky.</p>
</body>
</html>
```

Význam částí:

- `<!DOCTYPE html>` určuje HTML5 dokument,
- `html` je kořenový element,
- `head` obsahuje metadata, titulky a odkazy na styly/skripty,
- `body` obsahuje viditelný obsah stránky.

## Základní HTML prvky

Nejčastější prvky:

```html
<h1>Hlavní nadpis</h1>
<h2>Podnadpis</h2>
<p>Odstavec textu</p>
<strong>Důležitý text</strong>
<em>Zvýrazněný text</em>
<a href="https://example.com">Odkaz</a>
<img src="image.png" alt="Popis obrázku">
```

Seznamy:

```html
<ul>
  <li>První položka</li>
  <li>Druhá položka</li>
</ul>

<ol>
  <li>První krok</li>
  <li>Druhý krok</li>
</ol>
```

## HTML5 formuláře

HTML5 rozšířilo formuláře o nové typy vstupů a atributy. Pro mobilní zařízení jsou důležité hlavně proto, že prohlížeč může zobrazit vhodnou klávesnici nebo ovládací prvek.

Příklady:

```html
<input type="email">
<input type="number">
<input type="range">
<input type="date">
<input type="time">
<input type="color">
<input type="url">
<input type="tel">
```

Užitečné atributy:

- `placeholder` – nápověda uvnitř pole,
- `required` – povinné pole,
- `min`, `max`, `step` – rozsah a krok,
- `pattern` – validace regulárním výrazem,
- `autocomplete` – automatické doplňování,
- `autofocus` – automatické zaměření prvku.

Příklad s `datalist`:

```html
<input list="browsers" name="browser">
<datalist id="browsers">
  <option value="Chrome">
  <option value="Firefox">
  <option value="Safari">
</datalist>
```

## CSS a selektory

CSS definuje vzhled stránky. JavaScript navíc používá CSS selektory při hledání prvků v DOM.

Základní selektory:

```css
*           /* všechny prvky */
p           /* všechny odstavce */
.class      /* prvky s třídou */
#id         /* prvek s konkrétním ID */
[type=text] /* prvky s atributem */
div span    /* span uvnitř divu */
div > span  /* přímý potomek */
div + span  /* první následující sourozenec */
```

Použití v JavaScriptu:

```js
const title = document.querySelector('#title');
const buttons = document.querySelectorAll('button.primary');
```

## JavaScript základy

JavaScript přidává stránce chování a interaktivitu. Používá se pro reakce na události, změny obsahu stránky, práci s formuláři, komunikaci se serverem a volání HTML5 API.

Doporučuje se zapnout striktní režim:

```js
'use strict';
```

Základní proměnné:

```js
let name = 'Petr';
const year = 2026;
let active = true;
```

Funkce:

```js
function add(a, b) {
  return a + b;
}

const multiply = (a, b) => a * b;
```

Podmínky:

```js
if (navigator.onLine) {
  console.log('Jsme online');
} else {
  console.log('Jsme offline');
}
```

## Mobilní UI

U mobilního UI je potřeba dbát na jednoduchost a ovladatelnost. Tlačítka musí být dostatečně velká, stránka musí být responzivní a aplikace by měla počítat s dotykovým ovládáním.

Důležité zásady:

- jednoduchá navigace,
- velké klikací plochy,
- minimum zbytečného textu v rozhraní,
- přizpůsobení různým šířkám displeje,
- správné formulářové typy pro mobilní klávesnice,
- rychlé načítání a nízká datová náročnost.
