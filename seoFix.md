# SEO Fix — Associami Subito

Ultimo aggiornamento: 2026-04-23

---

## Fix Immediati (Priorità Alta)

### 1. Creare `robots.txt`
- **Problema**: File mancante — i crawler non hanno direttive esplicite
- **Soluzione**: Creare `public/robots.txt` con:
```
User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

User-agent: AhrefsBot
Allow: /

User-agent: SemrushBot
Allow: /

User-agent: *
Allow: /

Sitemap: https://associamisubito.it/sitemap-index.xml
```

### 2. Fixare `site.webmanifest`
- **Problema**: Nome generico "MyWebSite" e "MySite" — non coerente col brand
- **Soluzione**: Aggiornare con:
```json
{
  "name": "Associami Subito",
  "short_name": "AssociamiSubito",
  "theme_color": "#F28F16",
  "background_color": "#ffffff",
  ...
}
```

### 3. Aggiungere H1 semantico alla homepage
- **Problema**: Il titolo principale della homepage è un `<div>` con classe `text-8xl`, non un `<h1>`
- **Soluzione**: Wrappare "Gestisci la tua attività senza pensieri." in un tag `<h1>` con la keyword principale
- **Esempio**: `<h1>Gestisci la tua ASD e società sportiva senza pensieri</h1>`
- **Impatto**: Google usa l'H1 come segnale forte per capire di cosa parla la pagina

### 4. Aggiungere `width` e `height` alle immagini
- **Problema**: Immagini senza dimensioni esplicite causano layout shift (CLS alto)
- **Soluzione**: Aggiungere `width` e `height` a tutti i tag `<img>`
- **Impatto**: Migliora Core Web Vitals → fattore di ranking

---

## Fix Medio Termine (Priorità Media)

### 5. Aggiungere `SoftwareApplication` schema
- **Problema**: Solo schema `Organization` presente — Google non sa che è un software
- **Soluzione**: Aggiungere JSON-LD `SoftwareApplication` con:
```json
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Associami Subito",
  "alternateName": ["Associami", "AssociamiSubito"],
  "applicationCategory": "BusinessApplication",
  "applicationSubCategory": "Gestionale ASD e Società Sportive",
  "operatingSystem": "Web",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "EUR",
    "description": "Gratis per sempre"
  },
  "description": "Gestionale completo per ASD e società sportive: prenotazioni, soci, pagamenti.",
  "url": "https://associamisubito.it",
  "keywords": ["gestionale ASD", "gestione soci", "prenotazioni sportive", "società sportive"]
}
```

### 6. Popolare `sameAs` nello schema Organization
- **Problema**: Array `sameAs` vuoto — Google non collega il brand ai profili social
- **Soluzione**: Creare profili LinkedIn e Facebook, poi aggiungere gli URL in `sameAs`

### 7. Aggiungere `alternateName` nello schema Organization
- **Soluzione**: Aggiungere `"alternateName": ["Associami", "AssociamiSubito", "Associami Subito"]`
- **Impatto**: Aiuta Google a collegare varianti del brand

### 8. Espandere il contenuto homepage
- **Problema**: Contenuto attuale ~800-1000 parole — sotto la soglia ideale
- **Soluzione**: Aggiungere sezione FAQ con domande tipo:
  - "Come gestire i soci di un'ASD?"
  - "Come funziona la prenotazione online?"
  - "Associami Subito è gratuito?"
- **Impatto**: Più contenuto testuale + potenziali rich snippet FAQ

### 9. Migliorare link interni
- **Problema**: Solo link a CTA e footer — struttura interna debole
- **Soluzione**: Creare più pagine (funzionalità, prezzi, FAQ) e linkarle tra loro
- **Impatto**: Aiuta Google a scoprire e valorizzare tutte le pagine

---

## Fix Lungo Termine (Priorità Bassa)

### 10. Creare sezione Blog
- Articoli mirati su keyword long-tail:
  - "Come creare un'ASD: guida completa"
  - "Gestione soci ASD: obblighi e strumenti digitali"
  - "Software gestionale per società sportive: come scegliere"
- Minimo 1000-1500 parole per articolo
- Pubblicare 2-4 articoli al mese

### 11. Ottenere backlink
- Registrarsi su directory software (Capterra, GetApp)
- Guest post su blog sportivi e associazionismo
- Partnership con federazioni sportive (CONI, federazioni regionali)

### 12. Registrarsi su Bing Webmaster Tools
- Inviare sitemap anche a Bing
- Verificare indicizzazione su Bing

### 13. Installare Google Analytics 4
- Tracciare traffico e conversioni
- Monitorare comportamento utenti sulla landing page

---

## Checklist Rapida

| # | Fix | Priorità | Stato |
|---|-----|----------|-------|
| 1 | Creare robots.txt | Alta | [x] |
| 2 | Fixare site.webmanifest | Alta | [x] |
| 3 | Aggiungere H1 semantico | Alta | [x] già presente |
| 4 | Width/height immagini | Alta | [ ] |
| 5 | Schema SoftwareApplication | Media | [x] |
| 6 | Popolare sameAs | Media | [ ] (servono profili social) |
| 7 | Aggiungere alternateName | Media | [x] |
| 8 | Espandere contenuto (FAQ) | Media | [ ] |
| 9 | Migliorare link interni | Media | [ ] |
| 10 | Creare blog | Bassa | [ ] |
| 11 | Ottenere backlink | Bassa | [ ] |
| 12 | Bing Webmaster Tools | Bassa | [ ] |
| 13 | Google Analytics 4 | Bassa | [ ] |
