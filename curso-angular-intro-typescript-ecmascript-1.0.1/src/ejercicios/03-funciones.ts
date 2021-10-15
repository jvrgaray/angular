/*
    ===== Código de TypeScript =====
*/
function sumar (a:number, b:number):number {
    return a + b;
}


//en funcion de flecha
const sumarFlecha = (a:number, b:number):number => {return a +b; }
//


function multiplicar (numero:number, otroNumero?:number, base:number = 2):number {
    return numero * base;
}

const resultado2 = multiplicar(5,0,10);
console.log(resultado2);

const resultado  = sumar(10, 20);
console.log(resultado);