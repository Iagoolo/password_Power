export function forcaSenha(tamanho, temMinusculas, temMaiusculas, temNumeros, temEspeciais) {
    let tamanhoDoPool = 0;
    if (temMinusculas) {
        tamanhoDoPool += 26;
    }

    if (temMaiusculas) {
        tamanhoDoPool += 26;
    }

    if (temNumeros) {
        tamanhoDoPool += 10;
    }

    if (temEspeciais) {
        tamanhoDoPool += 9;
    }

    if (tamanhoDoPool === 0){
        return 0;
    }

    return tamanho * Math.log2(tamanhoDoPool);
}

export function classificarForca(entropia) {
    if (entropia < 35) {
        return {texto: "Fraca", nivel: 1};
    } else if (entropia < 60) {
        return {texto: "Razoável", nivel: 2};
    } else if (entropia < 120) {
        return {texto: "Forte", nivel: 3};
    } else {
        return {texto: "Muito forte", nivel: 4};
    }
}