# CSS - Kaskádové styly

## Odkazy

- [MDN - CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [Jak psát web - CSS](https://www.jakpsatweb.cz/css/)
- [W3C - CSS Tutorial](https://www.w3schools.com/css/)

CSS (Cascading Style Sheets) definuje vzhled a formátování HTML dokumentů.
Pomocí CSS můžete ovlivnit barvy, písma, rozložení a mnoho dalších aspektů webových stránek.

## Základní syntax

CSS pravidlo se skládá z selektoru a deklaračního bloku:

```css
selektor {
  vlastnost: hodnota;
}
```

- Selektor určuje HTML prvek, který chcete stylovat.
- Vlastnost je styl, který chcete změnit (např. barva, velikost písma).
- Hodnota specifikuje požadovaný efekt pro danou vlastnost.

### Příklad

Tento kód nastaví všechny odstavce (`<p>`) na červenou barvu a velikost písma 16 pixelů.

```css
p {
  color: red;
  font-size: 16px;
}
```

## Jak připojit CSS k HTML

### Interní styl

Přímo ve vašem HTML souboru pomocí `<style>` tagu v hlavičce (`<head>`).

```html
<head>
  <style>
    p {
      color: green;
    }
  </style>
</head>
```

### Externí styl

Odkazem na externí CSS soubor pomocí `<link>` tagu v hlavičce (`<head>`).

```html
<head>
  <link rel="stylesheet" href="styles.css" />
</head>
```

## Základní selektory

- Typový selektor (např. `p`, `div`): Vybere všechny prvky daného typu.
- Třídní selektor (např. `.trida`): Vybere všechny prvky s danou třídou.
- ID selektor (např. `#id`): Vybere prvek s daným ID.

## Základní vlastnosti

- `color`: Barva textu.
- `background-color`: Barva pozadí.
- `font-size`: Velikost písma.
- `font-family`: Typ písma.
- `margin`: Vnější odsazení.
- `padding`: Vnitřní odsazení.
- `border`: Rám prvků.

## Flexbox

Flexbox je metoda pro uspořádání prvků v jednorozměrném layoutu. Umožňuje
snadno zarovnat prvky vedle sebe nebo je distribuovat v rámci kontejneru.

```css
.container {
  display: flex;
  justify-content: center; /* Zarovnání vodorovně */
  align-items: center; /* Zarovnání svisle */
}
```

[Krásný přehled flexboxu najdeš zde.](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

## CSS Grid

CSS Grid umožňuje vytvářet dvourozměrné layouty. Je to mocný nástroj pro vytváření komplexních designů s přesným umístěním prvků.

```css
.grid-container {
  display: grid;
  grid-template-columns: auto auto auto; /* Tři sloupce stejné šířky */
  gap: 10px; /* Mezery mezi prvky */
}
```

CSS je rozsáhlý jazyk s mnoha možnostmi. Tento cheat sheet pokrývá jen základy, ale existuje mnoho dalších vlastností a technik, které můžete prozkoumat.
