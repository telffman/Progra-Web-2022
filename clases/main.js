console.log("Soy externo")
//Para acceder a un ID
let parrafo1 = document.getElementById("pConId")
//Para acceder a una clase
console.log(parrafo1)
let parrafo2 = document.getElementsByClassName("pConClase")
console.log(parrafo2)
//Para acceder a una etiqueta
let parrafo3 = document.getElementsByTagName("p")
console.log(parrafo3)

//Cambiar texto con un botÃ³n
function cambiarTitular(){
let titular1 = document.getElementById("titular")
titular1.innerText = "Hola cosa"
}

function hacerAparecer(){
    let contenedor = document.getElementById("vacio")
    contenedor.innerHTML = " <h2>BU!!</h2>"
    contenedor.className ="titularSecundario"
    let texto = "Hola"
    contenedor.append(texto)
}
let paises= document.getElementsByClassName("paises")
console.log(paises)
function borrarPais(){
    let paises= document.getElementsByClassName("paises")
    
    paises[0].remove()
    console.log(paises)
}
function registarse(stirng){
    return "te registraste exitosamente"
}

function sumarEdad(){
    let nombreUsuario = document.getElementById("nombre").value
    let edadUsuario = document.getElementById("edad").value
    let chequeado = document.getElementById("bases").checked
    if(chequeado!= true){
        alert("Debe estar de acuerdo con las condiciones")
    }
    if(edadUsuario <= 17){
        alert ("Estas violando los terminos y condiciones")
    }
    if(edadUsuario>=18 && chequeado == true){
        document.body.append(` El nombre de usuario es ${nombreUsuario}, tenes ${edadUsuario} y ${registarse(edadUsuario)}`)
    }
    
    //ECMASCRIPT 6
    //template literal
    //back tick ``
    

}

document.getElementById('nameUser').value = 
localStorage.getItem('name')
localStorage.setItem('generic', 123)

function saveData(){
    let valueIngresado = document.getElementById('nameUser').value
    console.log(valueIngresado)
    
    localStorage.setItem('name', valueIngresado)
}
function eraseData(){
    localStorage.clear()
}
function eraseOne(){
    localStorage.removeItem('nameUser')
}



//query = consulta
let parrafos = document.querySelectorAll("p")
console.log(parrafos)
let seleccionarUno = document.querySelector("#titular")
console.log(seleccionarUno)
let seleccionarClase = document.querySelectorAll(".paises")
console.log(seleccionarClase)
let seleccionarClaseUnico = document.querySelector(".paises")
console.log(seleccionarClaseUnico)

/*
1) Crear una web nueva con la estructura basica
2) Enlazarla a JavaScript
3) Crear un formulario de registro
4) Preguntar si la edad es mayor a 18, en caso contrario, indicarle al usuario que no se puede registrar
5) Obligar al usuario a estar de acuerdo con terminos y condiciones
6) Mostrarle al usuarios en un parrafo, los datos que ingreso
*/

function darktheme() {
    var element = document.body;
    element.classList.toggle("dark-mode");
 }

function calculo(){
    let cuantos = document.getElementById("personas").value
    let chequeado = document.getElementById("bases").checked
    if(chequeado!= true){
        alert("Debe estar de acuerdo con las condiciones")
    }
    if(cuantos <= 1){
        alert ("No te vas a tomar un vino solo sinvenguencha")
    }
    if(cauntos > 1 && chequeado == true){
        document.append(cuantos/0.75)

    }
} 
