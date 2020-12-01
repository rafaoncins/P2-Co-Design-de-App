document.addEventListener("DOMContentLoaded", function(){

// var counter = 0; // variável global
// var timeleft = 60000; // variável que vai ajudar a fazer o countdown
// var interval = 60000; //intervalo inicial
// console.log(timeleft);
// function convertSeconds(s){ //função que vai pegar o numero de segundos e converter para minutos
//   var min = Math.floor(s / 60000); //floor é porque não queremos um numero em decimal, então com o floor vai tirar essa parte decimal
//   var sec = s % 60000 // quanto segundos faltam pois foi cortado do minuto
//   console.log(min + ':' + sec);
//   return String(min + ':' + sec);
// }

// var ding; // som quando timer acabar
// function preload(){ //função para rodar as medias como a musica
//   ding = loadSound(''); //colocar o nome do arquivo da musica e tem que ser mp3
// }

// function setup() { // função principal, na qual set up o timer
//     noCanvas(); // livra-se dos defaults
//     console.log(timeleft);
//     var timer = document.querySelector('#timer'); //acessar um elemento particular do html timer
//     console.log(timer);
//     timer.innerHTML = convertSeconds(timeleft - counter); //countdown
//     console.log(timer);
//     console.log(counter);
// }
    

//     function timeIt(counter) { //essa função timeIt deve acontecer a cada 1000 milisegundos como define o setInterval      

//         counter + 1000;
//         var timer = document.querySelector('#timer');
//         timer.innerHTML = convertSeconds(timeleft-counter); // a cada segundo vai diminuir o tempo e update
//       return timer
//         console.log(timer);
      
//         if (counter == timeleft) {
//           ding.play();
//           clearInterval(interval);
//           counter = 0;
//         }
        
//     }

//     setInterval(ding(),60000)
//     setInterval(timeIt, 1000); // função do java setInterval que define o intervalo de 1000 milisegundos =  1 segundo

// })


function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

var htimer = document.querySelector('#htimer');
var mintimer = document.querySelector('#mintimer');
var inttimer = document.querySelector('#inttimer');
var hperson = document.querySelector('#hperson');
var minperson = document.querySelector('#minperson');
var intperson = document.querySelector('#intperson');

async function contador(elemento) {

  for ( var i = elemento.innerHTML; i >= 0; i--) {
    await sleep(1000);
    // Tira 1 segundo do contador na tela
    console.log('Tira 1 segundo do contador na tela')
    elemento.innerHTML = i;
    if(i == 0) {
      // Som do alarme
      console.log('ALARME!')
    }
  }
}

contador(htimer);
contador(mintimer);
//contador(inttimer);
contador(hperson);
contador(minperson);
//contador(intperson);

})


//var countDownDate = new Date("Jul 25, 2021 16:37:52").getTime();

//var myfunc = setInterval(function() {
// code goes here
//}, 1000)

//var now = new Date().getTime();
//var timeleft = countDownDate - now;
    
//var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
//var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
//var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

//document.getElementById("days").innerHTML = days + "d "
//document.getElementById("hours").innerHTML = hours + "h " 
//document.getElementById("mins").innerHTML = minutes + "m " 
//document.getElementById("secs").innerHTML = seconds + "s"

