function Init_Maxim(){
    let n1=document.getElementById("numero1").value;
    let n2=document.getElementById("numero2").value;
    let result= Maxim(n1,n2);
    document.getElementById("resultado").innerHTML= result;
}

function Maxim(a,b){
    if(a>b){
        return(a);
    }

    else{
        return(b);
    }


}
