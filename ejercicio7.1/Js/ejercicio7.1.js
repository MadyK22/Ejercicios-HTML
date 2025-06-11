function cont_a(){
    let cad = document.getElementById("cadena").value;
    document.getElementById("resultado").innerHTML=""
    let contador=0
     for (let i = 0; i < cad.length; i++){
        if(cad[i]== 'a' || cad[i]=='A'){
            contador++;
            
        }
        
    } 
     document.getElementById("resultado").innerHTML +=`La cadena tiene    ${contador}   letras`;
    
        
}
