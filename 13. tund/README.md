# Kasutaja registreerimine ja autentimine

Tänases tunnis meenutame eelmiste tundide materjale ja õpime, kuidas integreerida kasutaja registreerimis- ja autentimissüsteemi oma veebisaidile. Tunni teises pooles saate alustada oma koduse tööga.

## Login ja registratsioon

Kasutaja registreerimisel loob inimene uue konto, sisestades oma `kasutajanime` ja `parooli`. Seejärel salvestatakse need andmed turvaliselt serverisse. Kasutaja autentimisel (`login`) kontrollib süsteem sisestatud kasutajanime ja parooli vastavust serveris olevatele andmetele. Kui need klapivad, lubatakse kasutajal süsteemi siseneda.

## Andmebaasid kasutajaandmete haldamiseks

Päris tingimustes kasutatakse kasutajaandmete haldamiseks andmebaase nagu `MySQL`, `PostgreSQL` või `MongoDB`. Andmebaasid võimaldavad turvaliselt säilitada suures koguses andmeid, sealhulgas kasutajainfot nagu kasutajanimed ja paroolid. Oluline on märkida, et paroole ei tohiks kunagi säilitada nende algkujul, vaid krüpteeritud kujul (`hashimine`). See tagab, et isegi andmebaasi kompromiteerimisel ei oleks paroolid otseselt loetavad.

## Sessioonid

Veebisessioonid võimaldavad säilitada kasutaja olekut veebirakenduses. Kui kasutaja logib sisse, loob server sessiooni, mis salvestatakse nii serveri poolel kui ka kasutaja brauseris (tavaliselt küpsise kujul). Sessioon võimaldab kasutajal navigeerida eri lehtedel ilma, et ta peaks iga kord uuesti sisse logima. Tavaliselt sisaldab sessioon kasutaja tuvastamiseks unikaalset identifikaatorit. Turvalisuse tagamiseks tuleks sessioone hallata hoolikalt, kasutades turvalisi küpsiseid ja sessiooni aegumist.


