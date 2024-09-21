//IMC Paulo
var Paulo = document.querySelector('#linhaPaulo');
var pesoPaulo = Paulo.querySelector(",info-peso").textContent;
var alturaPaulo = Paulo.querySelector(".info-altura").textContent;
var imcPaulo = pesoPaulo / (alturaPaulo * alturaPaulo);
Paulo.querySelector(".info-imc").textContent = imcPaulo;
