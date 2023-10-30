function harjutus1(nimi) {
    console.log("Tere, ${nimi}");
    console.log("Tere, " + nimi);
}

function harjutus2(mark, mudel, värv) {
    console.log(`Minu auto on ${värv} ${mark} ${mudel}`);
}

function harjutus3(pindala, kõrgus) {
    let ruumala = (1 / 3) * pindala * kõrgus;
    console.log("Püramiidi ruumala on " + ruumala);
}

function harjutus4(nimi) {
    if (nimi.length > 5) {
        nimi = nimi.slice(0, 5) + "..."
    }
    console.log(`Nimi on ${nimi}`);
}

function harjutus5(nimi) {
    let pööratudNimi = nimi.split('').reverse().join('');
    console.log("Pööratud stringg on " + pööratudNimi);
}

function harjutus6() {
    for (let i = 1; i < 101; i++) {
        console.log(i);
    }
}

function harjutus7() {
    let i = 100;
    while (i >= 1) {
        console.log(i);
        i--
    }
}

function harjutus8() {
    const myNameComponents = ['Samuel', 'L', 'Jackson'];
    const nimi = myNameComponents.join(' ');
    console.log(`Minu nimi on ${nimi}`)
}

function harjutus9(hinded) {
    let summa = 0;
    for (let hinne of hinded) {
        summa += hinne;
    }
    let  keskmineHinne = summa / hinded.length;
    console.log(`Keskmine hinne on ${keskmineHinne}`)
}

function harjutus10() {
    for (let i = 1; i <= 100; i++) {
        if ((i % 3 === 0) && (i % 5 === 0) ) {
            console.log("Lütseum")
        }else if (i % 50 === 0) {
            console.log("Tallinna Prantsuse Lütseum")
        }else if (i % 3 === 0) {
            console.log("Tallinna")
        }else if (i % 5 === 0) {
            console.log("Prantsuse")
        }   
    }
}

function harjutus11(massiiv) {
    if (massiiv.includes('Marek')) {
        console.log('Marek on massiivis');
    } else {
        console.log('Marek pole massiivis');
    }
}

// Ülesanne 14
function harjutus12(inimesed) {
    let vanim = inimesed[0];
    let pikimaAadressiga = inimesed[0];
    let lühimaTelefoninumbriga = inimesed[0];
    let sisaldabEesti = [];

    for (let inimene of inimesed) {
        if (inimene.vanus > vanim.vanus) {
            vanim = inimene;
        }

        if (inimene.aadress.length > pikimaAadressiga.aadress.length) {
            pikimaAadressiga = inimene;
        }

        if (inimene.telefon.length < lühimaTelefoninumbriga.telefon.length) {
            lühimaTelefoninumbriga = inimene;
        }

        if (inimene.email.includes('eesti')) {
            sisaldabEesti.push(inimene.nimi);
        }
    }

    console.log(`Kõige vanema inimese nimi: ${vanim.nimi}`);
	    console.log(`Inimese nimi, kellel on kõige pikem aadress: ${pikimaAadressiga.nimi}`);
    console.log(`Inimese nimi, kellel on kõige lühem telefoninumber: ${lühimaTelefoninumbriga.nimi}`);
    console.log(`Inimesed, kelle e-posti aadress sisaldab sõna "eesti": ${sisaldabEesti.join(', ')}`);
}