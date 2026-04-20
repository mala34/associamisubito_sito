---
name: SEO Canonical URL & Indexing Fix
description: Tracking the www vs non-www duplicate content issue reported by Google Search Console and the fixes applied
type: project
---

## Problema

Google Search Console ha segnalato due problemi di indicizzazione per `https://www.associamisubito.it/`:

1. **Pagina duplicata senza URL canonico selezionato dall'utente** (Sorgente: Sito web)
2. **Rilevata, ma attualmente non indicizzata** (Sorgente: Sistemi di Google)

Pagine coinvolte:
- `https://www.associamisubito.it/`
- `https://www.associamisubito.it/contattaci/`

**Why:** Entrambi i record DNS (con e senza www) puntano allo stesso IP Aruba `80.88.84.86`, servendo contenuto identico. Google li vede come duplicati.

**How to apply:** La versione canonica scelta è `https://associamisubito.it/` (senza www).

## DNS Aruba

```
MX    associamisubito.it.    10 in.arubabusiness.it.
A     www.associamisubito.it.    80.88.84.86
A     associamisubito.it.    80.88.84.86
```

Hosting su Aruba, IP condiviso `80.88.84.86`.

## Fix applicati (2026-04-20)

### 1. `astro.config.mjs`
- `site` cambiato da `https://www.associamisubito.it` a `https://associamisubito.it`
- Questo fa sì che la sitemap generata da `@astrojs/sitemap` usi URL senza www

### 2. `src/layouts/Layout.astro`
- `siteUrl` cambiato a `https://associamisubito.it`
- Aggiunto `<link rel="canonical" href={canonicalURL} />` nel `<head>`
- `og:url` ora usa `canonicalURL` (dinamico per pagina) invece di `siteUrl` statico
- Schema.org JSON-LD usa `siteUrl` senza www

### 3. `public/.htaccess`
- Creato file per redirect 301:
  - Forza HTTPS
  - Redirect `www.associamisubito.it` → `associamisubito.it`
- Funziona su hosting Linux Aruba

## Azioni post-deploy

1. Verificare che `https://www.associamisubito.it/` faccia redirect 301 a `https://associamisubito.it/`
2. Verificare che `https://www.associamisubito.it/contattaci/` faccia redirect 301 a `https://associamisubito.it/contattaci/`
3. Su Google Search Console → report "Indicizzazione delle pagine" → cliccare **"Convalida correzione"** per entrambi i problemi
4. Attendere che Google rielabori (può richiedere giorni/settimane)

## Se il .htaccess non funziona

Se Aruba non processa il `.htaccess` (hosting Windows o configurazione particolare):
- Configurare il redirect 301 dal **pannello di controllo hosting Aruba** (sezione Redirect/Gestione sito)
- Oppure contattare supporto Aruba per abilitare mod_rewrite

## Stato

- [x] Fix lato frontend applicati
- [ ] Deploy effettuato
- [ ] Redirect 301 verificato funzionante
- [ ] Convalida correzione su Google Search Console
- [ ] Google ha rielaborato e rimosso gli errori