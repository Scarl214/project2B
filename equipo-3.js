// Frank
//crear arreglo
let arreglo = [1, 2, 3, 4,5]
console.log(arreglo[0])
arreglo[0] = 2

//Alan
//crear push
let array = [1, 2, 3];
array.push (4)
console.log(array)
//crear pop
let array2 = [1, 2, 3];
array.pop ()
console.log (array2)
//crear unshift
let miArreglo = ["perro", "gato", "pajaro","vaca", "elefante"];
miArreglo.unshift("chapulin")
console.log(miArreglo)

//Martin
//eliminar el primer elemento de un arreglo
//crear shift
const cities = ["Madrid", "Valencia", "Mexico"];
const first = cities.shift();
console.log(cities)
console.log(first)
//buscar un elemento en un arreglo
//crear includes
let miArreglo2 = ["caballo", "vaca","burro"];
console.log(miArreglo.includes ("caballo"));
console.log(miArreglo.includes ("persona"));
//crear indexOf
let miArreglo3 = ["caballo", "vaca","burro"];
console.log(miArreglo.indexOf ("caballo"));
console.log(miArreglo.indexOf ("persona"));
//iterar sobre un arreglo
//crear for
let miArreglo4 = ["caballo", "vaca","burro"];
for (let i = 0; i < miArreglo4; i++) {
    console.log(miArreglo4);
}
//crear forEach

//miguel
//filtrar elementos en un arreglo
//crear filter
let palabras = ["Theboss", "Hola", "Hamburgesa", "Haitano", "globo"];
let masde5letras = palabras.filter((x) => x.length > 5);
console.log(masde5letras);
//crear map
let number =[1, 4, 9, 16];
let raiz = number.map ((num) => math.sqrt(num));
console.log(raiz);
//crear reduce
let inicioEn = 1;
let operacion = raiz.reduce((acumulada, acumulado) => acumulada * acumulado, inicioEn);
console.log(operacion);

//Pedraza
let numP = [6, 7, 8, 9, 10]
let positivos = numP.every(num => num > 0);
console.log(positivos)