function mi_funcion() { 
let text = "";
let num_tabla=document.getElementById("numero").value;
let resultado;
for (let i = 0; i <= 10; i++) {
    resultado=num_tabla*i;
    document.getElementById("resultado").innerHTML +=`${num_tabla} x ${i} = ${resultado}<br>`;


}

}