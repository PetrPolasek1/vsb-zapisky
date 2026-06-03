---
title: Web services
sidebar_label: Web services
---

# Web services

### Co jsou webové služby

Webová služba umožňuje aplikacím komunikovat přes síť. Klient odešle požadavek a server vrátí odpověď.

Typický průběh:

1. klient vytvoří HTTP request,
2. server request zpracuje,
3. server vrátí data,
4. klient data zpracuje a zobrazí.

### REST princip

REST API typicky používá HTTP metody:

- `GET` pro čtení,
- `POST` pro vytvoření,
- `PUT` nebo `PATCH` pro úpravu,
- `DELETE` pro smazání.

Příklad endpointů:

```txt
GET    /api/users
GET    /api/users/1
POST   /api/users
PUT    /api/users/1
DELETE /api/users/1
```

### Mobilní specifika komunikace

Mobilní aplikace musí počítat s tím, že síť může být:

- pomalá,
- drahá,
- nestabilní,
- nedostupná,
- s vysokou latencí.

Doporučení:

- minimalizovat množství přenesených dat,
- používat cache,
- ošetřit chyby,
- zobrazovat loading stav,
- nepředpokládat okamžitou odpověď,
- umožnit opakování požadavku,
- validovat data ze serveru.

---
