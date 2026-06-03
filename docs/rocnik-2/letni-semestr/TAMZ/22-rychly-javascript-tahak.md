---
title: Rychlý JavaScript tahák
sidebar_label: Rychlý JavaScript tahák
sidebar_position: 22
---

# Rychlý JavaScript tahák

### Výběr prvku

```js
const el = document.querySelector("#id");
```

### Výběr více prvků

```js
const items = document.querySelectorAll(".item");
```

### Změna textu

```js
el.textContent = "Nový text";
```

### Přidání třídy

```js
el.classList.add("active");
```

### Událost kliknutí

```js
el.addEventListener("click", () => {
  console.log("Klik");
});
```

### Timeout

```js
setTimeout(() => {
  console.log("Po 1 sekundě");
}, 1000);
```

### Interval

```js
setInterval(() => {
  console.log("Každou sekundu");
}, 1000);
```

### Canvas

```js
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

ctx.fillRect(10, 10, 100, 50);
```

### Device orientation

```js
window.addEventListener("deviceorientation", event => {
  console.log(event.alpha, event.beta, event.gamma);
});
```

### Device motion

```js
window.addEventListener("devicemotion", event => {
  console.log(event.accelerationIncludingGravity);
});
```

---
