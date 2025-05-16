function nota_literal() {         
    let n = document.getElementById("nota").value;

    if(n<0) {
        document.getElementById("resultado").innerHTML = "Error: La nota no puede ser negativa";
    } 

   else if(n<5) {
        document.getElementById("resultado").innerHTML = "Suspenso";
    } 

    else if(n<6) {
        document.getElementById("resultado").innerHTML = "Suficiente";
    } 

    else if(n<7) {
        document.getElementById("resultado").innerHTML = "Bien";
    } 
   
    else if(n<9) {
        document.getElementById("resultado").innerHTML = "Notable";
    } 
    else if(n<=10) {
        document.getElementById("resultado").innerHTML = "Sobresaliente";
    }
   
    else {
        document.getElementById("resultado").innerHTML = "Error: La nota no puede ser mayor a 10";
    }
}


// Añadir un evento al botón para que ejecute la función al hacer clic//
   var input = document.getElementById("nota");
   input.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            document.getElementById("boton").click();
        }
    });


   