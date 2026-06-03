---
title: OTA, webové aplikace a načítání zdrojů
sidebar_label: OTA, webové aplikace a načítání zdrojů
sidebar_position: 2
---

# OTA, webové aplikace a načítání zdrojů

### OTA – Over-the-Air programming

OTA znamená instalaci, konfiguraci nebo aktualizaci softwaru bez nutnosti fyzicky připojit zařízení k počítači. Software se do zařízení dostane přes síť, typicky přes mobilní data nebo Wi-Fi.

Použití OTA:

- aktualizace operačního systému,
- aktualizace firmware,
- instalace a aktualizace aplikací,
- distribuce konfiguračních údajů,
- přenos šifrovacích klíčů,
- aktualizace SIM karet,
- nastavení operátorských služeb,
- záloha a obnova dat.

OTA se používá nejen pro samotné zařízení, ale v některých případech i pro SIM / UICC kartu.

### OTA v moderních systémech

Moderní mobilní platformy běžně podporují:

- kompletní aktualizace systému,
- inkrementální aktualizace,
- automatické aktualizace aplikací,
- instalaci aplikace spuštěnou vzdáleně například z webového obchodu,
- odstranění škodlivé aplikace objevené ve store,
- aktualizace nastavení mobilního operátora.

Kompletní aktualizace systému může být velmi velká. Inkrementální aktualizace přenáší pouze rozdíly, ale často vyžaduje, aby systém nebyl změněný.

### Webová aplikace jako OTA princip

U webových aplikací se zdroje jako HTML, CSS, JavaScript a obrázky načítají ze serveru. Když uživatel otevře stránku, prohlížeč stáhne aktuální verzi aplikace.

To má výhody:

- není potřeba ruční instalace,
- aktualizace se projeví na serveru,
- aplikaci lze snadno měnit,
- stejná aplikace může fungovat na více platformách.

Má to ale i nevýhody:

- aplikace závisí na dostupnosti sítě,
- cache může způsobit načtení starší verze,
- při častých změnách může dojít k nekonzistenci,
- některé zdroje mohou být načteny nové a jiné staré.

### Cache a aktualizace zdrojů

Prohlížeč může ukládat stažené soubory do cache. To zrychluje načítání, ale komplikuje aktualizace.

Důležité mechanismy:

- `ETag`,
- `If-Modified-Since`,
- cache hlavičky,
- verzování souborů,
- změna manifestu,
- nucené obnovení stránky.

Praktický příklad verzování souboru:

```html
<script src="app.js?v=2"></script>
<link rel="stylesheet" href="style.css?v=2">
```

Tím lze prohlížeči naznačit, že má stáhnout novou verzi zdroje.

---
