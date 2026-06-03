---
title: HTTP protokol
sidebar_label: HTTP protokol
---

# HTTP protokol

### HTTP request

HTTP request má zjednodušeně tuto strukturu:

```txt
<METHOD> <PATH> HTTP/1.1
Header: value
Header: value

Body data
```

Příklad:

```txt
GET /index.html HTTP/1.1
Host: example.com
```

### HTTP response

HTTP response má strukturu:

```txt
HTTP/1.1 <status-code> <message>
Header: value
Header: value

Response body
```

Příklad:

```txt
HTTP/1.1 200 OK
Content-Type: text/html

<html>...</html>
```

### HTTP metody

| Metoda | Význam |
|---|---|
| `GET` | získání dat ze serveru |
| `POST` | odeslání dat na server |
| `PUT` | uložení nebo nahrazení zdroje |
| `DELETE` | odstranění zdroje |
| `OPTIONS` | zjištění podporovaných možností |

### HTTP stavové kódy

| Kód | Význam |
|---|---|
| `200 OK` | požadavek proběhl úspěšně |
| `301 Moved Permanently` | trvalé přesměrování |
| `302 Found` | dočasné přesměrování |
| `400 Bad Request` | špatný požadavek |
| `401 Unauthorized` | chybí autentizace |
| `403 Forbidden` | přístup zakázán |
| `404 Not Found` | zdroj nenalezen |
| `500 Internal Server Error` | chyba serveru |

---
