# Backend arendus

Täna sukeldume backend arenduse maailma, et mõista, kuidas luua täielikult toimiva veebirakenduse. Tutvume selliste mõistetega nagu `node.js`, `asünkroonsed API` päringud, `NPM` (Node Package Manager), ja marsruutimine (`routing`), avardades meie arusaama sellest, kuidas serveripoolne arendus toetab ja täiustab veebi kasutajakogemust.

## Mis on backend?
`Backend` arendus viitab veebirakenduse serveripoole arendamisele. See keskendub sellele, kuidas veebileht töötab, teeb uuendusi ja muudatusi (`CRUD`) ning loob andmebaase. Erinevalt `frontend` arendusest, mis tegeleb veebilehe visuaalse poolega, vastutab backend loogika, andmebaasidega suhtlemise, kasutaja autentimise, serveri seadistamise ja muu eest.

## Serveri-kliendi mudel
- **Server** *host*'ib rakendust ja vastutab vajaliku andme edastamise eest kliendile.
- **Klient**, tavaliselt veebibrauser, küsib serverilt infot ja kuvab selle kasutajale.
- Suhtlus serveri ja kliendi vahel toimub üldjuhul läbi `http` protocol

## Sissejuhatus Node.js-i
![node.js](https://miro.medium.com/v2/resize:fit:1358/1*IWnUIsLJV5gADU0eZic8YA.jpeg)
`Node.js` on populaarne JavaScripti *runtime*, mis on ehitatud `Chrome'i V8 JavaScript *engine*`'i peale. See võimaldab arendajatel kasutada JavaScripti serveripoolse koodi kirjutamiseks, tegeledes asjadega nagu andmebaasi toimingud, serveri loogika ja kliendi-serveri suhtlus.

## Miks Node.js?
- **JavaScript kõikjal:** Võimaldab kasutada JavaScripti nii frontendis kui ka backendis.
- **Asünkroonne ja sündmusel põhinev:** Käitleb tõhusalt mitut päringud korraga.
- **Suur ökosüsteem:** Juurdepääs suurele hulgale teekidele (package) läbi NPM-i (Node Package Manager).

![npm](https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Npm-logo.svg/1200px-Npm-logo.svg.png)

## Marsruutimine (*routing*)
Marsruutimine viitab sellele, kuidas veebirakendus reageerib erinevatele URL-idele ja HTTP päringutele. See võimaldab meil määrata, kuidas rakendus käitub, kui kasutaja pääseb juurde erinevatele lehtedele või saadab andmeid.

- **Põhiteekond ('/')**: See on vaikimisi teekond, mida kasutatakse rakenduse pealehele pääsemiseks.
- **Muud Teekonnad**: Näiteks `/about` või `/contact`. Need vastavad erinevatele lehtedele või funktsioonidele teie rakenduses.


## Node.js-i allalaadimine
Node.js-ga töö alustamiseks peate esmalt selle oma arvutisse alla laadima. Sama installatsiooniga saate nii `node.js`-i kui ka `npm`-i oma arvutisse.

- Külastage [Node.js ametlikku veebisaiti](https://nodejs.org/) ja laadige alla oma operatsioonisüsteemile sobiv viimane stabiilne versioon.
- Selleks, et kontrollida kas saite `node.js`-i ja `npm`-i õigesti installitud, sisestage terminali `node -v` või `npm -v` ja vaadake kas näete versiooninumbrit.

# `node.js` serverite loomine

Esialgu loome algelise serveri, mis lihtsalt saadab frontendi lihtsa sõnumi. Seejärel saadame sõnumi asemel terve `html` faili. Kui oleme saanud ühe lehe üles laetud siis vaatame kuidas marsruutimise teel lehti juurde lisada. Ning lõpuks vaatame kuidas seda kõike lihtsamalt teha kasutades `express.js` teeki.


- Selleks, et `express.js` teeki kasutada peame seadistama projekti konfiguratsioonifailid, mis sisaldavad viiteid projekti teekidele kasutades `npm init -y`.
> NB! Veenduge et asute õiges kaustas oma terminalis, enne kui käskluse sisestate. Õigesse kausta minemiseks kasutage `cd express_server`.
- Seejärel installige `express.js` sisestades `npm install express`. See tagab kõik vajalikud teegid API päringute tegemiseks.

# Iseseisev töö

**Ülesanne:** Looge lihtne portfoolio veebisait, mis hõlmab vähemalt kolme lehekülge: Avaleht (`/`), About (`/about`) ja Kontakt (`/contact`).

**Lehtede Sisu:**

- **Avaleht**: See leht peaks esitama üldist teavet kas mõne ajaloolise või väljamõeldud tegelase kohta. Võite kasutada sisu, mille koostasite kursuse esimestel nädalatel teemal "Minu esimene veebileht".
- **About**: Sellel lehel tuleb kuvada vähemalt kolm pilti koos nende nimedega allkirjadena.
- **Kontakt**: Lisage sellele lehele lühidalt tegelase kontaktteave.

**Tehnilised Nõuded:**

- Veebisait peab olema *host*'itud `express` serveris, kasutades eelmises näites toodud serveri struktuuri.
- Veebisait tuleb stiilselt vormistada `CSS`-i abil, veendudes, et kõikide lehtede stiilid on omavahel kooskõlas.
- Lehtede vahel navigeerimiseks tuleks kasutada `<a>` elemente.

