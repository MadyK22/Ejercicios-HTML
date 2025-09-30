// creacion de la lista de jugadores
let jugadors=[];

function afegir(){
    // Creacion de la variable que va contener el nombre del jugador
    let player=document.getElementById("nombre").value;

    // Salida por pantalla
    document.getElementById("llistat").innerHTML+=`${player}<br>`;

    // Añadiendo usuario a la lista
    jugadors.push(player);
    
}

function next(){
    // Mostramos el primer jugador
    document.getElementById("ara").innerHTML=jugadors[0];
 
    // Sacamos el primer jugador de la lista
    let element_eliminat=jugadors.shift();

    // Añadimos al final el jugador que acabamos de sacar
    jugadors.push(element_eliminat);
    

    // Actualizamos la lista por pantalla
    output.innerHTML="";

      for (let i = 0; i < jugadors.length; i++) {
        document.getElementById("player").innerHTML+=`${jugadors[i]}<br>`;}
}

  


