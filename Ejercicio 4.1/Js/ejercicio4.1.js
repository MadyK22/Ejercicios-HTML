function nota_literal() {         
    let n = document.getElementById("nota").value;

    if (n < 0) {
        document.getElementById("resultado").innerHTML = "No se aceptan numeros negativos";
    } 
    else if (n<= 10) {
        document.getElementById("resultado").innerHTML = "Es Correcto";
    }
    else {
        document.getElementById("resultado").innerHTML = "Te has pasado de la nota";
    }

}

    var input = document.getElementById("nota");

    input.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            document.getElementById("boton").click();
        }
    });