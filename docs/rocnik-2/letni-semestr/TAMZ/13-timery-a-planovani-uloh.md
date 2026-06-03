---
title: Timery a plánování úloh
sidebar_label: Timery a plánování úloh
sidebar_position: 13
---

# Timery a plánování úloh

### Proč používat timery

JavaScript v prohlížeči typicky nemá klasická background vlákna pro běžný kód. Pokud chceme něco spouštět později nebo opakovaně, používáme timery.

Použití:

- hodiny,
- periodická kontrola zpráv,
- animace,
- polling stavu,
- opakované překreslení hry,
- timeout při chybě komunikace.

### setTimeout

`setTimeout` spustí funkci jednou po zadaném zpoždění.

```js
const id = setTimeout(() => {
  console.log("Spuštěno po 1 sekundě");
}, 1000);
```

Zrušení:

```js
clearTimeout(id);
```

### setInterval

`setInterval` spouští funkci opakovaně v pravidelném intervalu.

```js
const id = setInterval(() => {
  console.log("Každou sekundu");
}, 1000);
```

Zrušení:

```js
clearInterval(id);
```

### Fixed-rate plánování

Fixed-rate znamená, že se funkce spouští podle pevného intervalu.

```js
setInterval(update, 1000);
```

Vhodné například pro kontrolu stisknutých kláves.

### Fixed-delay plánování

Fixed-delay znamená, že další spuštění se naplánuje až po dokončení aktuální úlohy.

```js
function loop() {
  doWork();
  setTimeout(loop, 1000);
}

setTimeout(loop, 1000);
```

Výhoda je, že se úlohy nehromadí, pokud jedna trvá déle.

### Poznámky k přesnosti timerů

Timery nejsou dokonale přesné. Prohlížeč může zpoždění upravit například kvůli:

- zatížení CPU,
- neaktivní záložce,
- úspoře baterie,
- minimálnímu časovému rozlišení.

Pro plynulé animace je často lepší použít `requestAnimationFrame`.

```js
function animate() {
  update();
  draw();
  requestAnimationFrame(animate);
}

requestAnimationFrame(animate);
```

---
