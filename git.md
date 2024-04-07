# Git

Tady je ukazka nejakych git prikazu

## Git základy

```bash
# inicializuje novy repozitar
git init

# status - ti ukaze 'co se zrovna deje'
git status

# add <jmeno souboru>
# (nebo -A jako VSE,
# nebo . jako tato slozka apod)

# gite pridej vse z 'teto' slozky kde ted jsem
git add .

# gite pridej uplne vsechny zmeny v celem projektu
git add -A

# gite pridej jen obrazek.jpg
git add obrazek.jpg

# pridane veci putuji do "staged" area
# odkud jsou pripraveny na commitnuti

# commit prida do repozitare new commit a je hotovo

# muzeme zadat jen tak a napsat message v editoru
git commit
# .. po ulozeni nejake message se commit vytvori
# a ulozi ALE pokud nechame message prazdnou tak se commit zrusi

# nebo muzeme pouzit prepinac -m
# a napsat zpravu rovnou v prikazu za commitem
git commit -m 'moje zprava'
```

## Testuji obrazek

![Bbeekkuuss](./images/bks.jpeg)
