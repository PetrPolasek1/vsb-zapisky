---
title: Subresource Integrity
sidebar_label: Subresource Integrity
---

# Subresource Integrity

### Co je SRI

Subresource Integrity slouží k ověření, že externě načtený soubor nebyl změněn. Používá se hlavně pro JavaScript a CSS načítané z CDN.

Příklad:

```html
<script
  src="https://cdn.example.com/library.js"
  integrity="sha512-..."
  crossorigin="anonymous">
</script>
```

Pokud hash neodpovídá obsahu souboru, prohlížeč zdroj nenačte.

### Kdy SRI používat

SRI se hodí pro:

- knihovny načítané z CDN,
- externí JavaScript,
- externí CSS,
- situace, kdy chceme ověřit integritu zdroje.

### Na co si dát pozor

Nepoužívat pro adresy typu:

```txt
/library/latest/library.js
```

Obsah souboru se může změnit a hash by přestal sedět.

Lepší je používat konkrétní verzi:

```txt
/library/1.2.3/library.js
```

---
