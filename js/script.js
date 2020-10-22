
// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.

//inizianilizzo le variabili
var bgenera = document.getElementById('verifica');
var bannulla = document.getElementById('annulla');

// Creo l'array email
var emailArray = ["ilaria@gmail.com", "giorgio@gmail.com", "mario@gmail.com", "davide@gmail.com"];



  bgenera.addEventListener('click',
   function()
   {
     var emailUte = document.getElementById('email').value;
     //email inserita dall'utente
     console.log("email inserita dall'utente: ", emailUte);

     var emailtrovata = false;
     for( var i = 0; i < emailArray.length; i++ ){

       //visualizzo info array
       console.log("le email nell'array sono: ", emailArray[i]);

       //controllo se e' in lista
         if(emailUte == emailArray[i]){
         emailtrovata = true;
         console.log("l'email e' in lista", emailtrovata);
         }
        }

        //Stampo output
        if( emailtrovata === true){
          alert("!!!!La su email e' in lista e puo' entrare!!!!");
        }else
          alert("La su email NON e' in lista e  NON puo' entrare");
    }
    );


    bannulla.addEventListener('click',
     function(){
       document.getElementById('myform').reset();
       // emailUte =""
     }
    );
