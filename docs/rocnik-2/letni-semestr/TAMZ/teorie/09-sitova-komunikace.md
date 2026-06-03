---
title: Síťová komunikace
sidebar_label: Síťová komunikace
---

# Síťová komunikace

### URI

URI identifikuje zdroj nebo akci. Obecná struktura:

```txt
<scheme>:<address+path>?<query>#<fragment>
```

Příklady:

```txt
http://user:pass@server/path/file?opt1=val1&opt2=val2
mailto:user@example.com?subject=TAMZ&body=test
sms:+420123456789?body=hello
 tel:+420123456789
javascript:alert("test")
```

URI lze použít také pro předání dat externím aplikacím, například e-mailovému klientovi, telefonu nebo SMS aplikaci.

### Doménové jméno a IP adresa

Počítače v síti lze identifikovat pomocí doménového jména nebo IP adresy.

Doménové jméno:

```txt
www.example.com
```

IPv4:

```txt
158.196.109.35
```

IPv6:

```txt
2001:718:1001:207::35
```

Doménové jméno je čitelnější pro člověka, ale v síti se nakonec používá IP adresa.

### TCP

TCP je spojovaný transportní protokol.

Vlastnosti:

- před komunikací se navazuje spojení,
- data jsou potvrzována,
- zaručuje pořadí dat,
- při ztrátě se data znovu přenášejí,
- spojení se musí ukončit.

Použití:

- HTTP,
- HTTPS,
- e-mail,
- SSH,
- FTP.

### UDP

UDP je nespojovaný transportní protokol.

Vlastnosti:

- nenavazuje spojení,
- neposkytuje záruku doručení,
- paket se může ztratit,
- paket může přijít později nebo v jiném pořadí,
- je rychlejší a jednodušší.

Použití:

- streamování,
- online hry,
- VoIP,
- DNS.

### Porty

IP adresa identifikuje zařízení, port identifikuje konkrétní službu nebo aplikaci.

Příklady:

```txt
HTTP  -> TCP/80
HTTPS -> TCP/443
SMTP  -> TCP/25
```

Klient obvykle používá náhodný zdrojový port a připojuje se na známý cílový port serveru.

---
