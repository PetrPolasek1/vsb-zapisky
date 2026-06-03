---
title: CSS a selektory
sidebar_label: CSS a selektory
---

# CSS a selektory

### Základní CSS selektory

CSS selektory se používají pro stylování, ale také v JavaScriptu pro hledání prvků pomocí `querySelector` a `querySelectorAll`.

```css
p { color: black; }
.title { font-size: 24px; }
#main { padding: 1rem; }
```

Typy selektorů:

| Selektor | Význam |
|---|---|
| `*` | všechny prvky |
| `a` | všechny elementy `<a>` |
| `.class` | prvky s danou třídou |
| `#id` | prvek s daným ID |
| `[attribute]` | prvky s atributem |
| `[type="text"]` | prvky s atributem a hodnotou |
| `div span` | `span` uvnitř `div` |
| `div > span` | přímý potomek |
| `div + span` | první následující sourozenec |
| `div ~ span` | všichni následující sourozenci |

### JavaScript a selektory

```js
const title = document.querySelector("#title");
const buttons = document.querySelectorAll("button.primary");
```

`querySelector` vrací první odpovídající prvek.

`querySelectorAll` vrací seznam všech odpovídajících prvků.

### Atributové selektory

```css
input[type="email"] { }
a[href^="https"] { }
img[src$=".png"] { }
div[class*="card"] { }
```

Význam:

- `^=` začíná na hodnotu,
- `$=` končí na hodnotu,
- `*=` obsahuje hodnotu,
- `~=` obsahuje slovo.

---
