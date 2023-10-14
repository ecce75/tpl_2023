# Javascripti Põhitõed
Tänases tunnis tutvume JavaScriptiga (JS), mis on võimas skriptimiskeel, mida kasutatakse veebilehtede muutmiseks interaktiivseks.

## Mis on Javascript?
- JavaScript on programmeerimiskeel, mis võimaldab lisada funktsionaalsust ja interaktiivsust veebilehtedele.
- Erinevalt HTML-ist ja CSS-ist, mida kasutatakse peamiselt struktuuri ja stiiliga seotud asjade jaoks, kasutatakse JS-i dünaamiliste käitumiste ja kasutajatevaheliste toimingute jaoks.

 > ### Skriptimis- vs Programmeerimiskeel
 > Programmeerimiskeeled nagu Python ja Java on võimsamad ja sobivad keerukamate projektide jaoks, samas kui skriptimiskeeled nagu JavaScript ja Ruby on lihtsamad ning keskenduvad konkreetsetele ülesannetele, näiteks veebilehtede loomisele. Javascripti peetakse nii skriptimis- kui ka programmeerimiskeeleks.
 
## Põhiline Süntaks
- JavaScripti kood paigutatakse tavaliselt `<script>` siltide vahele HTML-dokumendis või välisesse .js faili, mis on HTML-ga seotud.
- Siin on näide JavaScripti koodist HTML-failis:
```html
<!DOCTYPE html>
<html lang="et">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScripti Leht</title>
</head>
<body>
    <div id="myButton"> button</div>
    <script>
        // JavaScripti kood läheb siia
        alert("Hello world!");
        // See on kommentaar
        // Kasuta kommentaare, et jätta märkmeid tulevikuks ja selleks, et teised mõistaksid, mis sa oled kirja pannud
    </script>
</body>
</html>

```


## Muutujad (Variables)
- Muutujaid kasutatakse andmete salvestamiseks
- Saate muutujaid deklareerida kasutades var, let või const.
- Enim levinud muutujatüübid on
    - Number: Arvud
    - String: Tekstid
    - Boolean: Loogikaväärtused
    - Array: Massiivid
    - Object: Objektid
```js
let age = 25; // Number
let name = "John"; // String
let isStudent = false; // Boolean
let fruits = ["apple", "banana", "orange"]; // Array
let person = { firstName: "John", lastName: "Doe" }; // Object
```

## Funktsioonid
- Funktsioonid on korduvkasutatavad koodiplokid, mis täidavad kindlat ülesannet.
```js
function tervita(nimi) {
    console.log("Tere, " + nimi + "!");
}
tervita("Alice");
```

## Tingimuslause  (Conditional Statement)
- Tingimuslauseid, nagu `if` ja `else`, kasutatakse otsuste tegemiseks teie koodis.
```js
let vanus = 18;

if (vanus >= 18) {
    console.log("Olete täiskasvanu.");
} else {
    console.log("Olete alaealine.");
}
```


## Tsüklid (loops)
- Tsükleid, nagu `for` ja `while`, kasutatakse tegevuste mitmekordseks kordamiseks.
```js
for (let i = 1; i <= 5; i++) {
    console.log("Loendamine: " + i);
}

let arv = 1;

while (arv <= 5) {
    console.log("Loendamine: " + arv);
    arv++; // Lisame iga kord 1 arvu, et mitte lõputult tsüklisse jääda
}
```

## Sündmused ja sündmuste kuulajad (Event Listeners)
- JavaScript saab kasutaja toimingutele, näiteks klõpsudele või klahvivajutustele, reageerida sündmuste kuulajate abil.
```js
var nupp = document.getElementById("minuNupp");

nupp.addEventListener("click", function () {
    console.log("Nuppule klikiti!");
});
```

## Väljund (Output)
- Väljundite näitamiseks brauseri konsoolis saate kasutada console.log() funktsiooni.
```js
console.log("See kuvatakse brauseri konsoolis");
```

> Brauseri konsooli nägemiseks tuleb teil avada teie brauseri arendaja tööristad (developer tools). See on veebibrauseri osa, mis võimaldab arendajatel lehti uurida, vigu parandada ja isegi JavaScripti konsooliga mängida. See on suurepärane vahend õppimiseks ja tõhusaks arendamiseks. Selleks:
> - **Laadi leht, mida soovid uurida.** 
> - **Vajutad paremklõpsu hiirel mis tahes mis osa peal**
> - **Vali kontekstimenüüst "Inspect" või "Inspect Element".** See toob esile Developer Tools'i.
> - **Klõpsa Developer Tools'i ülaosas olevale "Console" või "Konsool" vahekaardile.**



## Kasutajalt Sisendi Küsimine (Prompt)
- `prompt` funktsiooni kasutatakse, et küsida kasutajalt sisendit.
- Kasutaja antud sisendit saab salvestada muutujasse.
```js
let nimi = prompt("Sisestage oma nimi:");
console.log("Tere, " + nimi + "!");
```

## Teateaken   
 - `alert` funktsiooni kasutatakse, et kuvada kasutajale teade aknas.
 ```js
 alert("See on teade kasutajale!");
```

## Võrdlusoperaatorid
- `==` (Võrdub): Kontrollib, kas kaks väärtust on võrdsed. Näiteks: `x == y`

- `!=` (Ei võrdu): Kontrollib, kas kaks väärtust ei ole võrdsed. Näiteks: `a != b`

- `<` (Suurem kui): Kontrollib, kas üks väärtus on suurem kui teine. Näiteks: `pikkus > laius`

- `<=` (Suurem või võrdub): Kontrollib, kas üks väärtus on suurem või võrdub teisega. Näiteks: `aeg1 >= aeg2`

# Loogikaoperaatorid
- `&&` (Ja): Kontrollib, kas kaks tingimust on tõesed. Näiteks: `vanus >= 18 && onOpilane`

- `||` (Või): Kontrollib, kas vähemalt üks tingimus on tõene. Näiteks: `hooaeg === "suvi" || ilmOnSoe`

- `!` (Ei): Pöörab tingimuse vastupidiseks. Näiteks: `!onViilutatudLeib`

# Koodinäited
## Lihtne Kalkulaator
Ülesanne on luua lihtne kalkulaator, mis suudab teha nelja põhilist matemaatilist toimingut: liitmine, lahutamine, korrutamine ja jagamine.

## Arvu äraarvamine (**Kodune Töö**)
Ülesanne on luua programm, mis aitab kasutajal ära arvata juhuslikult genereeritud arvu, vahemikus 1 kuni 100.

- Esialgu peab programm juhuslikult genereerima arvu 1 ja 100 vahel.
- Seejärel läheb kasutajalt tarvis sisendit, kasutades `prompt` funktsiooni 
    - `prompt` annab `string`-i välundiks, leia moodus kuidas see arvuks ehk `int` tüüpi muuta
- Programm annab sõnumi kas valitud arv on genereeritud arvust suurem või väiksem (tingimuslaused)
- Juhul kui arvud on võrdsed, annab programm vastuse, et oled arvu ära arvanud

## Lingid
[The Weird History of Javascript](https://www.youtube.com/watch?v=Sh6lK57Cuk4)