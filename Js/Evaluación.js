var pregunta1 = false;
var pregunta2 = false;
var pregunta3 = false;
var pregunta4 = false;
var pregunta5 = false;
var pregunta6 = false;
var pregunta7 = false;
var pregunta8 = false;
var pregunta9 = false;
var pregunta10 = false;

var prepun1 = 0;
var prepun2 = 0;
var prepun3 = 0;
var prepun4 = 0;
var prepun5 = 0;
var prepun6 = 0;
var prepun7 = 0;
var prepun8 = 0;
var prepun9 = 0;
var prepun10 = 0;

var resultadoFinal = 0;



function sele(elemento1) {
     if (pregunta1 === false){
          let men = document.getElementById("mensaje1");
if (elemento1.id === "correcta1") {
men.innerText = "Correcto, El comercio electrónico implica la compra, venta y intercambio de bienes, servicios e información a través de internet y otras tecnologías digitales.";
men.classList.remove('has-text-danger');
men.classList.add('has-text-primary');
prepun1 = 1;
} else {
men.innerText = "Error!! " + elemento1.innerText +" "+ "No es la respuesta correcta";
men.classList.remove('has-text-primary');
men.classList.add('has-text-danger');
prepun1 = -1;
}
pregunta1 = true;
let mensajePuntos1 = document.getElementById("puntos1");
          mensajePuntos1.innerText = "Puntos: " + prepun1;
          resultado();
     }

  }

  function selec(elemento2) {
    if (pregunta2 === false){

    let mens = document.getElementById("mensaje2");
if (elemento2.id === "correcta2") {
mens.innerText = "Correcto, Los consumidores pueden acceder rápidamente a información detallada sobre diferentes productos y comparar precios entre diferentes tiendas en línea, lo que les permite tomar decisiones más informadas.";
mens.classList.remove('has-text-danger');
mens.classList.add('has-text-primary');
prepun2 = 1;

} else {
mens.innerText = "Error!! " + elemento2.innerText +" "+ "No es la respuesta correcta";
mens.classList.remove('has-text-primary');
mens.classList.add('has-text-danger');
prepun2 = -1;

}

pregunta2 = true;
let mensajePuntos2 = document.getElementById("puntos2");
          mensajePuntos2.innerText = "Puntos: " + prepun2;
          resultado();
    }

  }

  function selecc(elemento3) {
     
    if (pregunta3 === false){

    let mensaje = document.getElementById("mensaje3");
if (elemento3.id === "correcta3") {
mensaje.innerText = "Correcto, Un ejemplo de comercio electrónico B2C (Business-to-Consumer). En este caso, un individuo realiza una compra en línea directamente desde un sitio web de comercio electrónico.";
mensaje.classList.remove('has-text-danger');
mensaje.classList.add('has-text-primary');
prepun3 = 1;

} else {
mensaje.innerText = "Error!! " + elemento3.innerText +" "+ "No es la respuesta correcta";
mensaje.classList.remove('has-text-primary');
mensaje.classList.add('has-text-danger');
prepun3 = -1;

}
pregunta3 = true;
let mensajePuntos3 = document.getElementById("puntos3");
          mensajePuntos3.innerText = "Puntos: " + prepun3;
          resultado();

    }
  }

  function selecci(elemento4) {
     
    if (pregunta4 === false){


    let mensaje = document.getElementById("mensaje4");
if (elemento4.id === "correcta4") {
mensaje.innerText = "Correcto, Utilizar conexiones seguras, indicadas por el protocolo HTTPS en lugar de HTTP, ayuda a proteger la información personal y financiera de los usuarios durante las transacciones en línea";
mensaje.classList.remove('has-text-danger');
mensaje.classList.add('has-text-primary');
prepun4 = 1;

} else {
mensaje.innerText = "Error!! " + elemento4.innerText +" "+ "No es la respuesta correcta";
mensaje.classList.remove('has-text-primary');
mensaje.classList.add('has-text-danger');
prepun4 = -1;

}

pregunta4 = true;
let mensajePuntos4 = document.getElementById("puntos4");
          mensajePuntos4.innerText = "Puntos: " + prepun4;
          resultado();
    }
  }

  
  function seleccio(elemento5) {
     
    if (pregunta5 === false){


    let mensaje = document.getElementById("mensaje5");
if (elemento5.id === "correcta5") {
mensaje.innerText = "Correcto,El dropshipping es un modelo de negocio en el que el vendedor no almacena los productos, sino que se encarga de enviarlos directamente desde el fabricante o proveedor al cliente final. ";
mensaje.classList.remove('has-text-danger');
mensaje.classList.add('has-text-primary');
prepun5 = 1;

} else {
mensaje.innerText = "Error!! " + elemento5.innerText +" "+ "No es la respuesta correcta";
mensaje.classList.remove('has-text-primary');
mensaje.classList.add('has-text-danger');
prepun5 = -1;

}

pregunta5 = true;
let mensajePuntos5 = document.getElementById("puntos5");
          mensajePuntos5.innerText = "Puntos: " + prepun5;
          resultado();

    }
  }

  function ss(elemento6) {
     
    if (pregunta6 === false){

  let mensaje = document.getElementById("mensaje6");
  if (elemento6.id === "correcta6") {
  mensaje.innerText = "Correcto, Uso de influencers en redes sociales.";
  mensaje.classList.remove('has-text-danger');
  mensaje.classList.add('has-text-primary');
  prepun6 = 1;
  
  } else {
  mensaje.innerText = "Error!! " + elemento5.innerText +" "+ "No es la respuesta correcta";
  mensaje.classList.remove('has-text-primary');
  mensaje.classList.add('has-text-danger');
  prepun6 = -1;
  
  }
  
  pregunta6 = true;
  let mensajePuntos6 = document.getElementById("puntos6");
            mensajePuntos6.innerText = "Puntos: " + prepun6;
            resultado();
  
}
  }


  function see(elemento7) {
     
    if (pregunta7 === false){

  let mensaje = document.getElementById("mensaje7");
  if (elemento7.id === "correcta7") {
  mensaje.innerText = "Correcto, Es un modelo en el que los clientes pagan una tarifa mensual para tener acceso a productos o servicios de forma recurrente. Beneficia a las empresas al generar ingresos predecibles y fidelizar a los clientes. ";
  mensaje.classList.remove('has-text-danger');
  mensaje.classList.add('has-text-primary');
  prepun7 = 1;
  
  } else {
  mensaje.innerText = "Error!! " + elemento7.innerText +" "+ "No es la respuesta correcta";
  mensaje.classList.remove('has-text-primary');
  mensaje.classList.add('has-text-danger');
  prepun7 = -1;
  
  }
  
  pregunta7 = true;
  let mensajePuntos7 = document.getElementById("puntos7");
            mensajePuntos7.innerText = "Puntos: " + prepun7;
            resultado();
  
}
  }


  function seleccc(elemento8) {
     
    if (pregunta8 === false){

  let mensaje = document.getElementById("mensaje8");
  if (elemento8.id === "correcta8") {
  mensaje.innerText = "Correcto, Blockchain.";
  mensaje.classList.remove('has-text-danger');
  mensaje.classList.add('has-text-primary');
  prepun8 = 1;
  
  } else {
  mensaje.innerText = "Error!! " + elemento8.innerText +" "+ "No es la respuesta correcta";
  mensaje.classList.remove('has-text-primary');
  mensaje.classList.add('has-text-danger');
  prepun8 = -1;
  
  }
  
  pregunta8 = true;
  let mensajePuntos8 = document.getElementById("puntos8");
            mensajePuntos8.innerText = "Puntos: " + prepun8;
            resultado();
  
}
  }

  function seleccioo(elemento9) {
     
    if (pregunta9 === false){

  let mensaje = document.getElementById("mensaje9");
  if (elemento9.id === "correcta9") {
  mensaje.innerText = "Correcto, Ofrecer una navegación intuitiva y un diseño responsive para diferentes dispositivos.";
  mensaje.classList.remove('has-text-danger');
  mensaje.classList.add('has-text-primary');
  prepun9 = 1;
  
  } else {
  mensaje.innerText = "Error!! " + elemento9.innerText +" "+ "No es la respuesta correcta";
  mensaje.classList.remove('has-text-primary');
  mensaje.classList.add('has-text-danger');
  prepun9 = -1;
  
  }
  
  pregunta9 = true;
  let mensajePuntos9 = document.getElementById("puntos9");
            mensajePuntos9.innerText = "Puntos: " + prepun9;
            resultado();
  
}
  }

  function cop(elemento10) {
     
    if (pregunta10 === false){

  let mensaje = document.getElementById("mensaje10");
  if (elemento10.id === "correcta10") {
  mensaje.innerText = "Correcto, Permite comprender el comportamiento y las preferencias de los clientes, lo que ayuda a personalizar las ofertas y mejorar la experiencia de compra.";
  mensaje.classList.remove('has-text-danger');
  mensaje.classList.add('has-text-primary');
  prepun10 = 1;
  
  } else {
  mensaje.innerText = "Error!! " + elemento5.innerText +" "+ "No es la respuesta correcta";
  mensaje.classList.remove('has-text-primary');
  mensaje.classList.add('has-text-danger');
  prepun10 = -1;
  
  }
  
  pregunta10 = true;
  let mensajePuntos10 = document.getElementById("puntos10");
            mensajePuntos10.innerText = "Puntos: " + prepun10;
            resultado();
  
}
  }


function resultado() {

  resultadoFinal = prepun1 + prepun2 + prepun3 + prepun4 + prepun5 
   + prepun6 + prepun7 + prepun8 + prepun9 + prepun10;

  let mensajeResultado = document.getElementById("resultadoFinal");
  mensajeResultado.innerText = "Resultado Final: " + resultadoFinal;

}


  