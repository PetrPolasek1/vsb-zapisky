---
title: Události pro hry a dotykové ovládání
sidebar_label: Události pro hry a dotykové ovládání
sidebar_position: 12
---

# Události pro hry a dotykové ovládání

### Klávesnicové události

```js
document.addEventListener("keydown", event => {
  console.log(event.key);
});

document.addEventListener("keyup", event => {
  console.log("released", event.key);
});
```

Typy:

- `keydown` – klávesa stisknuta,
- `keyup` – klávesa uvolněna,
- `keypress` – znaková událost, dnes méně doporučená.

### Myš

```js
canvas.addEventListener("mousedown", event => {});
canvas.addEventListener("mousemove", event => {});
canvas.addEventListener("mouseup", event => {});
canvas.addEventListener("click", event => {});
```

Typy:

- `mousedown`,
- `mousemove`,
- `mouseup`,
- `click`,
- `mousecancel`.

### Touch events

Na dotykových zařízeních se používají touch eventy.

```js
canvas.addEventListener("touchstart", event => {});
canvas.addEventListener("touchmove", event => {});
canvas.addEventListener("touchend", event => {});
canvas.addEventListener("touchcancel", event => {});
```

Touch event obsahuje seznamy dotyků:

- `touches`,
- `targetTouches`,
- `changedTouches`.

Každý dotyk může obsahovat:

- `pageX`, `pageY`,
- `screenX`, `screenY`,
- `clientX`, `clientY`,
- `target`,
- `identifier`.

### Pointer events

Pointer events sjednocují myš, stylus a dotyk.

```js
canvas.addEventListener("pointerdown", event => {});
canvas.addEventListener("pointermove", event => {});
canvas.addEventListener("pointerup", event => {});
```

Výhody:

- jednotné API,
- podpora více typů vstupu,
- informace o tlaku a typu pointeru.

Důležité vlastnosti:

- `pointerId`,
- `pointerType`,
- `isPrimary`,
- `pressure`,
- `width`, `height`,
- `tiltX`, `tiltY`.

---
