
# Tund 6. JavaScripti harjutused
Täna harjutame mõningaid põhilisi programmeerimisalgoritme. See aitab sul paremini tutvuda oluliste võtmesõnade ja kontseptsioonidega.
Harjutused ei pruugi raskusastme poolest suureneda, kuid nad tutvustavad JavaScripti erinevaid aspekte ükshaaval.

## Tunni ülesehitus
- Loo oma repos kaust nimega "js_harjutused", kuhu lood index.html koos `<script src="main.js"></script>`
- Seejärel loo `main.js`, kuhu kirjutad iga ülesande lahenduse eraldi funktsiooni, nt. `function harjutus1() {}` jne
- Kui ülesanne lahendatud, kutsu funktsioon üles


## Meeldetuletus
### Võrdlusoperaatorid:
* `===` (range võrdsus)
* `!==` (range ebavõrdsus)
* `<` (väiksem kui)
* `>` (suurem kui)
* `<=` (väiksem või võrdne)
* `>=` (suurem või võrdne)

### Loogilised operaatorid
* `&&` (ja)
* `||` (või)
* `!` (mitte)

### Matemaalised operaatorid:
* `+` (liitmine). Näide: 1 + 1 // 2
* `-` (lahutamine). Näide: 1 - 1 // 0
* `*` (korrutamine). Näide: 2 * 2 // 4
* `/` (jagamine). Näide: 5 / 2 // 2,5
* `%` (jääk) - tagastab jagamise jäägi. Näide: 5 % 2 // 1


# Stringide ühendamine ja printimine
```javascript
let Name = 'Samuel';
let MiddleName = "L";
let FamilyName = `Jackson`; 
const name = "Marek";
console.log(`Hello, ${name}!`);

// Stringide ühendamine
console.log('Tere! Minu nimi on ' + Name + ' ' + MiddleName + ' ' + FamilyName + '.');

let FullName = Name + ' ' + MiddleName + ' ' + FamilyName;
console.log(`Tere! Minu nimi on ${FullName}.`);

let Age = 56;
let Height = 1.80;
let Weight = 75;

consolelog(`Ma olen ${Age} aastat vana. Olen ${Height} meetrit pikk ja kaalun ${Weight} kilogrammi.`);

```

## Ülesanne 1
Kirjuta funktsioon, mis võtab sisendiks nime ja prindib konsooli tervituse, koos sisestatud nimega.
`function harjutus1(nimi) {}`

## Ülesanne 2
Kirjuta funktsioon, mis võtab 3 muutujat: auto mark, auto mudel ja auto värv. Programm peaks konsooli prindima järgmise lause: "Minu auto on punane Ford Mustang." `harjutus2(mark, mudel, värv)`

## Ülesanne 3
Kirjuta funktsioon, mis võtab sisendiks püramiidi põhja pindala ja kõrguse, leiab püramiidi ruumala ja prindib selle lausena.

# Stringi meetodid
```js
let myName = 'Marek';
document.write('TERE, ' + myName.toUpperCase() + '!');

// Mõned stringi meetodid:
console.log(`Kenno  `.slice(0, 3))
console.log("Õun, Banaan, Kiivi".substr(5))

if (myName.length > 3) {
    console.log('jep');
}
```

## Ülesanne 4
Kirjuta funktsioon, mis võtab sisendiks nime ja väljastab selle lühendatud kujul. Kui nimi on pikem kui 5 tähemärki, lõigatakse nimi 5. tähemärgini ja lisatakse "..." lõppu. Kui nimi on 5 tähemärki või lühem, jääb see muutumatuks.

## Ülesanne 5
Kirjuta funktsioon, mis võtab sisendiks stringi ja tagastab selle pööratud versiooni. Kasuta selleks meetodeid nagu `split`, `reverse` ja `join`.

# Tsüklid (Loop)
 * For - kui tead, mitu korda soovid koodi korrata.
 * While - kui sa ei tea, mitu korda koodi soovid korrata.
 * Do while - kui soovid koodi vähemalt ühe korra käivitada.
```javascript
For- tsükkel
for (let i = 0; i < 10; i++) {
    console.log(i);
}
// For-tsüklil on 3 osa: algväärtus, tingimus ja lõplik avaldus.
// Algväärtus käivitatakse vaid korra enne tsükli algust.
// Tingimus määrab, millal tsükkel peatub.
// Lõplik avaldus käivitatakse pärast iga tsükli lõppu.

// For-tsükkel jätkub seni, kuni tingimus on tõene.
// For-tsükkel lõppeb, kui tingimus muutub vääraks.

// While-tsükkel
let i = 0;
while (i < 10) {
    console.log(i);
    i++;
}
// While-tsükkel jätkub seni, kuni tingimus on tõene.
// While-tsükkel lõppeb, kui tingimus muutub vääraks.

// Do while-tsükkel
let i = 0;
do {
    console.log(i);
    i++;
} while (i < 10);
// Do while-tsükkel käivitab koodiploki alati vähemalt ühe korra, isegi kui tingimus on väär.
// Do while-tsükkel jätkub seni, kuni tingimus on tõene.
// Do while-tsükkel lõppeb, kui tingimus muutub vääraks.

// NB! Ülduhul eelistatakse for-tsüklit üle while-tsükli.
```

## Ülesanne 6
Kirjuta funktsioon, mis prindib numbrid 1-st 100-ni konsooli. Kasuta for-tsüklit.

## Ülesanne 7
Kirjuta funktsioon, mis prindib kõik täisarvud 100-st 1-ni konsooli. Kasuta while-tsüklit.

# Massiivid (Array)
- Esimene element massiivis omab indeksi 0. Teine element massiivis omab indeksi 1. Kolmas element massiivis omab indeksi 2. Ja nii edasi.
- Massiivi pikkus on elementide arv selles.
- Viimane element massiivis omab indeksi, mis on võrdne massiivi pikkusest lahutatuna 1.
- Massiividel võivad olla mis tahes tüüpi andmed. `let  massiiv = [1, 2, 3, {vanus: 4}, 5, 6, 7, 8, 'Tere', 10]`
- Kui soovida saada elementi n indexil kasutatakse süntaksi `massiiv[n]`
- Massiivid võivad olla tühjad. Näide: `[]`
- Massiivid võivad sisaldada teisi massiive. Näide: `[[1, 2, 3], [4, 5, 6], [7, 8, 9]]`
- Saad massiivi pikkust kontrollida pikkuse omadusega. Näide: `[1, 2, 3].length` // 3
- Saad lisada massiivile elemente push meetodiga. Näide: `[1, 2, 3].push(4)` // [1, 2, 3, 4]
- Saad massiivist eemaldada viimase elemendi pop meetodiga. Näide: `[1, 2, 3].pop()` // [1, 2]


## Ülesanne 10
Kuuluta muutuja `myNameComponents = ['Samuel', 'L', 'Jackson'];`.
Kirjuta programm, mis prindib järgmise lause konsooli: "Minu nimi on Samuel L Jackson." Kasuta ainult `myNameComponents` muutujat.
> Võid kasutada `join` meetodit, et ühendada massiivi elemendid stringiks või `${muutuja}` süntaksi stringis.

## Ülesanne 11
Loo funktsioon, mis arvutab õpilase keskmise hinde. Sisendiks on hinnete massiiv, mis võib näha selline: `hinded = [3, 5, 4, 3 , 4, 5, 3, 4, 2]`. Loopi üle massiivi, liites hinded kokku ning jaga summa hinnete arvuga massiivis. Prindi keskmine hinne lausena.

# If laused
- Võimaldavad teatud tingimuse korral käivitada koodiplokki.
- Saab kasutada koos või ilma else lausega.
- Saab kasutada koos või ilma else if lausega.
- Saab pesitseda (nesting)
- Saab kasutada koos loogiliste operaatoritega &&, || ja !.
```javascript
if (väide === false) {
    if (a === 'a' || b === 'b') {
        // tee midagi
    }
}

// Tingimus hinnatakse. Kui tingimus on tõene, käivitatakse koodiplokk.
// Kui tingimus on väär, koodiplokki ei käivitata.

// Else if lause
if (number === 1) {
    // tee midagi
} else if (number === 2) {
    // tee midagi muud
} else {
    // tee midagi muud
}

// Loogilised operaatorid
// && operaatorit kasutatakse kontrollimaks, kas mõlemad tingimused on tõesed.
// || operaatorit kasutatakse kontrollimaks, kas vähemalt üks tingimus on tõene.
// ! operaatorit kasutatakse kontrollimaks, kas tingimus on väär.
// Näide: 
if ( väide === true && 'a' === 'a' || 'b' !== 'z') {
    // tee midagi
}

// Loogiliste operaatorite järjestust: !, &&, ||.
// Näide:
if (väide === true && 'a' === 'a' || 'b' !== 'z' && 'c' === 'c') {
    // tee midagi
}

// Saad kasutada sulge, et muuta loogiliste operaatorite järjestust.
// Näide:
if (tingimus === true && ('a' === 'a' || 'b' !== 'z') && 'c' === 'c') {
    // tee midagi
}
```

## Ülesanne 12
Kirjuta funktsioon, mis loeb numbrid 1-st 100-ni. Kui number jagub 3-ga, prindi "Tallinna". Kui number jagub 5-ga, prindi "Prantsuse". Kui number jagub nii 3 kui 5-ga, prindi "Lütseum". Kui number on 50, prindi "Tallinna Prantsuse Lütseum".

## Ülesanne 13
Kirjuta funktsioon, mis kontrollib, kas sisestatud massiiv sisaldab nime "Marek". Kui see nimi on massiivis, prindi "Marek on massiivis" konsooli. Kui seda nime massiivis pole, prindi "Marek pole massiivis" konsooli.

# Objektid
- Kasutatakse andmete hoidmiseks võtme-väärtuse (key-value) paarides.
- Luuakse loenduritega {}.
- Saab pesitseda
```js
var õpilaseObjekt = {
    nimi: 'Marek',
    vanus: 23,
    teabJsObjektidest: true,
    aadress: {
        tänav: 'Hariduse 3',
        linn: 'Tallinn',
        riik: 'Eesti'
    }
};

// Objekte saab kätte punktiga.
console.log(õpilaseObjekt.nimi); // Marek
console.log(õpilaseObjekt.aadress.linn); // Tallinn

// Objekte saab kätte ka sulgudega.
console.log(õpilaseObjekt['nimi']); // Marek
console.log(õpilaseObjekt['aadress']['linn']); // Tallinn

// Objektid on üks kasulikumaid andmestruktuure JavaScriptis.
var inimesteAutod = {
    'Liis': 'Audi',
    'Samuel': 'BMW',
    'Marek': 'Mercedes',
};

for (var inimene in inimesteAutod) { // pane tähele for-in-tsüklit
    console.log(inimene + ' omab autot ' + inimesteAutod[inimene]);
}
```
## Ülesanne 14
Antud on massiiv inimestest koos nende omadustega. Iga inimese kohta on teada nimi, vanus, aadress, telefon ja e-post. Sinu ülesanne on luua funktsioon, mis leiab järgmised andmed:

- Kõige vanema inimese nimi.
- Inimese nimi, kellel on kõige pikem aadress (kõige rohkem tähti aadressis).
- Inimese nimi, kellel on kõige lühem telefoninumber (kõige vähem numbritega telefonis) .
- Inimese nimi, kelle e-posti aadressis sisaldub sõna "eesti".

Kasuta selleks objektide omaduste võrdlemist ja massiivide töötlemismeetode. Prindi leitud andmed konsooli ilusasti vormistatuna.

```js
let inimesed = [
    {
        nimi: 'Alice',
        vanus: 28,
        aadress: 'Pargi 7',
        telefon: '23857493',
        email: 'alice@eesti.ee'
    },
    {
        nimi: 'Bob',
        vanus: 32,
        aadress: 'Tänavaküla 12',
        telefon: '293463847',
        email: 'bob@gmail.com'
    },
    {
        nimi: 'Marek',
        vanus: 22,
        aadress: 'Metsatee 3',
        telefon: '8594032',
        email: 'marek@example.com'
    }
];
```