---
title: BOM – Browser Object Model
sidebar_label: BOM – Browser Object Model
---

# BOM – Browser Object Model

### Window

`window` reprezentuje okno prohlížeče. Je to globální objekt, přes který jsou dostupné další objekty prohlížeče.

Obsahuje například:

- `document`,
- `history`,
- `location`,
- `navigator`,
- `screen`,
- `frames`.

### Vlastnosti window

```js
window.innerWidth
window.innerHeight
window.outerWidth
window.outerHeight
window.screenX
window.screenY
window.pageXOffset
window.pageYOffset
```

Použití:

- zjištění velikosti okna,
- zjištění pozice scrollu,
- práce s okny a rámy.

### Metody window

```js
alert("Zpráva");
confirm("Opravdu pokračovat?");
prompt("Zadej jméno:");
```

Další metody:

```js
open();
close();
focus();
blur();
print();
stop();
scrollTo(0, 100);
setTimeout(fn, 1000);
setInterval(fn, 1000);
```

### Navigator

`navigator` poskytuje informace o prohlížeči a prostředí.

```js
navigator.userAgent
navigator.language
navigator.onLine
navigator.cookieEnabled
```

Použití:

- detekce jazyka,
- kontrola online/offline stavu,
- zjištění informací o prohlížeči.

Pozor: `userAgent` není spolehlivý bezpečnostní mechanismus. Prohlížeč ho může měnit nebo falšovat.

### Location

`location` reprezentuje aktuální URL.

```js
location.href
location.hostname
location.pathname
location.search
location.hash
```

Přesměrování:

```js
location.href = "https://example.com";
```

### History

`history` umožňuje pracovat s historií prohlížeče.

```js
history.back();
history.forward();
history.go(-1);
```

---
