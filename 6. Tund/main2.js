
function suurim(arr) {
    if (arr.length === 0) {
        return "Massiiv on tühi";
    }
    let suurimArv = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > suurimArv) {
            suurimArv = arr[i];
        }
    }
    return suurimArv;
}

function suurim2(arvud) {
    return Math.max(...arvud);
}


function celsiusToFahrenheit(celsius) {
    const fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit;
}

function korrutustabel(arv) {
    for (let i = 1; i <= 10; i++) {
        const tulemus = arv * i;
        console.log(`${arv} x ${i} = ${tulemus}`);
    }
}

function faktoriaal(arv) {
    let tulemus = 1;
    for (let i = 1; i <= arv; i++) {
        tulemus *= i;
    }
    return tulemus;
}

function tähed(arv) {
    for (let i = 1; i <= arv; i++) {
        let rida = '';
        for (let j = 0; j < i; j++) {
            rida += '*';
        }
        console.log(rida);
    }
}

function algarv(arv) {
    if (arv <= 1) {
        console.log(`${arv} ei ole algarv.`);
        return;
    }
    
    for (let i = 2; i < arv; i++) {
        if (arv % i === 0) {
            console.log(`${arv} ei ole algarv.`);
            return;
        }
    }
    
    console.log(`${arv} on algarv.`);
}
