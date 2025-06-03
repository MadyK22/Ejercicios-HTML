

function calcular(opcion){
    let n1=document.getElementById("numero1").value;
    let n2=document.getElementById("numero2").value;
    let result;

    switch(opcion){
        case 1:
             result= Number(n1)+ Number(n2);
            break;

            case 2:
             result= Number(n1) - Number(n2);
            break;

            case 3:
             result= Number(n1) * Number(n2);
            break;

            case 4:
             result= Number(n1) / Number(n2);
            break;
    }

    document.getElementById("resultado").innerHTML=result;
}
