# JS DOM Manipulation
- `Document Object Model (DOM)` iseloomustab veebilehe **ülesehitust**, mis on moodustatud **HTML dokumendi alusel**. Iga DOM-i objekt vastab mingile dokumendi elemendile nagu paragraaf, pealkiri, pilt jne.
- DOM võimaldab arendajatel **muuta veebilehe sisu ja struktuuri reaalajas**, luues veebilehe **interaktiivseks**.
- JS jookseb brauseris, tänu millele saab veebilehe elemente manipuleerida, stiili muuta, liigutada jne. Samuti saab sellega teha päringuid (`fetch`) teistelt veebilehtedelt või serveritelt ja teha kõike, mida tavaline programmeerimiskeel peaks suutma teha. Peamine piirang, kui käivitada JS-i brauseris, on et ei saa ligi süsteemioperatsioonidele nagu teiste programmeerimiskeelte puhul (nt "faili avamine", "faili kustutamine", "arvuti väljalülitamine").

![DOM](https://www.w3schools.com/js/pic_htmltree.gif)

## DOM elementide valimine

DOM elementide valimine loob aluse veebilehe sisuga töötlemiseks. Kuna DOM kujutab endast HTML-dokumendi struktuuri hierarhilise puuna, rakenduvad stiili muudatused ka kõikidele *child* elementidele.

- `getElementById`: Võimaldab meil valida elemendi selle unikaalse id atribuudi järgi. 
```js 
const myElement = document.getElementById('uniqueID');
```

- `getElementsByClassName`: Elementide valimiseks nende klassinime järgi. See tagastab elementide kogumi, mida saab läbi käia.
```js
const elementsWithClass = document.getElementsByClassName('myClass');
```

- `getElementsByTagName`: Võimaldab valida elemente nende HTML-tag nime järgi. Näiteks saate valida kõik lehe `div` elemendid.
```js
const divElements = document.getElementsByTagName('div');
```

- `querySelector` ja `querySelectorAll`: Need kaasaegsed meetodid võimaldavad paindlikumat elementide valimist. `querySelector` valib esimese sobiva elemendi, samas kui `querySelectorAll` valib kõik sobivad elemendid CSS-selectori põhjal.
```js
const firstMatch = document.querySelector('.myClass'); // Valib esimese elemendi klassiga 'myClass'.
const allMatches = document.querySelectorAll('p'); // Valib kõik <p> elemendid.
```


## Sündmused (Events)
Veebilehe funktsionaalsus tugineb suurel määral sündmustel. Sündmus (Event) on mingi tegevus, mis leiab aset veebilehel. Sündmus võib olla:
- user clicked on a button,
- user moved the mouse around,
- user submitted a form,
- user hovered over a HTML element
- user pressed a key down on a keyboard

Sündmusi saab jäädvustada järgmiselt:
```js
// Don't forget to wrap your code inside DOMContentLoaded event listener, 
// because we need to wait for the DOM to be loaded before we can start working with it.
document.addEventListener('DOMContentLoaded', function() {

    document.addEventListener('click', function(event) {
        var target = event.target;
        if (target.classList.contains('my-green-button')) {
            // do something
        }
    });

    document.addEventListener('mousemove', function(event) {
        // Print the mouse position
        console.log(event.pageX);
        console.log(event.pageY);
    });

    // Listen to submit events on the form
    // Let's say the form looks like this:
    // <form>
    //     <input id="input-name" type="text" name="name" />
    //     <input id="input-age" type="text" name="age" />
    //     <button id="button-submit" type="submit">Submit</button>
    // </form>
    document.addEventListener('submit', function(event) {
        // Optionally, prevent the form from submitting (this will prevent the page from reloading and you most probably want to do this)
        event.preventDefault();
        
        // get the form input values
        var name = document.getElementById('input-name').value; 
        var age = document.getElementById('input-age').value;

        // NB! Don't forget that input elements by default store the value as a STRING, so if you want to use the age as a NUMBER, you need to parse it
        age = parseInt(age);
        // you can also do age = parseFloat(age); Then you have the number as 23.00, not 23

        // do something with the values
    });

    // Hovered over the button
    document.addEventListener('mouseover', function(event) {
        var target = event.target;
        if (target.classList.contains('my-green-button')) {
            // do something
        }
    });

    // Hovered out of the button
    document.addEventListener('mouseout', function(event) {
        var target = event.target;
        if (target.classList.contains('my-green-button')) {
            // do something
        }
    });

    document.addEventListener('keydown', function(event) {
        console.log(event.key); 
        if (event.key === 'ArrowLeft') {
            // do something
        }
        // Full reference: https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key/Key_Values
    });

    // You can also listen for keyup events
    document.addEventListener('keyup', function(event) {
        console.log(event.key); 
        if (event.key === 'ArrowLeft') {
            // do something
        }
    });

    // You can add Events to elements as well, not just the document.
    // I prefer to use the document, because then if you programmaically add elements to the page, 
    // you don't have to add the event listeners to them as well.
    // But you can do it like this:
    var myButton = document.getElementById('my-button');
    myButton.addEventListener('click', function(event) {
        // do something
    });
});
```
## Elementidega manipuleerimine:

### Teksti sisu muutmine:
  - Saate kasutada `textContent` omadust, et muuta HTML elemendi tekstisisu.
    ```javascript
    const myElement = document.getElementById('myElement');
    myElement.textContent = 'Uus tekstisisu';
    ```

### Atribuutide uuendamine:
  - Elementidel on erinevad atribuudid, nagu `src`, `href` ja `class`. Neid atribuute saab JavaScripti abil muuta.
    ```javascript
    const myImage = document.getElementById('myImage');
    myImage.src = 'uus-pilt.jpg';
    ```

### Stiilide muutmine:
  - Omadus `style` võimaldab muuta elemendi CSS stiile. Saate muuta omadusi nagu `color`, `fontSize` ja `backgroundColor`:
    ```javascript
    const myElement = document.getElementById('myElement');
    myElement.style.color = 'sinine';
    myElement.style.fontSize = '20px';
    myElement.style.backgroundColor = 'helehall';
    ```

## Elementide kustutamine, loomine ja lisamine:

###  Elementide kustutamine:
  - Elemendi eemaldamiseks kasutage meetodit `removeChild`.
    ```javascript
    const parentElement = document.getElementById('parentElement');
    const childElement = document.getElementById('childElement');
    parentElement.removeChild(childElement);
    ```

### Uute elementide loomine:
  - Saate kasutada meetodit `document.createElement`, et luua uusi HTML elemente. Näiteks uue lõigu elemendi loomine:
    ```javascript
    const newParagraph = document.createElement('p');
    ```

### Elemendi omaduste määramine:
  - Kui olete loonud uue elemendi, saate sellele omadused ja atribuudid määrata, nagu juba olemasolevatele elementidele:
    ```javascript
    newParagraph.textContent = 'See on uus lõik!';
    newParagraph.className = 'oluline';
    ```

- *Elementide lisamine DOM-ile:*
  - Pärast uue elemendi loomist ja konfigureerimist saate selle DOM-ile lisada meetoditega nagu `appendChild` või `insertBefore` olemasolevale elemendile. Näiteks uue lõigu lisamine `myDiv` ID-ga `<div>` elemendile:
    ```javascript
    const myDiv = document.getElementById('myDiv');
    myDiv.appendChild(newParagraph);
    ```


# Iseseisev töö
## TextDisplay
Loo veebileht, mis kuvab läbi `<input>` elemendi sisestatud teksti. HTML osa on juba olemas (testDisplay.html), sinu ülesanne on lisada JS, et see kuvaks õigesti.

## ShoppingList
Loo veebileht, mis laseb ostunimekirja lisada erinevaid toiduaineid ja kuvab need. HTML olemas (shoppingList.html), tarvis vaid JS lisada.

# Kasulikud linkid
- [DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)
- [Element object](https://developer.mozilla.org/en-US/docs/Web/API/Element)