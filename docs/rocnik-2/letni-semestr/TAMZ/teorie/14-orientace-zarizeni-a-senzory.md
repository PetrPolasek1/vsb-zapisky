---
title: Orientace zařízení a senzory
sidebar_label: Orientace zařízení a senzory
---

# Orientace zařízení a senzory

### Souřadnicový systém zařízení

Mobilní zařízení má definované osy:

- osa `x` – v rovině displeje směrem doprava,
- osa `y` – v rovině displeje směrem nahoru,
- osa `z` – kolmo ven z displeje.

Rotace:

- `alpha` – rotace kolem osy `z`,
- `beta` – rotace kolem osy `x`,
- `gamma` – rotace kolem osy `y`.

### DeviceOrientationEvent

Událost `deviceorientation` poskytuje orientaci zařízení.

```js
window.addEventListener("deviceorientation", event => {
  console.log("alpha", event.alpha);
  console.log("beta", event.beta);
  console.log("gamma", event.gamma);
});
```

Hodnoty:

- `alpha` obvykle rozsah 0 až 360 stupňů,
- `beta` přibližně -180 až 180 stupňů,
- `gamma` přibližně -90 až 90 stupňů.

### DeviceMotionEvent

Událost `devicemotion` poskytuje informace o pohybu.

```js
window.addEventListener("devicemotion", event => {
  console.log(event.acceleration);
  console.log(event.accelerationIncludingGravity);
  console.log(event.rotationRate);
});
```

Obsahuje:

- `acceleration` – zrychlení bez gravitace,
- `accelerationIncludingGravity` – zrychlení včetně gravitace,
- `rotationRate` – rychlost rotace,
- `interval` – interval měření.

### Použití senzorů

Senzory lze použít pro:

- hry ovládané náklonem,
- kompas,
- krokoměr,
- měření pohybu,
- detekci otočení zařízení,
- rozšířenou realitu.

### Omezení

Podpora senzorů není vždy jednotná.

Problémy:

- různé chování prohlížečů,
- potřeba oprávnění,
- omezení na HTTPS,
- rozdílná přesnost senzorů,
- experimentální nebo částečná podpora.

---
