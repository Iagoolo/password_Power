import { gerarSenha } from "./generator.js";
import { forcaSenha, classificarForca } from "./validator.js";

const password = document.getElementById("password");
const qtdCaracteres = document.getElementById("tam");
const numDeslizante = document.getElementById("numeroDeslizante");
const temMaiuscula = document.getElementById("mai");
const temMinuscula = document.getElementById("min");
const temNumeros = document.getElementById("num");
const temEspeciais = document.getElementById("carac");
const gerador = document.getElementById("gerador");
const botaoCopiar = document.getElementById("copiar");
const senhaATestar = document.getElementById("senhaATestar");
const classificacaoForca = document.getElementById("forca");
const medidor = document.querySelector(".medidor");

gerador.addEventListener('click', () => {
    try {
        password.value = gerarSenha(parseInt(qtdCaracteres.value), temMinuscula.checked, temMaiuscula.checked, temNumeros.checked, temEspeciais.checked);
    } catch (error) {
        alert(error.message);
    }
});

qtdCaracteres.addEventListener('input', () => {
    numDeslizante.textContent = qtdCaracteres.value;
});

botaoCopiar.addEventListener('click', () => {
    navigator.clipboard.writeText(password.value);
    alert("Texto copiado");
});

senhaATestar.addEventListener('input', () => {
    let senhaUsuario = senhaATestar.value;

    if (senhaUsuario.length === 0) {
        medidor.style.backgroundColor= "gray";
        medidor.style.width = "0%"
        classificacaoForca.textContent = "";
        return;
    }

    let possuiMinuscula = /[a-z]/.test(senhaUsuario);
    let possuiMaiuscula = /[A-Z]/.test(senhaUsuario);
    let possuiNumeros = /[0-9]/.test(senhaUsuario);
    let possuiEspeciais = /[^a-zA-Z0-9]/.test(senhaUsuario)

    let valorSenha = forcaSenha(senhaUsuario.length, possuiMinuscula, possuiMaiuscula, possuiNumeros, possuiEspeciais);
    const forca = classificarForca(valorSenha);
    classificacaoForca.textContent = forca.texto;

    switch(forca.nivel){
        case 1:
            medidor.style.backgroundColor = "red";
            medidor.style.width = "25%"
            break;
        
        case 2:
            medidor.style.backgroundColor = "yellow";
            medidor.style.width = "50%"
            break;
        
        case 3:
            medidor.style.backgroundColor = "blue";
            medidor.style.width = "75%"
            break;

        case 4:
            medidor.style.backgroundColor = "green";
            medidor.style.width = "100%"
            break;
    }
})