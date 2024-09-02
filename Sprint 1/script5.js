// document.addEventListener();
// let header = document.getElementById("titulo");
// console.log(header);
let count = 0;

function cambiarTitulo () {
    let nomnbre = prompt("Ingrese su nombre: ");
    let header = document.getElementById("titulo");
    // header.innerHTML = "<h2>Hola "+count+"</h2>";
    header.textContent = "Hola " + nomnbre;
    console.log(header);
    // document.querySelector(".clase1")
};

function agregarItem() {
    count++;
    let lista = document.getElementById('milista');
    let elementoLista = document.createElement('li');
    elementoLista.textContent = count;
    lista.appendChild(elementoLista);
}

function borrarItem() {
    let lista = document.getElementById('milista');
    // if(lista.hasChildNodes() === false){
    //     return;
    // }
    console.log(lista.childNodes);
    console.log(lista.childNodes.length);
    let ultimoElemento = lista.childNodes[lista.childNodes.length-1];
    if(ultimoElemento) {
        lista.removeChild(ultimoElemento);
        count--;
    }
}


//ARREGLOS
let lista = [1, 2, "3", "hola", ["a", "b"], (a,b) => {return a+b}, null];

console.log(lista);
lista.push(15)
console.log(lista);
let x = lista.pop();
console.log({lista, x});
console.log(lista[5](3,4));

for(let i=0; i<lista.length; i++) {
    console.log(lista[i]);
}

for(elemento of lista) {
    console.log(elemento);
}

function recorrerEImprimir (elemento) {
    console.log(elemento);
}
lista.forEach(recorrerEImprimir);
lista.forEach((elemento, indice) => {console.log({indice, elemento})});

//OBJETOS -- JSON
let obj = {
    "str": "value",
    "int": 0,
    "float": 1.2,
    "func": (a, b) => {return a+b},
    "arr": [1,2,3],
    "obj": {
        "key": "value"
    },
    key: "blablabla"
}
console.log(obj.str)
console.log(obj.func(3,5));
console.log(obj.key);

let y = "key";
console.log(obj[y]); // distinto de obj.y

let numero = obj.int;
console.log(numero);
numero++;
console.log(numero);
console.log(obj);
obj.int++;
console.log(obj);

let json = JSON.stringify(obj);
console.log(json);

let objeto = JSON.parse(json);
console.log(objeto);