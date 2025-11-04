var input = document.getElementById("letra");
input.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("boton").click();
    }
});
const Array_lista_palabras = ["manzana", "melocoton", "gas", "sandia" ,"agua","pollo","kebab","sal","pomelo","azucar","azufre"];
const Array_lista_letras = [];
const Array_palabra_guiones = [];
let palabra_oculta;
let NumErrores = 0;
let NumAciertos = 0;

function Inicializar() {
     document.getElementById("perdedor").style.display = "none";
     document.getElementById("ganador").style.display = "none";
     let image=document.getElementById("imagen");
     image.src="./img/A0.png"
     document.getElementById("lista_letras").innerHTML = "";
    // document.getElementById("letra").innerHTML = "";
    let posicion = -1;
    posicion = Math.floor(Math.random()*Array_lista_palabras.length);
    palabra_oculta = Array_lista_palabras[posicion]; 
    Array_palabra_oculta = Array.from(palabra_oculta);

    // alert(Array_palabra_oculta);
    document.getElementById("psecreta").innerHTML = (palabra_oculta)

    //borrar la palabra para partida nueva
    document.getElementById("palabra").innerHTML = "";


    // Inicializar el array de guiones según la longitud de la palabra oculta
    // Arraypalabraguiones = [];

    for (let i = 0; i < Array_palabra_oculta.length; i++) {
        Array_palabra_guiones[i] = "_";
        document.getElementById("palabra").innerHTML += `${Array_palabra_guiones[i]} `;
    }

    // palabra_oculta=quote.split('')
    // var container=document.getElementById('Mi-container');
    // let array2=quote.split('')

}

function Enviar() {
    let acierto = 0;
    let error = 0;
    let letra_leida = document.getElementById("letra").value;
    Array_lista_letras.push(letra_leida);
    document.getElementById("lista_letras").innerHTML += `${letra_leida} <br>`;
    document.getElementById("palabra").innerHTML = "";

    for (let i = 0; i < Array_palabra_oculta.length; i++) {
        if (letra_leida == Array_palabra_oculta[i]) {
            Array_palabra_guiones[i] = letra_leida;
            acierto++;
        }

    }

    if (acierto > 0) {
        NumAciertos++;
    }

    else {
        NumErrores++;
    }

    for (let i = 0; i < Array_palabra_oculta.length; i++) {
        document.getElementById("palabra").innerHTML += `${Array_palabra_guiones[i]} `

    }
    

    Dibujar();
}



function Dibujar() {
    switch (NumErrores) {
        case 0:
            document.getElementById("imagen").src = "./IMG/A0.png";
            break;

        case 1:
            document.getElementById("imagen").src = "./IMG/A1.png";
            break;

        case 2:
            document.getElementById("imagen").src = "./IMG/A2.png";
            break;

        case 3:
            document.getElementById("imagen").src = "./IMG/A3.png";
            break;

        case 4:
            document.getElementById("imagen").src = "./IMG/A4.png";
            break;

        case 5:
            document.getElementById("imagen").src = "./IMG/A5.png";
            break;

        case 6:
            document.getElementById("imagen").src = "./IMG/A6.png";
            break;
    }

    if (NumErrores >= 6 ) {
        document.getElementById("palabra").innerHTML = "";
        for (let i = 0; i < Array_palabra_oculta.length; i++) {
            document.getElementById("palabra").innerHTML += `${Array_palabra_oculta[i]} `;
            
        }

        var x = document.getElementById("perdedor");
        x.style.display = "block";

    }
    
    else if (!Array_palabra_guiones.includes('_')) {
        var y = document.getElementById("ganador");
        y.style.display="block";
        let intentos = Array_lista_letras.length;
        document.getElementById("numintentos").innerHTML =  ` Lo has conseguido en ${intentos} `;
        
    }



}
