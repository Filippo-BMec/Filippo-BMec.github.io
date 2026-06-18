# Filippo-BMec.github.io

Sito personale accademico di **Filippo Berti Mecocci**, ora organizzato in modalità **multipagina**.

## Struttura del progetto

- `index.html`: home page e presentazione generale.
- `about.html`: profilo accademico e background.
- `research.html`: pubblicazioni, lavori under review, working papers, dormant papers e tesi.
- `teaching.html`: attività didattiche.
- `CV.pdf`: versione del curriculum pubblicata e collegata dalla home page.
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

## Aggiornamento del CV

Il sorgente LaTeX del curriculum è conservato nel repository Overleaf clonato nella cartella adiacente:

```text
Website/
├── CV/
│   ├── main.tex
│   ├── ENTRY.tex
│   └── main.pdf
└── Filippo-BMec.github.io/
    ├── CV.pdf
    └── index.html
```

La home page collega il file `CV.pdf` presente nel repository del sito. Dopo aver aggiornato e compilato il curriculum, copia il nuovo PDF nel sito:

```bash
cp ../CV/main.pdf CV.pdf
```

Il comando deve essere eseguito dalla cartella `Filippo-BMec.github.io`. Prima del deploy, verifica che `CV.pdf` compaia tra i file modificati in `git status`.

Una volta pubblicato su GitHub Pages, il curriculum è disponibile all'indirizzo:

```text
https://filippo-bmec.github.io/CV.pdf
```

## Deploy

Il sito è pensato per GitHub Pages.  
Per pubblicare gli aggiornamenti:

1. Aggiorna i contenuti HTML usando come riferimento `../CV/ENTRY.tex`.
2. Compila il curriculum nella cartella `../CV`.
3. Copia `../CV/main.pdf` in `CV.pdf`.
4. Controlla le modifiche con `git status`.
5. Esegui commit e push sul branch configurato per GitHub Pages, tipicamente `main`.
