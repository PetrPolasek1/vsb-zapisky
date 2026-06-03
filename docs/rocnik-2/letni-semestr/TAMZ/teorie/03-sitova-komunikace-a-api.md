---
title: Síťová komunikace a API
sidebar_label: 3. Síť a API
sidebar_position: 3
---

# Síťová komunikace a API

Tato kapitola spojuje URI, IP adresy, porty, TCP/UDP, HTTP a základní princip komunikace webové nebo mobilní aplikace se serverem.

## URI

URI identifikuje zdroj nebo akci. Obecný tvar:

```txt
<scheme>:<address+path>?<query>#<fragment>
```

Příklady:

```txt
http://server/path/file?x=1
mailto:user@example.com?subject=Test
sms:+420123456789?body=Ahoj
tel:+420123456789
javascript:alert('test')
```

Schéma (`http`, `mailto`, `sms`, `tel`) určuje, jak se má adresa zpracovat. V mobilním zařízení může URI spustit i jinou aplikaci, například telefon, SMS klient nebo e-mail.

## Identifikace zařízení v síti

Zařízení v síti může být identifikováno:

- doménovým jménem,
- IPv4 adresou,
- IPv6 adresou.

IPv4:

```txt
158.196.109.35
```

IPv6:

```txt
2001:718:1001:207::35
```

Doménové jméno je čitelnější pro člověka, IP adresa je konkrétní síťová adresa. Překlad domény na IP adresu řeší DNS.

## Porty

IP adresa určuje zařízení, port určuje konkrétní aplikaci nebo službu na zařízení.

Příklady:

```txt
HTTP  -> TCP/80
HTTPS -> TCP/443
```

Server může mít více služeb na jedné IP adrese, každá používá jiný port.

## TCP

TCP je spojovaný a spolehlivý protokol.

Vlastnosti:

- před komunikací se naváže spojení,
- data se potvrzují,
- zachovává se pořadí dat,
- ztracená data se přenášejí znovu,
- spojení se musí ukončit.

Používá se například pro HTTP, HTTPS nebo e-mailové protokoly.

## UDP

UDP je nespojovaný protokol.

Vlastnosti:

- nenavazuje spojení,
- neposkytuje záruku doručení,
- paket se může ztratit,
- paket může přijít později nebo v jiném pořadí,
- je jednodušší a rychlejší.

Používá se například pro streamování, hry, VoIP nebo DNS.

## HTTP

HTTP je aplikační protokol pro komunikaci mezi klientem a serverem. Klient pošle request, server vrátí response.

HTTP request:

```txt
METHOD /path HTTP/1.1
Header: value

body
```

HTTP response:

```txt
HTTP/1.1 200 OK
Header: value

body
```

## HTTP metody

Nejčastější metody:

- `GET` – získání dat,
- `POST` – odeslání dat,
- `PUT` – nahrazení nebo vytvoření zdroje,
- `DELETE` – smazání zdroje,
- `OPTIONS` – zjištění podporovaných možností.

Příklad použití:

```txt
GET /api/users HTTP/1.1
Host: example.com
```

```txt
POST /api/users HTTP/1.1
Content-Type: application/json

{"name":"Petr"}
```

## HTTP stavové kódy

Důležité skupiny:

- `2xx` – úspěch,
- `3xx` – přesměrování,
- `4xx` – chyba klienta,
- `5xx` – chyba serveru.

Příklady:

- `200 OK` – požadavek proběhl úspěšně,
- `301 Moved Permanently` – trvalé přesměrování,
- `400 Bad Request` – špatný požadavek,
- `401 Unauthorized` – chybí autorizace,
- `403 Forbidden` – přístup zakázán,
- `404 Not Found` – nenalezeno,
- `500 Internal Server Error` – chyba serveru.

## Komunikace z JavaScriptu

Moderní JavaScript používá `fetch`.

GET request:

```js
const response = await fetch('/api/items');
const data = await response.json();
console.log(data);
```

POST request:

```js
await fetch('/api/items', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ name: 'Test' })
});
```

## Práce s chybami

Je potřeba kontrolovat, jestli server odpověděl úspěšně.

```js
const response = await fetch('/api/items');

if (!response.ok) {
  throw new Error('Server vrátil chybu');
}

const data = await response.json();
```

## Mobilní aplikace a síť

Mobilní aplikace musí počítat s tím, že síť nemusí být stabilní.

Je vhodné řešit:

- timeouty,
- opakování requestů,
- offline režim,
- ukládání dat do cache,
- menší objem přenášených dat,
- indikaci načítání,
- smysluplné chybové hlášky.

## Web services a API

Webová služba umožňuje aplikaci komunikovat se serverem přes jasně definované rozhraní. Typický průběh:

1. klient odešle HTTP request,
2. server request zpracuje,
3. server vrátí data,
4. klient data zobrazí nebo uloží.

Nejčastější formáty odpovědí:

- JSON,
- XML,
- HTML,
- CSV.

Pro mobilní aplikace je důležité minimalizovat velikost odpovědí a dobře ošetřit výpadky připojení.
