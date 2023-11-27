# API

Täna me õppime kuidas erinevaid rakendusi omavahel ühendada kasutades API-sid


## Mis on API?
API (Application Programming Interface) ehk rakendusliides on reeglite kogum, mis võimaldab ühel tarkvararakendusel suhelda teisega. Seda võib ette kujutada kui silda kahe erineva tarkvara vahel, mis võimaldab neil omavahel andmeid vahetada. 

## API tüübid
API-sid on mitut tüüpi, kuid veebiarenduses keskendume peamiselt veebi-API-dele. Veebi-API-d jagunevad veel omakorda:

- **Serveri API-d**: Asuvad serveri poolel ja on mõeldud suhtlemiseks klientrakendustega. Need määratlevad, kuidas server reageerib klientide päringutele ning võimaldavad andmete vahetamist serveri ja veebirakenduse vahel.
- **Kliendi API-d**: Need võimaldavad suhtlemist kasutaja seadmega (brauser või mobiilirakendus) ja kasutajaliidesega, pakkudes ligipääsu sellistele funktsioonidele nagu kaamera, mikrofon, GPS jne.


## API päringud ja vastused
API-ga suhtlemisel tehakse päringuid andmete saamiseks või saatmiseks. Enamasti toimub andmevahetus JSON-formaadis.

> JSON (JavaScript Object Notation) on andmevorming, mida kasutatakse andmete salvestamiseks ja vahetamiseks. See on tekstipõhine, kergesti loetav nii inimestele kui ka masinatele. Nt. {"nimi": "Marta", "vanus": 25}


- **Päring (Request)**: Saadame API-le päringu, mis sisaldab teavet selle kohta, mida soovime teada saada või teha.
- **Vastus (Response)**: API vastab päringule, saates tagasi andmed või teabe, tavaliselt JSON-formaadis, mida saame seejärel oma rakenduses kasutada.

## HTTP protokoll
HTTP (HyperText Transfer Protocol) on protokoll, mida kasutatakse veebilehtede ja muu veebis oleva sisu edastamiseks. See toimib klient-server mudelil, kus:

- **Klient (näiteks veebibrauser)** saadab päringu (request) serverile.
- **Server** töötleb seda päringut ja saadab tagasi vastuse (response).

HTTP päringud on erinevat tüüpi, kuid kõige levinumad on:
- **GET**: Andmete pärimine serverist.
- **POST**: Andmete saatmine serverisse.

![HTTP meetodid](https://lh3.googleusercontent.com/-GxqvaWxxcuQ/YFgdlo8vTaI/AAAAAAAAmmY/3EQdlS1ohHEgI0HooFs4sCn5Z5jRo5lCgCLcBGAsYHQ/w1200-h630-p-k-no-nu/image.png)
Erinevad HTTP meetodid

![HTTP sõnum](https://www.oreilly.com/api/v2/epubs/1565925092/files/httpatomoreillycomsourceoreillyimages96838.png)   
HTTP sõnumi struktuur

## API-päringud JavaScriptis
`Fetch API` on JavaScriptis kasutatav tööriist, mis võimaldab teha võrgupäringuid (näiteks API-dele). Fetch API kasutamine:

```js
fetch('https://api.example.com/data')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
  ```


## Ilmateade kasutades OpenWeather API-d

**Eesmärk**: Luua veebirakendus, mis kasutab [OpenWeatherMap](https://openweathermap.org/) API-d, et kuvada reaalajas ilmaandmeid valitud linnas.

Selleks läheb meil tarvis OpenWeatherMapi API võtit: `b1ea1a8e89cfd9a0329102568f84080d`

API aadress: `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`


## Iseseisev töö: API Integreerimine

**Eesmärk**: Luua veebirakendus, mis kasutab väliseid API-sid andmete hankimiseks ja kuvamiseks.

Valige üks järgmistest lihtsatest avalikest API-dest ja looge veebirakendus, mis teeb API päringu ning kuvab saadud andmed kasutajasõbralikul ja huvitaval viisil.

    Kassi API (The Cat API): Kuvab juhuslikke kassipilte.
    API: https://thecatapi.com/

    Koera API (The Dog API): Sarnane Kassi API-le, kuid koertega.
    API: https://thedogapi.com/

    REST Riigid (REST Countries): Annab teavet riikide kohta (nimi, pealinn, rahvaarv jne).
    API: https://restcountries.com/

    Nalja API (JokeAPI): Annab juhuslikke nalju.
    API: https://v2.jokeapi.dev/