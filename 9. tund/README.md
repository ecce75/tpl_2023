# *JS DOM Manipulation* ja *Event Listener* harjutused
## Juhised
- Looge oma repositooriumi uus kaust nimega `DOM_harjutused`, kuhu saate kopeerida ülesannete `html` failid ja lisada `js` lahendused. 
- Ülesanded lõpetada kodus kui ei jõua tunni ajal valmis.
- Tunnis ülesannete lahendamiseks ChatGPT kasutamine keelatud.

## Ül. 1 pildigalerii
Ülesanne on luua lihtne pildigalerii, kuhu on tarvis lisada funktsionaalsus kahele nupule, mis kuvavad vastavalt kas järgmise või eelmise pildi etteantud massiivist.
- Tuleta meelde kuidas käis piltide kuvamine `html`-is

## Ül. 2 progress-bar
Sul on ette antud tühi *progress bar* ja nupp. Sinu ülesanne on lisada nupule funktsionaalsus, et nupuvajutusel suureneks riba laetud osa mingi arvu võrra
- Kuna CSS on dokumendi objektidele juba lisatud, tuleb sul muuta vaid `progress-fill` elemendi laiust (`.style.width`) nupuvajutusel.
- Vahe, mille võrra `progress-fill` nupuvajutusel muutub, valite ise
- Ärge unustage muuta ka riba sees olev tekst.
- Kui riba on täis, lähtestage see nulli.

## Ül. 3 color-changer
Ülesanne on luua lehekülg, kus on värviline div-element ja nupp, mis muudab selle värvi. Värvikoodid on suvaliselt genereeritud olemasoleva funktsiooni poolt. Lisa vajalik `js`, et tagada lehekülje õige toimimine.

## Ül. 4 mouse-trail
Ülesanne on luua efekt, kus hiirekursori liikumisel tekib jälg. 
- Selleks peate kursori liikumisel looma uusi `<div>` elemente, millel on klass `trail`. See on vajalik, et õige stiil oleks rakendatud jäljele. 
- Jälg peab kaduma pärast teatud aja möödumist, selleks kasutatakse `setTimeout()` funktsiooni (googledage, kuidas seda kasutada).

## Ül. 5 kell
Ülesanne on lisada funktsionaalsus veebilehele, mis kuvab reaalajas kella. Kell peaks uuendama iga sekundi tagant ning näitama aega järgmises vormis: `11:07:03`.
- Et leida täpne kellaaeg, kasutage `new Date()`, et luua uus objekt, mis sisaldab praegust aega.
- Seejärel saate rakendada `.getHours()`, `.getMinutes()` ja `.getSeconds()` meetode, et panna kellaaeg õigesse vormi.
- Selleks, et kellaaega uuendada iga sekundi tagant, peate kasutama `setInterval()` funktsiooni.
