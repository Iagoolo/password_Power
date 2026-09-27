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
        return "Fraca";
    } else if (entropia < 60) {
        return "Razoável";
    } else if (entropia < 120) {
        return "Forte";
    } else {
        return "Muito forte";
    }
}