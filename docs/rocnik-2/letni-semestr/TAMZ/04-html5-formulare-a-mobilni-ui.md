---
title: HTML5 formuláře a mobilní UI
sidebar_label: HTML5 formuláře a mobilní UI
sidebar_position: 4
---

# HTML5 formuláře a mobilní UI

### Nové input typy

HTML5 přidalo několik typů vstupních polí, které jsou důležité hlavně na mobilních zařízeních, protože podle typu může prohlížeč zobrazit vhodnou klávesnici nebo ovládací prvek.

Příklady:

```html
<input type="email">
<input type="number">
<input type="range">
<input type="date">
<input type="time">
<input type="color">
<input type="url">
<input type="tel">
<input type="search">
```

Výhody:

- lepší validace,
- lepší mobilní klávesnice,
- jednodušší zadávání dat,
- nativní ovládací prvky podle platformy.

### Užitečné atributy formulářů

```html
<input
  type="number"
  min="1"
  max="10"
  step="1"
  placeholder="Zadej číslo"
  required
>
```

Důležité atributy:

- `placeholder` – nápověda v poli,
- `required` – povinné pole,
- `min`, `max` – minimální a maximální hodnota,
- `step` – krok hodnoty,
- `pattern` – regulární výraz pro validaci,
- `autocomplete` – automatické doplňování,
- `autofocus` – automatické zaměření prvku,
- `list` – napojení na `datalist`.

### Datalist

`datalist` nabízí předpřipravené možnosti, ale uživatel může zadat i vlastní hodnotu.

```html
<input list="browsers" name="browser">

<datalist id="browsers">
  <option value="Chrome">
  <option value="Firefox">
  <option value="Safari">
  <option value="Opera">
</datalist>
```

### Output

Element `output` slouží pro zobrazení výsledku výpočtu nebo akce.

```html
<form oninput="result.value = Number(a.value) + Number(b.value)">
  <input type="number" id="a" value="1">
  <input type="number" id="b" value="2">
  <output name="result"></output>
</form>
```

### Mobilní UI principy

Při návrhu mobilního UI je důležité:

- používat dostatečně velká tlačítka,
- minimalizovat množství textu na obrazovce,
- podporovat dotykové ovládání,
- počítat s rotací zařízení,
- nepředpokládat přesné klikání myší,
- dělat layout responzivní,
- vyhnout se příliš složité navigaci.

---
