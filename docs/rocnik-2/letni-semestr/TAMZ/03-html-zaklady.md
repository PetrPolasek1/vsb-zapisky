---
title: HTML základy
sidebar_label: HTML základy
sidebar_position: 3
---

# HTML základy

### Struktura HTML dokumentu

Základní HTML dokument:

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Název stránky</title>
</head>
<body>
  <h1>Nadpis</h1>
  <p>Text stránky.</p>
</body>
</html>
```

Význam částí:

- `<!DOCTYPE html>` říká, že dokument používá HTML5,
- `html` je kořenový element,
- `head` obsahuje metadata,
- `body` obsahuje viditelný obsah stránky.

### HTML elementy a atributy

HTML element má obvykle počáteční a koncovou značku:

```html
<p>Odstavec textu</p>
```

Element může mít atributy:

```html
<a href="https://example.com">Odkaz</a>
```

Atribut `href` zde určuje cíl odkazu.

### Základní HTML tagy

```html
<h1>Hlavní nadpis</h1>
<h2>Podnadpis</h2>
<p>Odstavec</p>
<strong>Důležitý text</strong>
<em>Zvýrazněný text</em>
<a href="https://example.com">Odkaz</a>
<img src="image.png" alt="Popis obrázku">
```

### Seznamy

Nečíslovaný seznam:

```html
<ul>
  <li>První položka</li>
  <li>Druhá položka</li>
</ul>
```

Číslovaný seznam:

```html
<ol>
  <li>První krok</li>
  <li>Druhý krok</li>
</ol>
```

### Formuláře

Formuláře slouží ke vstupu dat od uživatele.

```html
<form action="/submit" method="post">
  <label for="email">E-mail:</label>
  <input id="email" name="email" type="email">

  <button type="submit">Odeslat</button>
</form>
```

Důležité atributy:

- `action` – kam se data odesílají,
- `method` – způsob odeslání, například `GET` nebo `POST`,
- `name` – jméno hodnoty odesílané na server,
- `type` – typ vstupu.

---
