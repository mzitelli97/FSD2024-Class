let suma2 = 5 + 3;
var resta2 = 10 - 4;
let mul2 = 2 * 6;
let div2 = 7 / 3;
let mod2 = 7 % 3;
let incr2 = 3;
incr2++;
let entera2 = 7;

// console.log(suma2);
// console.log(resta2);
// console.log(mul2);
// console.log(div2);
// console.log(mod2);
// console.log(incr2);

let andlogico = true && false;
let or = true || false;
let not = !true;

let x = false;
let y = true;
console.log(x + y);

let nombre = 'Juan';
let apellido = 'Perez';
let full = nombre + ' ' + apellido;
console.log(full);

console.log(nombre + 5);

console.log(5 * 'hola');

let edad = 18;
const edadMinima = 18;
if (edad >= edadMinima) {
    console.log('permitido')
}
else {
    console.log('no permitido')
}
let mayorDeEdad = edad >= edadMinima;
{/* <button hidden={!mayorDeEdad}></button> */}

function example1() {
    var variable = 10;
    if (true) {
        var variable = 20;
        console.log(variable);
    }
    console.log(variable);  
}

function example2() {
    let variable = 10;
    // let variable = 5;
    if (true) {
        let variable = 20;
        console.log(variable);
    }
    console.log(variable);  
}
example1();
example2();


// Prompt, alert, confirm
let userAge = parseInt(prompt('Ingrese su edad: '));
console.log({userAge});
if(userAge === 20) {
    console.log('El usuario tiene 20!')
}

let al = alert("Alerta roja!")
console.log(al)

let conf = confirm('Estas seguro?')
console.log(conf);

for(let i = 0; i < 10; i++) {
    console.log(i)
}
let i = 0;
while(i<10) {
    console.log(i);
    i++;
}
// for(x in lista){
//     console.log(x);
// }

let sum = function (a, b) {
    return a + b;
}
console.log(5*sum)

let resta3 = (a, b) => {
    return a - b;
}
console.log(resta3(9, 99));

let undef = undefined;
let nu = null;

