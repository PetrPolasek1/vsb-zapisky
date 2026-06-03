---
title: Minifikace a obfuskace
sidebar_label: Minifikace a obfuskace
sidebar_position: 20
---

# Minifikace a obfuskace

### Minifikace

Minifikace zmenšuje velikost souboru odstraněním nepotřebných znaků.

Odstraňuje například:

- mezery,
- nové řádky,
- komentáře,
- dlouhé názvy tam, kde je lze zkrátit.

Příklad před minifikací:

```js
function calculateScore(player) {
  return player.points * 2;
}
```

Po minifikaci:

```js
function calculateScore(e){return e.points*2}
```

Výhody:

- menší soubory,
- rychlejší načítání,
- menší přenos dat,
- lepší výkon při prvním načtení.

### Obfuskace

Obfuskace se snaží udělat kód méně čitelný.

Příklad:

```js
function calculateScore(player) {
  return player.points * 2;
}
```

může být převedeno na:

```js
function a(b){return b.c*2}
```

Cíle:

- ztížit reverzní inženýrství,
- ztížit pochopení logiky,
- někdy také zmenšit velikost kódu.

### Shrinking, optimization, obfuscation

Obfuskátory často dělají tři věci:

1. **Shrinking** – odstranění nepoužitého kódu.
2. **Optimization** – zmenšení nebo zefektivnění kódu.
3. **Obfuscation** – přejmenování a úprava kódu tak, aby byl méně čitelný.

### Důležité bezpečnostní upozornění

Obfuskace není skutečné zabezpečení. Klientský JavaScript je uživateli dostupný. Citlivá data a důležitá logika musí být na serveru, ne pouze v klientské aplikaci.

---
