---
title: XML
sidebar_label: XML
sidebar_position: 17
---

# XML

### Co je XML

XML je značkovací jazyk pro strukturovaná data. Je podobný HTML v tom, že používá značky, ale na rozdíl od HTML si formát značek definuje aplikace nebo standard.

Příklad XML:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<gpx creator="Example" version="1.1">
  <wpt lat="50.0000" lon="17.1717">
    <name>Sample point</name>
    <desc>Example GPS point</desc>
  </wpt>
</gpx>
```

### XML elementy a atributy

Element:

```xml
<name>Sample point</name>
```

Atribut:

```xml
<wpt lat="50.0000" lon="17.1717">
```

Elementy tvoří stromovou strukturu.

### Escapování v XML

Některé znaky musí být escapované.

| Znak | Escape |
|---|---|
| `&` | `&amp;` |
| `<` | `&lt;` |
| `>` | `&gt;` |
| `"` | `&quot;` |
| `'` | `&apos;` |

Příklad:

```xml
<cmt>Just a sample &amp; nothing more</cmt>
```

### DTD

DTD je starší způsob definice XML formátu.

Umožňuje definovat:

- povolené elementy,
- atributy,
- strukturu dokumentu.

Dnes je DTD považováno spíše za zastaralé.

### XML Schema

XML Schema je modernější způsob definice XML struktury.

Výhody:

- je samo zapsané v XML,
- podporuje datové typy,
- umožňuje přesnější validaci,
- definuje počet výskytů,
- umožňuje anotace a detailní pravidla.

### XML vs JSON

| Vlastnost | XML | JSON |
|---|---|---|
| Čitelnost | dobrá, ale verbose | velmi dobrá |
| Velikost | větší | menší |
| Typické použití | starší API, dokumenty, standardy | moderní webová API |
| Validace | DTD / XML Schema | JSON Schema |
| Práce v JS | složitější | přirozená |

---
