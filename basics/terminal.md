# Terminál

Terminál, někdy známý jako shell nebo command line, je textové rozhraní k ovládání počítače. Existuje mnoho druhů shellů, jako jsou `bash` (populární na Linuxu), `zsh` (populární na macOS), a na Windows máme `cmd` a `PowerShell`.

V moderních verzích Windows je možné využívat Linux pomocí Windows Subsystem for Linux (WSL), což umožňuje spouštět Linuxový shell přímo ve Windows.

## Základní příkazy v shellu

V shellu můžeme provádět mnoho operací, jako v grafickém uživatelském rozhraní (GUI), a často i více. Zde jsou některé z nejzákladnějších příkazů:

## Navigace a prohlížení

- **`pwd`** (print working directory) pokud chces vedet kde prave jsi zadat `pwd`

```bash
pwd
/Users/beki
```

- **`cd`** (change directory): Změní aktuální složku.

  ```bash
  cd /cesta/do/složky  # Přechod do konkrétní složky
  cd ~  # Přechod do domovské složky
  cd ..  # Přechod o úroveň výše
  ```

- **`ls`** (list): Vypíše obsah aktuální složky.

  ```bash
  ls  # Základní výpis
  ls -l  # Detailní výpis
  ls -a  # Výpis včetně skrytých souborů
  ls -la  # Kombinace detailního výpisu a skrytých souborů
  ```

## Práce se soubory a složkami

- **`mkdir`** (make directory): Vytvoří novou složku.

  ```bash
  mkdir nova_slozka
  ```

- **`touch`**: Vytvoří nový prázdný soubor nebo aktualizuje časové razítko existujícího souboru.

  ```bash
  touch soubor.txt
  ```

- **`rm`** (remove): Odstraní soubor nebo složku.

  ```bash
  rm soubor.txt  # Odstraní soubor
  rm -r slozka  # Rekurzivně odstraní složku a její obsah
  ```

## Zobrazení a editace souborů

- **`cat`**: Zobrazí obsah souboru na obrazovku.

  ```bash
  cat soubor.txt
  ```

- **`nano`, `vi`, `vim`**: Textové editory přímo v shellu pro editaci souborů.

  ```bash
  nano soubor.txt  # Otevře soubor v editoru nano
  vi soubor.txt  # Otevře soubor v editoru vi
  ```

## Další užitečné příkazy

- **`pwd`** (print working directory): Vypíše cestu aktuální složky.
- **`clear`**: Vyčistí obrazovku terminálu.

Tento úvod pokrývá základy používání terminálu, což je mocný nástroj pro efektivní práci s počítačem. Existuje mnohem více příkazů a technik, které můžete objevovat, jak se budete učit a zlepšovat ve svých schopnostech.

## Základní klávesové zkratky pro terminál

Práce s terminálem může být mnohem efektivnější, pokud znáte několik klávesových zkratek. Zde je několik základních, které by vám mohly ulehčit život:

### Čištění obrazovky

- **`Ctrl + L`**: Tato zkratka vyčistí vaši terminálovou obrazovku a posune vás zpět na začátek bez ztráty aktuálně zapsaného textu nebo spuštěných programů.

### Manipulace s textem

- **`Ctrl + U`**: Pokud jste napsali dlouhý příkaz a chcete ho rychle vymazat, použijte tuto zkratku. Odstraní všechno od aktuální pozice kurzoru až po začátek řádku.

- **`Ctrl + K`**: Tato zkratka odstraní text od pozice kurzoru až po konec řádku. Je užitečná, pokud chcete zachovat část příkazu a odstranit jeho konec.

Tyto zkratky vám mohou ušetřit čas a zvýšit vaši produktivitu při práci s terminálem. Zkuste je vyzkoušet a zjistěte, jak vám mohou usnadnit práci.
