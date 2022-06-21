// descomposicion del problema
// patrones, similitudes
// abstracciones, 

console.log("Hola mundo")

/*
Variables? Espacio en memoria donde se almacenan valores
Que es? Un cajon

Como armo una variable?
let NombreDeLaVariable = "valor"
= es el operador de asignacion
var << para crear variables
*/


document.write('La web de Steve');
    let lado = prompt("Ingrese el lado del cuadrado")
    let per = lado * 4
    document.write("<br>")
    document.write("El perimetro es:",per)

    let numero1 = prompt("Ingrese el primer numero")
    let numero2 = prompt("Ingrese el segundo numero")
    let numero3 = prompt("Ingrese el tercero numero")
    let numero4 = prompt("Ingrese el cuarto numero")
    let suma = Number(numero1) + Number(numero2)
    let producto = Number(numero3) * Number(numero4)
    document.write("La suma de los primeros 2 numeros es:",suma)
    document.write("El producto de los segundos dos numeros es:",producto)
    let sumatodos = Number(numero1) + Number(numero2) + Number(numero3) + Number(numero4)
    let productotodos = Number(numero1) * Number(numero2) * Number(numero3) * Number(numero4)
    document.write("La suma total es",sumatodos)
    document.write("El producto de todos es",productotodos)

/* 
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    al final del body <script src="./scipts.js">
        
    </script>
</body>
</html>

*/

/* Una calculadora de las 4 operaciones basicas + - * /

1) selecionar operacion
2) No se puede dividir por 0
*/

let V1 = prompt("Numero 1")
let V2 = prompt("Numero 2")
let operacion = prompt("Ingresa la operacion deseada (+, -, * ,/")
let Resultado = V1,operacion,V2
document.write("Resultado")

/* let peso = prompt("Ingrese peso")
        let altura = prompt("Ingrese altura en metros")    
        let IMC = peso/(altura*altura)
        document.write("Tu IMC es ", IMC)
*/

/* Local Storage with JS */

function saveData(){
    letvalor = document.getElementById('name').value
    localStorage.setItem('nameUser', value);
}

