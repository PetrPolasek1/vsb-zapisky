---
title: DOM – Document Object Model
sidebar_label: DOM – Document Object Model
---

# DOM – Document Object Model

### Co je DOM

DOM reprezentuje HTML dokument jako strom objektů. Každý HTML element je uzel stromu, se kterým lze pracovat pomocí JavaScriptu.

DOM umožňuje:

- hledat prvky,
- měnit text,
- měnit atributy,
- měnit CSS třídy,
- vytvářet a mazat prvky,
- reagovat na události.

### Výběr prvků

```js
const byId = document.getElementById("main");
const firstButton = document.querySelector("button");
const allItems = document.querySelectorAll("li");
```

### Změna obsahu

```js
const title = document.querySelector("h1");
title.textContent = "Nový nadpis";
```

`textContent` je bezpečnější pro čistý text.

```js
title.innerHTML = "<span>Nový nadpis</span>";
```

`innerHTML` umožňuje vkládat HTML, ale může být nebezpečné, pokud obsah pochází od uživatele.

### Práce s třídami

```js
const box = document.querySelector(".box");

box.classList.add("active");
box.classList.remove("hidden");
box.classList.toggle("selected");
```

### Vytváření elementů

```js
const list = document.querySelector("ul");
const item = document.createElement("li");

item.textContent = "Nová položka";
list.appendChild(item);
```

---
