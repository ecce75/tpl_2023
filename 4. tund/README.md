# CSS Layout ja Flexbox

Tänases tunnis uurime lähemalt kuidas paigutada HTML-i `<div>` ja muid elemente kasutades CSS Grid ja Flexboxi



## CSS Grid
- CSS Grid on kahemõõtmeline paigutussüsteem, mis korraldab sisu ridadeks ja veergudeks, moodustades võrgustiku.
- See on eriti kasulik keerukate, võrgupõhiste paigutuste loomisel, näiteks ajakirjades või portfooliotes.
- Saate täpselt määratleda võrgustiku elementide suuruse ja asukoha, mis muudab lihtsaks reageerivate ja keerukate kujunduste loomise.
- Peamised Gridi omadused:
    - `display: grid` et luua grid
    - `grid-template-columns` veergude arvu ja suuruse määramiseks
    - `grid-template-rows` ridade arvu ja suuruse määramiseks
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        .grid-container {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr; /* Kolm võrdse laiusega veergu */
            grid-gap: 10px; /* Vahe gridi elementide vahel*/
        }

        .grid-item {
            background-color: #3498db;
            color: white;
            padding: 20px;
            text-align: center;
        }
    </style>
</head>
<body>
    <div class="grid-container">
        <div class="grid-item">Item 1</div>
        <div class="grid-item">Item 2</div>
        <div class="grid-item">Item 3</div>
    </div>
</body>
</html>
```
## Flexbox
- Painduv kast on ühemõõtmeline paigutussüsteem, mis tagab ruumi ja elementide joondamise jaotamisele mööda ühte telge, kas horisontaalselt või vertikaalselt.
- See sobib suurepäraselt paindlike ja reageerivate paigutuste loomiseks, näiteks navigeerimismenüüde või listide jaoks.
- Flexboxi sees olevad elemendid saavad laieneda või kokku tõmbuda, et täita saadaval olev ruum, mis sobib suurepäraselt erinevate sisu suuruste käsitlemiseks.
- Peamised flexboxi omadused: 
    - `display: flex` et luua flexbox 
    - `justify-content` horisontaalseks joondamiseks
    - `align-items` vertikaalseks joondamiseks.
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        .flex-container {
            display: flex;
            justify-content: space-between; /* Elemendid on võrdselt jaotunud üle põhitelje */
            align-items: center; /* Elementide keskjoondamine vertikaalselt */
        }

        .flex-item {
            background-color: #e74c3c;
            color: white;
            padding: 20px;
            flex: 1; /* Elemendid laienevad, et täita saadaval olev ruum võrdselt */
            margin: 5px;
        }
    </style>
</head>
<body>
    <div class="flex-container">
        <div class="flex-item">Item 1</div>
        <div class="flex-item">Item 2</div>
        <div class="flex-item">Item 3</div>
    </div>
</body>
</html>
```
## Iseseisev töö
### 1. Gridi ja Flexboxi harjutused
- [Grid Garden](https://cssgridgarden.com): Kasvata ja päästa taimed, kasutades gridi. Lahendada 15. tasemeni (15 kaasarvatud)

- [Flexbox Froggy](https://flexboxfroggy.com): Aita konnadel vesiroosi lehed alla saada kasutades flexboxi. Lahendada 13. tasemeni

### 2. CSS-i loomine olemasolevale HTML-le
Selles ülesandes on teil ette antud HTML fail (`harjutus.html`), kus on teil varasemalt loodud konteiner, mis sisaldab kuut kasti. Teie ülesanne on luua `styles.css` leht, mis stiliseeriks nii konteineri kui ka kastid, et lõpptulemus näeks välja selline:
![alt text](Kastid_Cssiga.png)

- Tuletage meelde, kuidas HTML-failis viidatakse CSS-lehele (`<link ...>`)
- Tuletage meelde, mis selektoriga sai klasse stiliseerida
- Konteinerile tuleb luua grid, et korrektselt struktureerida kõik kastid.
- Kastide puhul aga peate kasutama flexboxi, et vastavalt joondada
- Selleks et iga paaritu kast oleks punast värvi, kasutage `:nth-child(odd)` süntaksi
- Siniste kastide `font-family` on `'Roboto', sans-serif`, punaste aga `'Monotype Corsiva', cursive`
- Sinise värvikood: `#3498db`, punane: `#e74c3c`
- Lehe tausta võite ise valida aga konteineri taust peab olema valge

> Kui jääte hätta õigete omaduste leidmise või muuga, siis googledage julgelt või kasutage ChatGPT-d. Looge endas varakult harjumus leida oma küsimustele vastused iseseisvalt kasutades kõikvõimalikke veebi ressursse.


### 3. Vabatahtlik ülesanne
[CSS Diner](https://flukeout.github.io/): Arendab selektorite kasutamist. Soovitan lahendada 15. tasemini.
## Kasulikud lingid
[CSS Gridi näited](https://gridbyexample.com/examples/)

[Interactive Guide to Flexbox](https://www.joshwcomeau.com/css/interactive-guide-to-flexbox/)

[Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)


