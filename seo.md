# SEO Checklist — Cantieri AI

Ultimo aggiornamento: 2026-04-21

---

## 1. SEO On-Page

### Title Tag
- Massimo **60 caratteri**
- Deve contenere: **brand + keyword principale**
- Formato: `Brand — Keyword Principale`
- Esempio: `Cantieri AI — Software Gestione Cantieri Edili`

### Meta Description
- Massimo **155 caratteri**
- Deve contenere: keyword principale + call to action
- Deve invogliare al click (non solo descrivere)
- Esempio: `Cantieri AI: software per gestione cantieri edili. Rapportini digitali, SAL, documenti, dashboard in tempo reale. Prova gratis.`

### Heading Hierarchy
- **Una sola H1** per pagina, con keyword principale
- H2 per le sezioni principali
- H3 per i sottoelementi
- Non saltare livelli (es. da H1 a H3 senza H2)
- Le keyword secondarie vanno negli H2/H3

### Contenuto
- Minimo **800-1000 parole** per pagina (Google premia contenuti approfonditi)
- Keyword density naturale (2-3% per la keyword principale)
- Usare sinonimi e varianti (LSI keywords): "gestionale cantiere", "app cantiere edile", "software edilizia"
- Primo paragrafo deve contenere la keyword principale
- Testo leggibile: frasi brevi, paragrafi da 2-3 righe

### Immagini
- Attributo `alt` descrittivo su ogni immagine (con keyword se pertinente)
- Attributi `width` e `height` per evitare layout shift (CLS)
- `loading="lazy"` su tutte le immagini sotto il fold
- `loading="eager"` + `fetchpriority="high"` solo sull'immagine hero
- Formati moderni (WebP/AVIF) quando possibile
- Comprimere le immagini (target < 200KB per immagine)

### Link Interni
- Ogni pagina deve linkare almeno 2-3 altre pagine del sito
- Anchor text descrittivi (non "clicca qui")
- Le pagine importanti devono ricevere piu' link interni
- Menu di navigazione con link alle sezioni principali

### URL
- Brevi e leggibili: `/contattaci` non `/page?id=123`
- Keyword nell'URL quando possibile
- Trattini per separare le parole, mai underscore
- Tutto minuscolo

---

## 2. SEO Tecnica

### Crawlability
- `robots.txt` con `Allow: /` e link alla sitemap
- Dichiarare esplicitamente i bot principali: Googlebot, Bingbot, AhrefsBot, SemrushBot
- Nessun `noindex` sulle pagine che devono rankare
- Nessun link rotto (href="#" o 404) — Google penalizza i dead link

### Sitemap XML
- Deve contenere TUTTE le pagine indicizzabili
- `lastmod` aggiornata ad ogni modifica del contenuto
- Inviata tramite Google Search Console e Bing Webmaster Tools
- Dichiarata nel `robots.txt`

### Canonical
- Tag `<link rel="canonical">` su ogni pagina
- Punta all'URL preferito (con o senza trailing slash, con o senza www)
- Evita contenuti duplicati tra versioni linguistiche

### hreflang (siti multilingua)
- Tag `hreflang` per ogni lingua + `x-default`
- Presenti sia nell'`<head>` che nella sitemap
- Bidirezionali: se IT punta a EN, EN deve puntare a IT

### HTTPS
- Tutto il sito su HTTPS
- Redirect 301 da HTTP a HTTPS
- Redirect 301 da non-www a www (o viceversa)
- Nessun contenuto misto (mixed content)

### Structured Data (Schema.org)
- `SoftwareApplication` per prodotti software
- `Organization` con logo, nome, contatti
- `alternateName` per varianti del brand (es. "Cantieri", "Cantieri.ai", "Cantieri AI")
- Validare su https://search.google.com/structured-data/testing-tool
- Rich snippet: `offers` per mostrare prezzo/prova gratuita nei risultati

---

## 3. Performance (Core Web Vitals)

Google usa questi 3 parametri come fattore di ranking:

### LCP (Largest Contentful Paint) — target < 2.5s
- Font caricati in modo non-blocking (preload + onload)
- Immagine hero ottimizzata e con `fetchpriority="high"`
- Nessun CSS/JS render-blocking nel `<head>`
- CDN per servire gli asset

### FID / INP (Interaction to Next Paint) — target < 200ms
- JavaScript minimo e differito
- Nessun long task nel main thread
- Event handler leggeri

### CLS (Cumulative Layout Shift) — target < 0.1
- `width` e `height` su tutte le immagini
- Font con `font-display: swap` (Google Fonts lo fa gia')
- Nessun contenuto iniettato dinamicamente sopra il fold

### Strumenti di verifica
- PageSpeed Insights: https://pagespeed.web.dev/
- Lighthouse (Chrome DevTools > Lighthouse)
- Web Vitals extension per Chrome

---

## 4. Keyword Strategy per Cantieri AI

### Dove posizionare le keyword
| Posizione | Importanza | Note |
|---|---|---|
| Title tag | Altissima | Keyword all'inizio |
| H1 | Altissima | Una sola H1 con keyword principale |
| URL | Alta | Breve e con keyword |
| Meta description | Media | Non influisce direttamente sul ranking ma sul CTR |
| Primo paragrafo | Alta | Entro le prime 100 parole |
| H2/H3 | Media | Keyword secondarie e varianti |
| Alt immagini | Media | Solo se pertinente, non forzare |
| Contenuto body | Media | Naturale, non keyword stuffing |

### Mappa keyword per Cantieri AI
| Keyword | Tipo | Difficolta | Stato |
|---|---|---|---|
| cantieri ai | Brand | Bassa | Da raggiungere #1 |
| cantieri.ai | Brand | Bassa | #2 attuale |
| cantieri | Brand generico | Impossibile | Non competere |
| software gestione cantieri edili | Principale | Media | Targetizzata in H1 e title |
| app gestione cantiere | Principale | Media | Nel subtitle hero |
| rapportini digitali cantiere | Long-tail | Bassa | Nel title e description |
| SAL digitale cantiere | Long-tail | Bassa | Nel title e description |
| gestionale cantiere cloud | Long-tail | Bassa | Nel subtitle hero |
| software rapportini cantiere | Long-tail | Bassa | Da targetizzare con blog |
| gestione documenti cantiere | Long-tail | Bassa | Presente in Technology |
| gestione multi-azienda cantiere | Long-tail (USP) | Molto bassa | Nel subtitle hero |
| cantiere digitale | Trend | Media | Da targetizzare con blog |
| software cantiere edile | Generica | Alta | Servono backlink |
| gestionale edilizia | Generica | Alta | Servono backlink + contenuti |

---

## 5. Off-Page SEO

### Backlink
- La cosa piu' importante per il ranking dopo i contenuti
- **Qualita' > Quantita'**: 1 link da un sito autorevole di edilizia vale piu' di 100 link da directory spam
- Strategie per ottenere backlink:
  - Registrarsi su directory software italiane (Capterra, GetApp, G2)
  - Guest post su blog di edilizia/tech
  - Comunicati stampa su testate di settore
  - Partnership con associazioni di categoria (ANCE, Confartigianato)
  - Creare contenuti utili che altri linkano (guide, infografiche, tool gratuiti)

### Google Business Profile
- Crea un profilo Google Business se hai una sede fisica
- Aiuta per le ricerche locali e da' autorita' al brand

### Social Signal
- Condividere i contenuti sui social (LinkedIn il piu' importante per B2B)
- Non influisce direttamente sul ranking ma aumenta visibilita' e backlink

---

## 6. Contenuti (la leva piu' potente)

### Blog
- **Fondamentale** per rankare sulle long-tail keyword
- Pubblica almeno 2-4 articoli al mese
- Ogni articolo targetta una keyword long-tail specifica
- Minimo 1000-1500 parole per articolo
- Struttura: H1 (titolo con keyword) > Intro > H2 sezioni > Conclusione con CTA

### Idee articoli per Cantieri AI
1. "Come gestire i rapportini di cantiere in digitale" → keyword: rapportini digitali cantiere
2. "SAL digitale: guida completa per imprese edili" → keyword: SAL digitale
3. "Software gestione cantieri: come scegliere quello giusto" → keyword: software gestione cantieri
4. "Gestione documentale cantiere: addio alla carta" → keyword: gestione documenti cantiere
5. "Come ridurre i costi di cantiere con un gestionale cloud" → keyword: gestionale cantiere cloud
6. "Compliance edilizia italiana: CIG, CUP e fatturazione elettronica" → keyword: compliance edilizia
7. "App cantiere: le funzionalita' essenziali per un capocantiere" → keyword: app cantiere
8. "Gestione multi-azienda in cantiere: come collaborare senza caos" → keyword: gestione multi-azienda cantiere
9. "Template rapportini cantiere: scarica i modelli gratuiti" → keyword: template rapportini cantiere
10. "Dashboard cantiere: monitorare avanzamento lavori in tempo reale" → keyword: dashboard cantiere

### Landing Page dedicate (per SEO e campagne Ads)
- `/software-gestione-cantieri` → keyword principale
- `/rapportini-digitali` → long-tail alta conversione
- `/gestionale-cantiere-cloud` → long-tail cloud
- Ogni landing ha title, description, H1 e contenuto focalizzato su una keyword

---

## 7. Monitoraggio

### Strumenti gratuiti
| Strumento | Cosa monitora |
|---|---|
| Google Search Console | Impressioni, click, posizione, errori indicizzazione |
| Bing Webmaster Tools | Come Search Console per Bing |
| Google Analytics 4 | Traffico, comportamento utenti, conversioni |
| PageSpeed Insights | Performance e Core Web Vitals |
| Ahrefs Webmaster Tools | Backlink, keyword (gratuito per il proprio sito) |
| Ubersuggest | Audit SEO, keyword, competitor (3 ricerche/giorno gratis) |

### Cosa controllare ogni settimana
- Impressioni e click in Search Console (stanno salendo?)
- Posizione media per le keyword target
- Nuove keyword per cui il sito appare
- Errori di indicizzazione (pagine escluse, errori 404)
- Core Web Vitals (nessun peggioramento?)

### KPI da tracciare
| KPI | Target 3 mesi | Target 6 mesi |
|---|---|---|
| Impressioni/settimana | 100+ | 500+ |
| Click/settimana | 10+ | 50+ |
| Posizione "cantieri ai" | Top 3 | #1 |
| Posizione "software gestione cantieri" | Top 20 | Top 10 |
| Backlink totali | 5+ | 20+ |
| Pagine indicizzate | 10+ | 30+ (con blog) |

---

## 8. Errori da evitare

- **Keyword stuffing**: ripetere la keyword in modo innaturale — Google penalizza
- **Contenuto duplicato**: stessa pagina da URL diversi senza canonical
- **Link rotti**: href="#" o pagine 404 — controllare regolarmente
- **Contenuto troppo scarso**: pagine con meno di 300 parole rankano male
- **Title/description duplicati**: ogni pagina deve avere title e description unici
- **Ignorare il mobile**: Google usa mobile-first indexing
- **Cambiare URL senza redirect**: se rinomini una pagina, redirect 301 dal vecchio URL
- **Comprare backlink**: Google penalizza i link artificiali
- **Ignorare Search Console**: e' la fonte di verita', controllala ogni settimana

---

## 9. Procedura post-deploy (ogni volta che modifichi contenuto)

1. **Aggiornare `lastmod` nella sitemap** (`public/sitemap.xml`)
   - Cambia la data `<lastmod>` solo sulle pagine che hai effettivamente modificato
   - Formato: `YYYY-MM-DD` (es. `2026-04-23`)
   - Non aggiornare pagine non toccate — Google potrebbe ignorare il segnale se abusi di lastmod

2. **Build e deploy**
   - `npm run build` → verifica che tutto compili
   - Deploya su hosting

3. **Richiedere reindicizzazione su Google Search Console**
   - Vai su [Google Search Console](https://search.google.com/search-console)
   - "Controllo URL" → incolla l'URL della pagina modificata (es. `https://www.cantieri.ai/`)
   - Clicca "Richiedi indicizzazione"
   - Ripeti per ogni pagina modificata (es. `/en/`, `/ar/`)
   - Google reindicizza di solito entro 1-2 giorni con la richiesta manuale, vs settimane senza

4. **Verificare dopo 2-3 giorni**
   - Torna su Search Console → "Controllo URL" → controlla che la data di ultima scansione sia aggiornata
   - Controlla "Copertura" per eventuali errori di indicizzazione

---

## 10. Stato attuale Cantieri AI (2026-04-23)

### Fatto
- [x] Title tag ottimizzati (< 60 char) su tutte le 6 pagine
- [x] Meta description ottimizzate (< 155 char) su tutte le 6 pagine
- [x] H1 con keyword principale ("Il software per la gestione dei cantieri edili")
- [x] Schema.org con alternateName ["Cantieri", "Cantieri.ai", "Cantieri AI"]
- [x] Schema.org con keywords, offers, applicationSubCategory
- [x] robots.txt con Allow esplicito per Googlebot, Bingbot, AhrefsBot, SemrushBot
- [x] Sitemap aggiornata (lastmod 2026-04-23) con hreflang
- [x] Canonical corretti su tutte le pagine
- [x] hreflang it/en/ar + x-default su tutte le pagine
- [x] Google Fonts non-blocking (preload + onload)
- [x] Immagini con lazy loading sotto il fold
- [x] Google Search Console verificata + sitemap inviata
- [x] Indicizzazione richiesta su Google

### Da fare
- [ ] Registrare sito su Bing Webmaster Tools
- [ ] Installare Google Analytics 4
- [ ] Risolvere problema Ahrefs "Return code not 200" (controllare firewall hosting/CDN)
- [ ] Creare profili social (LinkedIn, Facebook) + aggiungere sameAs nel JSON-LD
- [ ] Creare Google Business Profile
- [ ] Ottenere primi backlink (directory Capterra/GetApp, guest post)
- [ ] Aggiungere sezione blog al sito
- [ ] Scrivere primi 3-5 articoli blog targetizzando keyword long-tail
- [ ] Creare landing page dedicate per keyword principali
- [ ] Aggiungere FAQ section alla homepage (rich snippet potenziali)
- [ ] Portare il word count della homepage sopra 1000 parole
