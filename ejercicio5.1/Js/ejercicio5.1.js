function Init(){
    let n1=document.getElementById("numero1").value;
    let n2=document.getElementById("numero2").value;
    let result= Mitjana(n1,n2);
    document.getElementById("resultado").innerHTML= result;
}

function Mitjana(a,b){
    let x=(Number(a) + Number(b))/2;
    return x;

}



