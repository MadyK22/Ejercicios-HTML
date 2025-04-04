function Calcula(){

let tot= document.getElementById("Total").value;

let comens= document.getElementById("Comensales").value;

let division = (tot / comens).toFixed(2)

document.getElementById("texto").innerHTML="Teneis que pagar " + division + " € ";
}
