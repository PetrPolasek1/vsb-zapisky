---
title: JavaScript základy
sidebar_label: JavaScript základy
---

# JavaScript základy

### Co je JavaScript

JavaScript je skriptovací jazyk používaný hlavně ve webových prohlížečích. Umožňuje přidat stránce interaktivitu.

Použití:

- reakce na kliknutí,
- validace formulářů,
- manipulace s HTML,
- komunikace se serverem,
- animace,
- práce s API prohlížeče,
- tvorba her a hybridních aplikací.

### Strict mode

Doporučuje se používat strict mode:

```js
"use strict";
```

Strict mode zpřísňuje pravidla jazyka a pomáhá odhalit chyby.

### Proměnné

Moderní JavaScript používá hlavně `let` a `const`.

```js
let counter = 0;
const appName = "TAMZ";
```

- `let` pro hodnoty, které se mění,
- `const` pro hodnoty, které se nepřiřazují znovu.

### Funkce

```js
function add(a, b) {
  return a + b;
}
```

Arrow funkce:

```js
const add = (a, b) => a + b;
```

### Události

Události umožňují reagovat na akce uživatele.

```js
const button = document.querySelector("button");

button.addEventListener("click", () => {
  console.log("Kliknuto");
});
```

---
