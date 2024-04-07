# HTML pro začátečníky

## Odkazy

- [MDN - HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [Jak psát web - HTML příručka](https://www.jakpsatweb.cz/html/)
- [W3C - HTML Tutorial](https://www.w3schools.com/html/)

**HTML** (_HyperText Markup Language_) je standardní značkovací jazyk pro vytváření webových stránek. Struktura **HTML** dokumentu je definována pomocí různých tagů, které prohlížeči říkají, jak má obsah zobrazit.

## Co je HTML tag?

**HTML** tag je základní stavební blok webových stránek. Pomocí tagů říkáme webovému prohlížeči, jak má zobrazit text, obrázky a další prvky na stránce.

### Struktura tagu

Tag se skládá z:

- **Jména tagu**: Říká, jaký typ obsahu tag reprezentuje (např. `p` pro odstavec, `img` pro obrázek).
- **Atributů**: Poskytují další informace o tagu, jako jsou cesty k obrázkům nebo styly. Atributy mají formát `nazev="hodnota"`.

```html
<!-- Příklad struktury HTML tagu -->
<jmeno-tagu atribut1="hodnota1" atribut2="hodnota2">Obsah tagu</jmeno-tagu>
```

### Příklady

**Párové tagy** mají otevírací a zavírací tag, které obklopují obsah:

```html
<p>Toto je odstavec.</p>
```

Zde `<p>` je otevírací tag, Toto je odstavec. je text odstavce a `</p>` je zavírací tag.

**Nepárové tagy** stojí samy o sobě a obvykle obsahují atributy. Nemají zavírací tag:

```html
<img src="cesta_k_obrazku.jpg" alt="Popis obrázku" />
```

Tady `<img>` je tag pro obrázek, `src="cesta_k_obrazku.jpg"` říká, kde obrázek najít, a `alt="Popis obrázku"` je text, který se zobrazí, pokud se obrázek nenahraje.

Pamatujte, že **párové** tagy vytvářejí "kontejner" pro obsah, zatímco **nepárové** tagy jsou samostatné a často používají atributy k určení svých vlastností nebo chování.

## Základní HTML struktura

Každá **HTML** stránka má základní strukturu, která obsahuje několik klíčových prvků:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Název stránky</title>
  </head>
  <body>
    <!-- Obsah stránky -->
  </body>
</html>
```

- `<!DOCTYPE html>`: Definuje typ dokumentu a verzi **HTML**.
- `<html>`: Kořenový element, který obaluje celý **HTML** dokument.
- `<head>`: Obsahuje metadata a odkazy na externí zdroje jako jsou CSS soubory.
- `<title>`: Nastavuje název webové stránky, který se zobrazí v záložce prohlížeče.
- `<body>`: Obsahuje veškerý obsah webové stránky, který je viditelný pro uživatele.

## Základní HTML tagy

**HTML** dokument je tvořen různými tagy, které definují elementy na stránce. Zde je několik základních tagů:

### Nadpisy

**HTML** nabízí šest úrovní nadpisů, `<h1>` až `<h6>`, kde `<h1>` je nejdůležitější a `<h6>` nejméně.

```html
<h1>Toto je hlavní nadpis</h1>
<h2>Toto je podnadpis</h2>
```

### Odstavec

Odstavce se zapisují pomocí tagu `<p>`.

```html
<p>Toto je odstavec textu.</p>
```

### Odkazy

Tag `<a>` se používá pro vytvoření odkazu.

```html
<a href="https://www.example.com">Navštivte Example</a>
```

### Obrázky

Tag `<img>` se používá pro vložení obrázku.

```html
<img src="url_obrazku.jpg" alt="Popis obrázku" />
```

### Seznamy

Existují dva typy seznamů v **HTML**: neuspořádané (`<ul>` .. jako un-ordered list)
a uspořádané (`<ol>` .. ordered list), s položkami seznamu `<li>`.

```html
<ul>
  <li>Položka 1</li>
  <li>Položka 2</li>
</ul>
```

## Další tagy a atributy

**HTML** obsahuje mnoho dalších tagů a atributů, které vám umožní vytvářet bohaté a interaktivní webové stránky. Jak budete pokračovat ve výuce **HTML**, narazíte na pokročilejší tagy a techniky, jako jsou formuláře, tabulky a další.

Tento úvod pokrývá jen základy **HTML**, ale je důležitým krokem k pochopení, jak vytvářet a strukturovat webové stránky.

## Shrnutí

### Co je HTML tag?

- Základní stavební blok webových stránek.
- Má otevírací a zavírací tag, které obklopují obsah, nebo je samostatný s atributy.

### Základní HTML struktura

- `<!DOCTYPE html>`: Definuje typ dokumentu.
- `<html>`: Kořenový element obalující celý dokument.
- `<head>`: Obsahuje metadata a odkazy na externí zdroje.
- `<title>`: Název stránky zobrazený v záložce prohlížeče.
- `<body>`: Veškerý viditelný obsah stránky.

### Základní HTML tagy

- Nadpisy: `<h1>` až `<h6>`.
- Odstavec: `<p>`.
- Odkazy: `<a href="URL">`.
- Obrázky: `<img src="url" alt="popis">`.
- Seznamy: neuspořádané (`<ul>`) a uspořádané (`<ol>`), s položkami `<li>`.

### Další tagy a atributy

- HTML nabízí širokou škálu tagů a atributů pro tvorbu bohatých webových stránek.
- Další studium odhalí pokročilejší tagy a techniky, jako jsou formuláře a tabulky.
