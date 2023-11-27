# Vormi valideerimine

Vormi valideerimine on oluline osa veebiarenduses, mis aitab tagada kasutajate sisestatud andmete õigsuse ja sobiva vormingu.

### Andmete Korrektsus
Vormi valideerimine tagab, et kasutajad sisestavad nõutud väljadele õiged andmed. Näiteks tagab see e-posti aadressi sisestamisel õige e-posti aadressi vormingu.

### Kasutajakogemuse Parandamine
Kui kasutaja täidab vormi ja teeb vea, annab valideerimine võimaluse näidata selget teadet vigadest ja juhiseid nende parandamiseks. See aitab kasutajatel vältida vigu ning parandab kasutajakogemust.

### Veebilehe Turvalisus
Vormi valideerimine aitab vältida pahatahtlikke sisestusi, nagu näiteks XSS (*Cross-Site Scripting*) või SQL *injection* rünnakud, mis võimaldavad andmeid manipuleerida.

### Andmete Täpsus
Kui veebileht kasutab sisestatud andmeid edasiste toimingute jaoks (nt andmete salvestamine andmebaasi), tagab korrektne valideerimine, et need andmed on töödeldavad ja kasutatavad vastavalt eeldustele.

![form_img](https://www.javascripttutorial.net/wp-content/uploads/2020/09/JavaScript-Form-Validation-Example.png)

## Valideerimise Tüübid:
### Tühjade Väljade Valideerimine:
Tagab, et olulised väljad ei jääks täitmata.
Näiteks nõutud väljade (nagu kasutajanimi, parool jne) täitmise kontroll.

### Vormingu Valideerimine:
Tagab, et sisestatud andmed vastavad kindlale vormingule.
Näiteks e-posti aadressi valideerimine, et veenduda, et see on kujul "nimi@veebileht.com".
### Pikkuse või Tugevuse Valideerimine:
Näiteks parooli nõue, et see oleks piisavalt pikk või sisaldaks erimärke ja numbreid.
### Kohandatud Valideerimine:
Spetsiifiliste reeglite rakendamine vastavalt veebirakenduse vajadustele.
Näiteks unikaalsete kasutajanime nõue või muud kohandatud reeglid.

## Näited
### Tühjade väljade kontrollimine
 ```html
 <form id="myForm">
    <input type="text" id="username" placeholder="Username"><br>
    <input type="password" id="password" placeholder="Password"><br>
    <button type="button" onclick="validateForm()">Submit</button>
</form>

<script>
function validateForm() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === '' || password === '') {
        alert('Please fill in all fields');
    } else {
        // Jätka vormi edasi töötlemisega
        console.log('Form submitted successfully');
    }
}
</script>
```

### Meili valideerimine kasutades regex-i
*Regular expressions* ehk *regex* on sümbolite kombinatsioonid, mis aitavad leida ja töödelda konkreetseid mustreid tekstis, näiteks otsida e-posti aadresse või kindlaid sõnu. Need võimaldavad täpset teksti analüüsimist ja manipuleerimist vastavalt etteantud mustrile.
```html
<form id="emailForm">
    <input type="email" id="email" placeholder="Email"><br>
    <button type="button" onclick="validateEmail()">Submit</button>
</form>

<script>
function validateEmail() {
    const email = document.getElementById('email').value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email.match(emailPattern)) {
        alert('Please enter a valid email address');
    } else {
        console.log('Valid email address');
    }
}
</script>
```

### Salasõna pikkuse kontroll
```html
<form id="passwordForm">
    <input type="password" id="newPassword" placeholder="New Password"><br>
    <button type="button" onclick="validatePassword()">Submit</button>
</form>

<script>
function validatePassword() {
    const newPassword = document.getElementById('newPassword').value;
    const minLength = 8;

    if (newPassword.length < minLength) {
        alert('Password should be at least 8 characters long');
    } else {
        console.log('Password meets length requirement');
    }
}
</script>
```

### Reaalajas välja kontroll
```html
<form id="liveValidationForm">
    <input type="text" id="phoneNumber" placeholder="Phone Number"><br>
    <span id="phoneError" style="color: red;"></span><br>
</form>

<script>
const phoneInput = document.getElementById('phoneNumber');
const phoneError = document.getElementById('phoneError');

phoneInput.addEventListener('input', function() {
    const phoneNumber = phoneInput.value;
    const phonePattern = /^\d{10}$/; // Eeldab kümnekohalist numbrit
    if (!phoneNumber.match(phonePattern)) {
        phoneError.textContent = 'Please enter a valid 10-digit phone number';
    } else {
        phoneError.textContent = '';
    }
});
</script>
```

### HTML 5 vormi valideerimine
```html
<form id="form">
    <input type="text" id="age" placeholder="Age" required><br>
    <input type="email" id="email" placeholder="Email" pattern="[^\s@]+@[^\s@]+\.[^\s@]+" required><br>
    <button type="submit">Submit</button>
</form>
```
- `required` atribuut tagab, et väli ei oleks tühi
- `pattern` atribuut tagab, et välja väärtus sobituks mingi regex mustriga

## Iseseisev töö

### 1. Registreerimisvorm
Implementeeri vormi valideerimissüsteem registreerimisvormi jaoks, mis sisaldab kasutajanime, e-posti, parooli ja parooli kinnitamise välju.

1. Loo uus HTML fail nimega `vormi_valideerimine.html`. Lisa sinna vajalikud registreerimisvormi väljad.
2. Kasuta JavaScripti vormi sisendite valideerimiseks järgmiste kriteeriumide alusel:
    - Kasutajanimi: Nõutav väli, peaks olema vähemalt 5 tähemärki pikk.
    - E-post: Nõutav väli, peaks vastama kehtivale e-posti formaadile.
    - Parool: Nõutav väli, peaks olema vähemalt 8 tähemärki pikk.
    - Parooli kinnitamine: Nõutav väli, peaks vastama sisestatud paroolile.

### 2. Vormi valideerimine ilma JS-ta
Ülesanne on luua sama valideerimisloogika registreerimisvormile, ilma et sa kasutaksid JavaScripti. 
- Kriteeriumid väljadele jäävad samaks, ainukeseks erinevuseks on parooli kinnitamise välja kadumine, sest seda poleks võimalik ilma JavaScriptita kontrollida.

---
> Kui iseseisev töö on tehtud, tutvuge regex-iga lähemalt läbi [selle mängu](https://www.therobinlord.com/projects/slash-escape).
## Kasulikud linkid
[W3 Form Validation](https://www.w3schools.com/js/js_validation.asp)