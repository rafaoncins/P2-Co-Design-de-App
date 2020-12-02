document.addEventListener("DOMContentLoaded", function(){

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

var tempoparcial = document.querySelector('#tempoparcial');
var tempototal = document.querySelector('#tempototal');
var inttimer = document.querySelector('#inttimer');
var intperson = document.querySelector('#intperson');

async function contador(elemento) {

  for ( var i = elemento.innerHTML; i >= 0; i--) {
    await sleep(1000);
    // Tira 1 segundo do contador na tela
    console.log('Tira 1 segundo do contador na tela');
    var horas = Math.floor(i/3600)
    var restohoras = i/3600 - Math.floor(i/3600)
    var min = Math.floor(restohoras*60)
    var restomin = restohoras*60 - Math.floor(restohoras*60)
    var s = Math.floor(restomin*60)
    elemento.innerHTML = horas + ':' + min + ':' + s;
    if(i == 0) {
      // Som do alarme
      console.log('ALARME!');
    }
  }
}

contador(tempototal);
contador(tempoparcial);
//contador(inttimer);
//contador(intperson);

})

