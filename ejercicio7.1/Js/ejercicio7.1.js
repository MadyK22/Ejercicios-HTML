function cont_a(){
    let cad = document.getElementById("cadena").value;
    let contador=0
     for (let i = 0; i < cad.length; i++){
        if(cad[i]== 'a'){
            contador++;
        }
        
    } 
     document.getElementById("resultado").innerHTML +=`La cadena tiene    ${contador}   letras`;
    
        
}
