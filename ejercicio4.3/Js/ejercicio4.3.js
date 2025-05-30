function sumar(){
    let n1=document.getElementById("numero1").value;
    let n2=document.getElementById("numero2").value;
    let result= Number(n1)+Number(n2);
    document.getElementById("resultado").innerHTML=result;
}

function restar(){
    let n1=document.getElementById("numero1").value;
    let n2=document.getElementById("numero2").value;
    let result= Number(n1) - Number(n2)
    document.getElementById("resultado").innerHTML=result;
} 

function multiplicar(){
    let n1=document.getElementById("numero1").value;
    let n2=document.getElementById("numero2").value;
    let result= Number(n1) * Number(n2)
    document.getElementById("resultado").innerHTML=result;
}

function dividir(){
    let n1=document.getElementById("numero1").value;
    let n2=document.getElementById("numero2").value;
    let result= Number(n1) / Number(n2)
    document.getElementById("resultado").innerHTML=result;
 }