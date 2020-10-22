
// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.

//inizianilizzo le variabili
var bgenera = document.getElementById('verifica');
var emailUte = document.getElementById('email').value;

//inizializzo l'array email
var emailArray = ["ilaria@gmail.com", "giorgio@gmail.com", "mario@gmail.com", "davide@gmail.com"];


  //controllo se e' in lista
  bgenera.addEventListener('click',
   function()
   {
     for(var i = 0; i < emailArray.length; i++ ){

       //visualizzo info array
       console.log("le email nell'array sono: ", emailArray[i]);

       //stampa allert e' in lista
     console.log("email inserita dall'utente: ", emailUte);
        if(emailUte === emailArray[i] ){
          console.log("l'email e' in lista");
          alert("La su email e' in lista e puo' entrare");
        }
        else{
          //stampa allert la sua email non e' in lista
           console.log("l'email NON è in lista");
        }
      }
    }
    );
