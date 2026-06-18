# Filippo-BMec.github.io

Sito personale accademico di **Filippo Berti Mecocci**, ora organizzato in modalità **multipagina**.

## Struttura del progetto

- `index.html`: home page e presentazione generale.
- `about.html`: profilo accademico e background.
- `research.html`: pubblicazioni, lavori under review, working papers, dormant papers e tesi.
- `teaching.html`: attività didattiche.
- `CV.pdf`: versione del curriculum pubblicata e collegata dalla home page.
- `update_cv.sh`: compila il repository LaTeX adiacente e aggiorna `CV.pdf`.
- `style.css`: stile globale del sito (layout, tipografia, responsive, temi).
- `site.js`: logica client-side (tema, toggle abstract, back-to-top).
- `papers.html`, `projects.html`, `work-in-progress.html`: redirect mantenuti per compatibilità con i vecchi URL.

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

La home page collega il file `CV.pdf` presente nel repository del sito. Dopo aver aggiornato il curriculum, esegui:

```bash
./update_cv.sh
```

Lo script:

1. compila `../CV/main.tex` con `latexmk`;
2. copia `../CV/main.pdf` nel sito come `CV.pdf`;
3. elimina i file temporanei LaTeX;
4. verifica che i due PDF coincidano.

Lo script risolve automaticamente i percorsi dei due repository. Eseguilo dalla cartella del sito come mostrato sopra, oppure richiamalo tramite il suo percorso completo. Prima del deploy, verifica lo stato di entrambi i repository:

```bash
git -C ../CV status
git status
```

Una volta pubblicato su GitHub Pages, il curriculum è disponibile all'indirizzo:

```text
https://filippo-bmec.github.io/CV.pdf
```

## Deploy

Il sito è pensato per GitHub Pages.  
Per pubblicare gli aggiornamenti:

1. Aggiorna il repository `../CV` e, quando necessario, i contenuti HTML usando `../CV/ENTRY.tex` come riferimento.
2. Esegui `./update_cv.sh`.
3. Controlla separatamente lo stato dei repository `CV` e `Filippo-BMec.github.io`.
4. Esegui commit e push nel repository CV per sincronizzare Overleaf.
5. Esegui commit e push nel repository del sito per pubblicare GitHub Pages.
