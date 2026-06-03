---
title: Doporučená struktura pro Docusaurus
sidebar_label: Doporučená struktura pro Docusaurus
---

# Doporučená struktura pro Docusaurus

Pokud chceš poznámky rozdělit do více souborů, můžeš použít tuto strukturu:

```txt
docs/
  intro.md
  mobile-platforms.md
  html-basics.md
  html5-forms-ui.md
  css-selectors.md
  javascript-basics.md
  bom.md
  dom.md
  network.md
  http.md
  canvas-svg-webgl.md
  events.md
  timers.md
  orientation-sensors.md
  cordova.md
  data-formats.md
  xml.md
  web-services.md
  sri.md
  minification-obfuscation.md
```

### Doporučené pořadí v sidebaru

```js
module.exports = {
  tutorialSidebar: [
    'intro',
    'mobile-platforms',
    'html-basics',
    'html5-forms-ui',
    'css-selectors',
    'javascript-basics',
    'bom',
    'dom',
    'network',
    'http',
    'canvas-svg-webgl',
    'events',
    'timers',
    'orientation-sensors',
    'cordova',
    'data-formats',
    'xml',
    'web-services',
    'sri',
    'minification-obfuscation'
  ]
};
```

---
