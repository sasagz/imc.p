//IMC Paulo
var título = document.querySelector(".título");
título.textContent = "Aparecida Nutricionista";

var Paulo = document.querySelector('#linhaPaulo');
var pesoPaulo = parseFloat(Paulo.querySelector('.info-peso').textContent);
var alturaPaulo = parseFloat(Paulo.querySelector('.info-altura').textContent);

// Se alturaPaulo estiver em centímetros, divida por 100
alturaPaulo = alturaPaulo / 100;

var imcPaulo = pesoPaulo / (alturaPaulo * alturaPaulo);
Paulo.querySelector('.info-imc').textContent = imcPaulo.toFixed(2);
