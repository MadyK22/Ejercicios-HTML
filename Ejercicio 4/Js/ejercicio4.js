//If and else"//
function nota_literal() {         
    let n = document.getElementById("nota").value;

    if (n >= 5) {
        document.getElementById("resultado").innerHTML = "Estas aprobado";
    } 
    else {
        document.getElementById("resultado").innerHTML = "Estas suspendido";
    }

}
