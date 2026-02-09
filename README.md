# Filippo-BMec.github.io

Sito personale accademico di **Filippo Berti Mecocci**, ora organizzato in modalità **multipagina**.

## Struttura del progetto

- `index.html`: home page e presentazione generale.
- `about.html`: profilo accademico e background.
- `papers.html`: articoli peer-reviewed con abstract espandibili.
- `work-in-progress.html`: under review, working papers e tesi.
- `projects.html`: progetti in corso.
- `teaching.html`: attività didattiche.
- `style.css`: stile globale del sito (layout, tipografia, responsive, temi).
- `site.js`: logica client-side (tema, toggle abstract, back-to-top).

## Funzionalità principali

- Layout responsive desktop/mobile.
- Tema chiaro/scuro con salvataggio preferenza (`localStorage`).
- Pulsante `Back to top` visibile durante lo scroll.
- Pulsanti `Show Abstract / Hide Abstract` nelle pagine con pubblicazioni.
- Navbar condivisa su tutte le pagine.

## Avvio in locale

1. Apri la cartella del progetto.
2. Avvia un server statico, ad esempio:

```bash
python3 -m http.server 8000
```

3. Visita `http://localhost:8000`.

In alternativa, puoi aprire direttamente `index.html`, ma con server locale il comportamento è più affidabile.

## Deploy

Il sito è pensato per GitHub Pages.  
Per pubblicare aggiornamenti: commit + push sul branch configurato per Pages (tipicamente `main`).
