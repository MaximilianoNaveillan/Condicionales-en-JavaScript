// funciones declarativas
/* 
function (){} --> funcion tradicional

*/
//Funciones expresivas
/* 
const nombre de la función = funbction() {} ---> funcion expresiva tradicional
const nombre de la función = () => {
    
} ---> funcion flecha de bloque
const nombre de la función = () => valor ---> funcion flecha de una sola línea 

*/

function PuedeVotar(edad) {
  if (edad >= 18) {
    console.log('Puede Votar');
  } else if (edad === 17) {
    console.log('Pronto puede votar');
  } else {
    console.log('No puede votar');
  }
}

PuedeVotar(38);
PuedeVotar(40);
PuedeVotar(14);
PuedeVotar(17);
PuedeVotar(10);

/* Operador AND (&&) */
console.log('________________');

const VotaConDNI = function (edad, tieneDNI) {
  if (edad >= 18 && tieneDNI) {
    console.log('Puede Votar');
  } else {
    console.log('No puede votar');
  }
};

VotaConDNI(13, true);
VotaConDNI(25, true);
VotaConDNI(18, false);

const estaRegistrado = (estadoderegistro) => {
  if (!estadoderegistro) {
    console.log('Debe registrarse primero');
  }
};

console.log('_________');
estaRegistrado(false);
estaRegistrado(true);

let resultado = 10 / 0;
console.log(resultado);
console.log(typeof resultado);
console.log(typeof NaN);
