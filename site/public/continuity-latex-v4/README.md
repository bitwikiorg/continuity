
# Continuity paper final draft

Contents:
- `main.tex`: main LaTeX source
- `main.pdf`: compiled paper
- `sections/`: section files
- `figures/`: TikZ-native vector figures
- `tables/`: tabular material
- `bib/references.bib`: bibliography

Build locally with:

```bash
latexmk -pdf main.tex
biber main
latexmk -pdf main.tex
```
