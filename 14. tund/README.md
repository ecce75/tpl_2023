# Kursusetöö

Täna saate alustada oma kursuse lõputööga, mis võtab kokku kõik seni õpitud teemad. Kuid enne alustamist, palun võtke hetk aega järgneva küsimustiku täitmiseks:

[School Harrassment Survey](https://docs.google.com/forms/d/e/1FAIpQLScML_yO-CrPDI0a7or7ZZmUp5x6YaaBC0v27Inj5ohp89aQKA/viewform)

## Juhend

Eesmärgiks on luua interaktiivne veebirakendus, mis tutvustab teie poolt valitud tegelast. Rakendus peaks olema laiendus kodutööle, kus te juba lõite mitmeleheküljelise veebilehe, mis on majutatud `express.js` serveril.

## Nõuded ja Ülesehitus

### Backend

- **`Server`**: Rakendus peab töötama `Node.js` serveril, kasutades `express.js` raamistikku.
- **`Kasutaja Registreerimine ja Autentimine`**: Rakendus peab võimaldama kasutajate registreerimist ja autentimist. Selleks, et sisule ligi pääseda, peavad kasutajad olema rakendusse registreeritud ja sisse logitud.
- **`API Integratsioon`**: Lisage rakendusse vabalt valitud API. Eelistatav on, et API oleks lehekülje kontekstiga kooskõlas, kuid see ei ole kohustuslik. Valitud API peaks olema erinev tunnis näidatutest.

### Frontend

- **`Leheküljed`**: Rakendus peaks koosnema mitmest leheküljest, sealhulgas avalehest (`/`), tegelast tutvustavast lehest (`/about`), kasutajaprofiili lehest (`/profile`) ja kontaktlehest (`/contact`).
- **`Login ja Registreerimisleht`**: Kui kasutaja pole sisse logitud, peab esimesena avanema registreerimis- ja login leht, olenemata URL-ist. See leht peab sisaldama korrektset vormi valideerimist. Registreerimisvorm peaks sisaldama välju nagu `kasutajanimi`, `salasõna`, `eesnimi`, `perekonnanimi`, `vanus` ja `sugu`.
- **`Kasutajaprofiili Leht`**: See peaks kuvama kasutaja üldist infot (samad andmed, mis registreerimisel lisati).
- **`Kasutaja Tagasiside`**: Loo võimalus kasutajatele jätta tagasisidet lehe kohta (`vt. 8. tund`). Tagasiside peab olema talletatud serverisse, et see ei kaoks programmi taasjooksutamisel. See osa võib olla samal lehel kui tegelase kontaktandmed.
- **`Disain ja Kasutajaliides`**: Kasutage `HTML`-i ja `CSS`-i esteetiliselt meeldiva ja kasutajasõbraliku veebilehe loomiseks. Igal lehel peaks olema ühtne `stiil` ja `päis` (*`header`*), kus kuvatakse sisseloginud kasutaja `nime`. Registreerimislehel peaks kasutajanime koht olema tühi. Kasutajanimele vajutades peaks jõudma kasutajaprofiili lehele.
- **`Interaktiivsus`**: Kasutage JavaScripti ja DOM manipulatsioone lehekülgede interaktiivsemaks muutmiseks. Olge loomingulised, lisage näiteks pildigaleriisid ja kasutajategevusega seotud sündmusi

Tegu on suuremahulise projektiga, seega liikuge samm-sammult. On täiesti normaalne, et puutute selle rakenduse loomisel kokku uute teemade ja mõistetega. See valmistab teid ette tulevikuks peale kooli, kus väga vähe antakse ette, ja enamuse peab ise üles otsima ja õppima. Olete vabad lehekülgi juurde lisama ja olge loomingulised: kui tekib mõte midagi huvitavamalt või teisiti teha, siis tehke seda. Edu!