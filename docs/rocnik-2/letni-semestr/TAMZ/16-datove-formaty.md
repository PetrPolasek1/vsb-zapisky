---
title: Datové formáty
sidebar_label: Datové formáty
sidebar_position: 16
---

# Datové formáty

### Proč řešit datové formáty

Mobilní aplikace často komunikují se serverem nebo jinou aplikací. Data proto musí být předávána ve formátu, kterému obě strany rozumí.

Běžné formáty:

- HTML,
- JSON,
- XML,
- CSV,
- vCard,
- MECARD,
- iCalendar,
- ATOM.

### JSON

JSON je dnes velmi častý formát pro webová API.

Příklad:

```json
{
  "name": "Petr",
  "score": 42,
  "active": true
}
```

Výhody:

- jednoduchý,
- dobře čitelný,
- přirozeně použitelný v JavaScriptu,
- menší než XML,
- vhodný pro REST API.

### CSV

CSV je jednoduchý tabulkový formát.

```csv
name,score
Petr,42
Anna,38
```

Výhody:

- jednoduchý,
- čitelný v tabulkových programech,
- vhodný pro exporty.

Nevýhody:

- slabá struktura,
- horší práce se složitými daty,
- problémy s oddělovači a escapováním.

### vCard a MECARD

vCard slouží pro ukládání kontaktů.

MECARD se používá často ve spojení s QR kódy pro rychlé předání kontaktních údajů.

### iCalendar

iCalendar slouží pro předávání kalendářových událostí. Nesmí se plést s aplikací Apple iCal.

Použití:

- události,
- schůzky,
- pozvánky,
- kalendářové exporty.

---
