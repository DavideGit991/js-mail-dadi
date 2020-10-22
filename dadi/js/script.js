
// Generare un numero random da 1  a 6, sia per il giocatore sia per il computer
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

//inizianilizzo le variabili

var generaDadi= document.getElementById('lancio');
// var generaUte= document.getElementById('ute');


//bottone Pc
generaDadi.addEventListener('click',
 function(){
   var dadoPc =  parseInt(Math.floor((Math.random()*6)+1));
   console.log(dadoPc);


    var dadoUte = parseInt(Math.floor((Math.random()*6)+1));
    console.log(dadoUte);

    // CONFRONTO TRA DATI E RESTITUZIONE output
    if(dadoUte == dadoPc) {
      alert("!!!!Ritenta avete pareggiato!!!!");
    }else if(dadoUte > dadoPc) {
      alert("!!!!HAI VINTO =) !!!!");
    }else{
      alert("!!!!HAI PERSO =( !!!!");
    }
  }
);
