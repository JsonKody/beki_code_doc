# Git pro začátečníky

## Odkazy

- [Úvod - Základy systému Git](https://git-scm.com/book/cs/v2/%C3%9Avod-Z%C3%A1klady-syst%C3%A9mu-Git)
- [Microsoft learn - Co je to Git?](https://learn.microsoft.com/cs-cz/devops/develop/git/what-is-git)
- [Atlassian - What is Git?](https://www.atlassian.com/git/tutorials/what-is-git)

Git je rozšířený systém pro správu verzí, který umožňuje efektivně sledovat změny v souborech a koordinovat práci mezi více lidmi.

## Základní koncepty

- **Repozitář (repository)**: Uložiště vašeho kódu a jeho historie.
- **Commit**: Záznam o změně ve vašem projektu.
- **Větev (branch)**: Samostatná linie vývoje.

## Lokální Git operace

### Inicializace repozitáře

```bash
git init  # Vytvoří nový git repozitář v aktuálním adresáři.
```

### Zjištění stavu

Ukáže, které soubory jsou změněné nebo připravené k commitu.

```bash
git status  # Zobrazí stav souborů (změněné, nepřidané, atd.)
```

### Přidání souborů

Přidejte soubory do připraveného stavu (staging area), aby byly zahrnuty do příštího commitu.

```bash
git add <soubor>           # Přidá konkrétní soubor.
git add .                  # Přidá všechny změněné soubory v aktuálním adresáři.
git add -A                 # Přidá všechny změněné soubory v repozitáři.
```

### Commitování změn

Uloží připravené změny do repozitáře jako nový commit.

```bash
git commit -m "Popis změn"  # Vytvoří commit s popisem změn.
```

### Zobrazení historie

```bash
git log  # Zobrazí historii commitů.
```

## Spolupráce a sdílení přes GitHub

### Propojení s vzdáleným repozitářem

Přidá odkaz na vzdálený repozitář (např. na GitHubu).

```bash
git remote add origin <URL_repositáře_na_GitHub>
```

### Odeslání změn na GitHub

Odešle všechny commity z lokální větve `main` (nebo `master`) do vzdáleného repozitáře.

```bash
git push origin main
```

### Stažení změn z GitHubu

Aktualizuje lokální repozitář posledními změnami z vzdáleného repozitáře.

```bash
Aktualizuje lokální repozitář posledními změnami z vzdáleného repozitáře.
```

## Jak Git funguje

Git sleduje změny ve vašich souborech ve formě "commitů", což jsou záznamy o změnách, které jste provedli. Tyto commity tvoří historii vašeho projektu a umožňují vám vrátit se k jakékoli předchozí verzi vašeho kódu.

### Důležité pojmy

- **Staging Area**: Místo, kam přidáte soubory před commitováním. Umožňuje vám vybrat, které změny chcete zahrnout do vašeho příštího commitu.
- **Commit Message**: Popis, co jste ve vašem commitu změnili. Důležité pro pochopení historie projektu.

### Na co si dát pozor

- **Nezapomeňte přidat soubory**: Před vytvořením commitu musíte přidat změněné soubory do staging area pomocí git add. Pokud to neuděláte, vaše změny nebudou zahrnuty v commitu.
- **Jasné commit zprávy**: Vaše commit zprávy by měly jasně popisovat, co jste změnili a proč. To usnadňuje pochopení historie projektu vám i ostatním.

### Oprava chyb

- **Zapomenuté soubory**: Pokud jste zapomněli přidat nějaké soubory do commitu, můžete provést nový commit s chybějícími soubory a použít příkaz git commit --amend k jeho sloučení s posledním commit.
- **Chybná commit zpráva**: Pokud jste udělali chybu ve vaší commit zprávě, git commit --amend vám také umožní upravit zprávu posledního commitu.

## Spolupráce a sdílení přes GitHub

- **Vzdálené repozitáře**: GitHub slouží jako vzdálený repozitář pro váš projekt, což umožňuje sdílení kódu a spolupráci s ostatními.
- **Push a Pull**: git push odesílá vaše lokální commity na GitHub, zatímco git pull stahuje nejnovější změny z GitHubu do vašeho lokálního repozitáře.

## Závěr

Git a GitHub jsou mocné nástroje pro správu verzí a spolupráci na softwarových projektech. Klíčem k úspěchu je pravidelné commitování změn, jasné psaní commit zpráv a efektivní používání vzdálených repozitářů pro sdílení a spolupráci. S těmito základy jste dobře vybaveni pro začátek práce s Git a GitHubem.

## Shrnutí

### Lokální Git operace

- **`git init`**: Vytvoří nový git repozitář.
- **`git status`**: Zobrazí stav souborů ve vašem repozitáři.
- **`git add`**: Přidá soubory do staging area před commitováním.
  - `git add <soubor>`: Přidá konkrétní soubor.
  - `git add .`: Přidá všechny změněné soubory v aktuálním adresáři.
  - `git add -A`: Přidá všechny změněné soubory v repozitáři.
- **`git commit`**: Uloží připravené změny do repozitáře.
  - `git commit -m "Popis změn"`: Vytvoří commit s popisem změn.
- **`git log`**: Zobrazí historii commitů.

### Spolupráce a sdílení přes GitHub

- **`git remote add origin <URL_repositáře_na_GitHub>`**: Propojí váš lokální repozitář s vzdáleným repozitářem.
- **`git push origin main`**: Odešle commity do vzdáleného repozitáře.
- **`git pull`**: Aktualizuje lokální repozitář nejnovějšími změnami z vzdáleného repozitáře.

### Jak Git funguje

- **Staging Area**: Místo pro přípravu souborů před commitováním.
- **Commit Message**: Popis změn v commitu.

### Na co si dát pozor

- Přidání souborů před commitováním.
- Psaní jasných commit zpráv.

### Oprava chyb

- **`git commit --amend`**: Umožňuje sloučit zapomenuté soubory s posledním commit nebo upravit jeho zprávu.

### Spolupráce na GitHubu

- Využití vzdálených repozitářů pro sdílení a spolupráci.
- Použití příkazů `git push` a `git pull` pro synchronizaci s GitHubem.
