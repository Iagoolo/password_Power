import { gerarSenha } from "./generator.js";

const password = document.getElementById("password");
const qtdCaracteres = document.getElementById("tam");
const numDeslizante = document.getElementById("numeroDeslizante");
const temMaiuscula = document.getElementById("mai");
const temMinuscula = document.getElementById("min");
const temNumeros = document.getElementById("num");
const temEspeciais = document.getElementById("carac");
const gerador = document.getElementById("gerador");
const botaoCopiar = document.getElementById("copiar");

gerador.addEventListener('click', () => {
    try {
        password.value = gerarSenha(parseInt(qtdCaracteres.value), temMinuscula.checked, temMaiuscula.checked, temNumeros.checked, temEspeciais.checked);
    } catch (error) {
        alert(error.message);
    }
});

qtdCaracteres.addEventListener('input', () => {
    numDeslizante.textContent = qtdCaracteres.value;
})

botaoCopiar.addEventListener('click', () => {
    navigator.clipboard.writeText(password.value);
    alert("Texto copiado");
})