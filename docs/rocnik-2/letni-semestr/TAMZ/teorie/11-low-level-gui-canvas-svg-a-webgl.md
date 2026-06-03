---
title: Low-level GUI, Canvas, SVG a WebGL
sidebar_label: Low-level GUI, Canvas, SVG a WebGL
---

# Low-level GUI, Canvas, SVG a WebGL

### Proč low-level GUI

Každá mobilní platforma potřebuje způsob, jak kreslit grafiku přímo na displej nebo do části obrazovky. Webové aplikace k tomu v HTML5 používají několik technologií.

Základní možnosti:

| Technologie | Typ grafiky | Vlastnosti |
|---|---|---|
| Canvas | 2D rastrová grafika | bitmapa, vhodné pro hry |
| SVG | 2D vektorová grafika | škálovatelné, DOM prvky |
| WebGL | 3D grafika | renderování přes OpenGL ES |

### Canvas

Canvas je kreslicí plocha, do které se kreslí pomocí JavaScriptu. Výsledkem je bitmapa.

HTML:

```html
<canvas id="game" width="400" height="300"></canvas>
```

JavaScript:

```js
const canvas = document.querySelector("#game");
const ctx = canvas.getContext("2d");

ctx.fillRect(10, 10, 100, 50);
```

Canvas je vhodný pro:

- hry,
- animace,
- graficky náročné aplikace,
- dynamické překreslování.

Nevýhody:

- kresba není DOM strom,
- jednotlivé objekty nejsou samostatné elementy,
- horší přístupnost,
- výsledek závisí na rozlišení.

### SVG

SVG je vektorová grafika založená na XML.

Příklad:

```html
<svg width="200" height="100">
  <circle cx="50" cy="50" r="40" />
</svg>
```

Výhody:

- nezávislé na rozlišení,
- vhodné pro ikony, grafy a diagramy,
- prvky jsou součástí DOM,
- lze na ně registrovat události.

Nevýhody:

- pro složité scény může být pomalé,
- méně vhodné pro rychlé hry.

### WebGL

WebGL umožňuje kreslit 3D grafiku do canvasu pomocí API podobného OpenGL ES.

Použití:

- 3D scény,
- vizualizace,
- hry,
- graficky náročné efekty.

Nevýhoda je složitější API a odlišná podpora v různých prohlížečích / zařízeních.

---
