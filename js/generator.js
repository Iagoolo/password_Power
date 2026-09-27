const conjMinusculas = "abcdefghijklmnopqrstuvwxyz";
const conjMaiusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const conjNumeros = "0123456789";
const conjEspeciais = "$&*?/\-_@";

export function gerarSenha(tamanho, querMinusculas, querMaiusculas, querNumeros, querEspeciais) {

    let caracPermitidos = "";
    let senha = "";

    if (querMinusculas) {
        caracPermitidos += conjMinusculas;
        senha += selecionarUm(conjMinusculas);
    }

    if (querMaiusculas) {
        caracPermitidos += conjMaiusculas;
        senha += selecionarUm(conjMaiusculas);
    }

    if (querNumeros) {
        caracPermitidos += conjNumeros;
        senha += selecionarUm(conjNumeros);
    }

    if (querEspeciais) {
        caracPermitidos += conjEspeciais;
        senha += selecionarUm(conjEspeciais);
    }

    if (caracPermitidos === "") {
        throw new Error("Precisa-se escolher pelo menos um tipo de caractere");
    }

    return embaralhar(gerador(caracPermitidos, tamanho, senha));
}

function gerador(caracPermitidos, tamanho, senha) {
    for (let i = senha.length; i < tamanho; i++) {
        const indiceAleatorio = Math.floor(Math.random() * caracPermitidos.length);
        senha += caracPermitidos[indiceAleatorio];
    }

    return senha;
}

function selecionarUm(conjunto) {
    const indiceAleatorio = Math.floor(Math.random() * conjunto.length);
    return conjunto[indiceAleatorio];
}

function embaralhar(senhaTexto) {
    let arrayVetor = senhaTexto.split('');

    for (let i = arrayVetor.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arrayVetor[i], arrayVetor[j]] = [arrayVetor[j], arrayVetor[i]];
    }

    return arrayVetor.join('');
}