---
title: Rychlé doučení před testem
sidebar_label: 6. Rychlé doučení
sidebar_position: 6
---

# TAMZ I – rychlé doučení před testem

Tento soubor je zaměřený na poslední mezery, které se objevily ve tvých tréninkových testech i ve starších papírových okruzích.

---

## 1. Problém → správné API

| Problém v zadání | Správné API / technologie |
|---|---|
| REST komunikace se serverem | `fetch()` |
| Načíst JSON ze serveru | `fetch()` + `response.json()` |
| Načíst text ze serveru | `fetch()` + `response.text()` |
| Import lokálního JSON souboru | `<input type="file">` + File API + `FileReader` + `JSON.parse()` |
| Větší lokální strukturovaná data | `IndexedDB` |
| Jednoduchá dlouhodobá hodnota | `localStorage` |
| Hodnota jen po dobu otevřené záložky | `sessionStorage` |
| Offline režim | PWA + Service Worker + Cache API |
| Obousměrná realtime komunikace | WebSocket |
| Server posílá notifikace klientovi | EventSource / Server-Sent Events |
| 2D kreslení / hra | Canvas |
| Vektorová grafika | SVG |
| Nativní funkce mobilu přes pluginy | Cordova / Capacitor |
| Regex validace inputu | `pattern` |
| E-mail přes URI | `mailto:` |

---

## 2. Fetch API

### GET JSON

```js
async function loadData() {
  const response = await fetch("https://example.com/api/data");

  if (!response.ok) {
    throw new Error("HTTP error: " + response.status);
  }

  const data = await response.json();
  return data;
}
```

### GET textu

```js
async function loadMessage() {
  const response = await fetch("https://example.com/api/message");

  if (response.status < 400) {
    const text = await response.text();
    console.log(text);
  } else {
    console.error("Failed:", response.statusText);
  }
}
```

### POST JSON

```js
async function saveData(data) {
  const response = await fetch("https://example.com/api/items", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });

  if (!response.ok) {
    throw new Error("Save failed: " + response.status);
  }

  return await response.json();
}
```

### Co si pamatovat

```txt
fetch() vrací Promise.
Výsledkem je objekt Response.
HTTP chyba 404 sama o sobě nevyhodí výjimku.
Musím kontrolovat response.ok nebo response.status.
JSON čtu přes response.json().
Text čtu přes response.text().
```

---

## 3. File API a FileReader

Používá se pro soubory vybrané uživatelem.

```html
<input type="file" id="fileInput">
```

### Import JSON souboru

```js
function importJson(inputId) {
  const input = document.getElementById(inputId);
  const file = input.files[0];

  if (!file) {
    console.error("No file selected");
    return;
  }

  const reader = new FileReader();

  reader.onload = event => {
    try {
      const text = event.target.result;
      const data = JSON.parse(text);
      console.log("Imported:", data);
    } catch (error) {
      console.error("Invalid JSON:", error);
    }
  };

  reader.onerror = error => {
    console.error("Read failed:", error);
  };

  reader.readAsText(file);
}
```

### Co si pamatovat

```txt
input.files[0] = první vybraný soubor
new FileReader() = čtení souboru
reader.onload = po načtení
event.target.result = obsah souboru
reader.readAsText(file) = načtení jako text
JSON.parse(text) = převod JSON textu na objekt
```

Import lokálního JSON souboru **není** `fetch()`.

---

## 4. localStorage, sessionStorage, IndexedDB

### localStorage

```js
localStorage.setItem("theme", "dark");
const theme = localStorage.getItem("theme");
localStorage.removeItem("theme");
```

```txt
malé jednoduché hodnoty
data zůstávají po zavření prohlížeče
synchronní API
hodnoty jsou řetězce
```

Vhodné pro nastavení, jazyk, jednoduchý stav.

### sessionStorage

```js
sessionStorage.setItem("leaveAt", String(Date.now() + 60000));
const leaveAt = Number(sessionStorage.getItem("leaveAt"));
```

```txt
data žijí jen v rámci záložky/relace
po zavření záložky zmizí
synchronní API
```

Vhodné pro dočasný stav nebo čas vypršení relace.

### IndexedDB

```txt
větší strukturovaná data
asynchronní API
ukládá objekty
podporuje object stores a indexy
hodí se pro offline databázi
```

Vhodné pro kartičky, poznámky, úkoly, větší data, Blob, obrázky nebo audio metadata.

---

## 5. PWA, Service Worker a Cache API

### PWA

PWA je webová aplikace, která se může chovat podobně jako instalovatelná aplikace.

Používá:

```txt
Web App Manifest
Service Worker
Cache API
HTTPS
```

### Service Worker

```txt
skript běžící na pozadí
může zachytávat síťové požadavky
pomáhá s offline režimem
nemá přímý přístup k DOM
typicky vyžaduje HTTPS
```

### Cache API

```txt
ukládá zdroje a odpovědi
pomáhá načítat HTML/CSS/JS/obrázky/API odpovědi offline
```

---

## 6. WebSocket vs EventSource

### WebSocket

```txt
ws://example.com/socket
wss://example.com/socket
```

```txt
ws:// = nezabezpečený WebSocket
wss:// = zabezpečený WebSocket přes TLS
Na HTTPS stránce se má používat wss://, ne ws://.
```

Použití:

```txt
chat
hry
živé ovládání zařízení
obousměrná realtime komunikace
```

### EventSource / SSE

```js
const source = new EventSource("https://example.com/events");

source.onmessage = event => {
  console.log(event.data);
};
```

```txt
server posílá zprávy klientovi
server → klient
není plně obousměrné jako WebSocket
```

Použití: notifikace, live status, dashboard, logy.

---

## 7. CORS a same-origin policy

### Same-origin policy

```txt
Omezuje JavaScript tak, aby běžně četl data jen ze stejného originu.
Origin = protokol + doména + port.
```

### CORS

```txt
CORS problém vzniká, když JavaScript chce číst data z jiné origin.
CORS musí povolit server, ne klient.
```

Důležitá hlavička:

```txt
Access-Control-Allow-Origin
```

Příklad:

```txt
Access-Control-Allow-Origin: *
```

---

## 8. URI a mailto

### Obecné URI

```txt
scheme://host/path?query#fragment
```

Příklad:

```txt
https://example.com/api/users?active=true#top
```

### mailto URI

```txt
mailto:user@example.com
```

S předmětem a tělem:

```txt
mailto:user@example.com?subject=Test&body=Ahoj
```

Lze předat:

```txt
adresát
subject
body
cc
bcc
```

---

## 9. HTML inputy

### URL input

```html
<input type="url">
```

### Pattern

```html
<input type="url" pattern="https://.*">
```

`pattern` nastavuje regulární výraz pro validaci hodnoty.

---

## 10. DOM a selektory

```js
document.querySelector("#id")
document.querySelector(".class")
document.querySelectorAll(".class")
document.getElementById("id")
```

Časté selektory:

```js
document.querySelectorAll(".highlighted")
document.querySelectorAll("[lang|='cs']")
document.querySelectorAll('a[href^="https://"]')
document.querySelectorAll('input[type="file"]')
document.querySelectorAll("#choices ion-checkbox[name='choice']").length
document.querySelectorAll("#tasks .task").length
```

Změna obsahu:

```js
document.querySelector("#status").textContent = "Hotovo";
document.querySelector("#box").innerHTML = "<strong>Hotovo</strong>";
```

Vytvoření elementu:

```js
const li = document.createElement("li");
li.textContent = "Nová položka";
document.querySelector("#list").appendChild(li);
```

Event listener:

```js
document.querySelector("#button").addEventListener("click", () => {
  console.log("Klik");
});
```

---

## 11. Canvas

HTML:

```html
<canvas id="canvas" width="300" height="200"></canvas>
```

Vyčištění:

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.clearRect(0, 0, canvas.width, canvas.height);
```

Kružnice:

```js
ctx.beginPath();
ctx.arc(100, 100, 40, 0, 2 * Math.PI);
ctx.stroke();
```

Text:

```js
ctx.fillText("Ahoj", 100, 100);
```

Vzorová funkce:

```js
function drawCircleWithText(canvasId, x, y, radius, text) {
  const canvas = document.getElementById(canvasId);
  const ctx = canvas.getContext("2d");

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.beginPath();
  ctx.arc(x, y, radius, 0, 2 * Math.PI);
  ctx.stroke();

  ctx.fillText(text, x, y);
}
```

---

## 12. OTA a sandboxing

### OTA

OTA = Over-the-Air.

```txt
Instalace, aktualizace nebo konfigurace zařízení bez fyzického připojení kabelem.
```

Použití:

```txt
aktualizace OS
aktualizace aplikací
aktualizace firmware
konfigurace zařízení
operátorská nastavení
certifikáty / profily
```

### Sandboxing

```txt
Sandboxing = izolace aplikace nebo kódu.
```

Cíl:

```txt
bezpečnost
omezení přístupu k souborům
omezení přístupu k datům jiných aplikací
omezení přístupu k senzorům a systému
```

Příklad:

```txt
Webová stránka nemůže jen tak číst celý disk.
Mobilní aplikace běží odděleně od ostatních aplikací.
```

---

## 13. XML parsery

### Push parser

```txt
Parser posílá aplikaci události.
Příklad: SAX.
```

### Pull parser

```txt
Aplikace si sama říká o další část XML.
```

### Model parser

```txt
Načte celý dokument do stromového modelu.
Příklad: DOM parser.
```

---

## 14. WebSQL vs IndexedDB

```txt
WebSQL je starší/deprecated API založené na SQL databázi.
IndexedDB je modernější objektová databáze v prohlížeči.
IndexedDB ukládá objekty a podporuje indexy.
```

---

## 15. String vs StringBuffer / StringBuilder

```txt
String je immutable.
Při změně textu vzniká nová instance.
StringBuffer/StringBuilder je vhodnější pro časté skládání textu.
```

---

## 16. Úloha 9 – timer šablona

```js
let timerObj = {};
let timerStart = 0;
let timerTime = 0;
let timerIntervalId = null;

function setTimerLabel() {
  const elapsed = Math.floor((Date.now() - timerStart) / 1000);
  let remaining = timerTime - elapsed;

  if (remaining < 0) {
    remaining = 0;
  }

  if (remaining >= 60) {
    const min = Math.floor(remaining / 60);
    const sec = remaining % 60;

    timerObj.text = `${min}:${String(sec).padStart(2, "0")}`;
  } else {
    timerObj.text = String(remaining);
  }

  if (remaining <= 0) {
    clearInterval(timerIntervalId);
  }
}

function startTimerUpdate(timerTimeArg, timer, cancelID) {
  timerTime = timerTimeArg;
  timerObj = timer;
  timerStart = Date.now();

  setTimerLabel();

  timerIntervalId = setInterval(setTimerLabel, 1000);

  document.getElementById(cancelID).addEventListener("click", () => {
    clearInterval(timerIntervalId);
  });
}
```

---

## 17. Úloha 9 – autoLeave šablona

```js
let leaveTimerId = null;
let warningTimerId = null;

function autoLeave(timeout) {
  clearTimeout(leaveTimerId);
  clearTimeout(warningTimerId);

  const leaveAt = Date.now() + timeout * 1000;
  sessionStorage.setItem("leaveAt", String(leaveAt));

  leaveTimerId = setTimeout(() => {
    leave();
  }, timeout * 1000);

  if (timeout > 30) {
    warningTimerId = setTimeout(() => {
      if (confirm("Prodloužit relaci?")) {
        clearTimeout(leaveTimerId);
        autoLeave(timeout);
      }
    }, (timeout - 30) * 1000);
  }
}

window.addEventListener("load", () => {
  const leaveAt = Number(sessionStorage.getItem("leaveAt"));

  if (!leaveAt) {
    return;
  }

  const remaining = Math.ceil((leaveAt - Date.now()) / 1000);

  if (remaining <= 0) {
    leave();
  } else {
    autoLeave(remaining);
  }
});
```

---

## 18. Rychlý tahák na posledních 20 minut

```txt
File import = input type=file + FileReader + JSON.parse
REST = fetch
Realtime obousměrně = WebSocket
Server → klient = EventSource/SSE
Offline = Service Worker + Cache API
Větší lokální data = IndexedDB
Malé hodnoty = localStorage/sessionStorage
Canvas = getContext("2d"), clearRect, arc, fillText
Regex input = pattern
URL input = type="url"
E-mail URI = mailto:user@example.com?subject=...&body=...
CORS povoluje server přes Access-Control-Allow-Origin
Same-origin = protokol + doména + port
Touch events podporují multitouch
Pointer events sjednocují myš, dotyk, stylus
```
