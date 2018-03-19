/*Il software deve generare 16 numeri casuali da 1 a 100.
In seguito chiede all'utente di inserure un numero da 1 a 10, se il numero
corrisponde a uno dei 16 num generati casualmente, il ciclo si interrompe,
l'utente perde, altrimenti il punteggio sale a uno e l'utente inserisce un
altro numero finche becca uno dei numeri vietati presenti nella lista da 16.
Ogni volta che non si inserisce un numero vietato il punteggio sale di 1.
A fine ciclo il programma genera il punteggio totale.
*/

//variabile per scegliere il grado di difficolta
var c = prompt("Inserisci il grado di difficolta");
var casualnumber = [];


//istruzione del programa che sceglie i numeri casuali e li memorizza in un array;
//in base al grado di difficolta scelta dall'utente

if(c==0){
  for(var i=0;i<16;i++){
    casualnumber[i]=Math.floor((Math.random() * 100) + 1);
  }
}
else if (c==1) {
  for(var i=0;i<16;i++){
    casualnumber[i]=Math.floor((Math.random() * 80) + 1);
  }

}
else if (c==2) {
  for(var i=0;i<16;i++){
    casualnumber[i]=Math.floor((Math.random() * 50) + 1);
  }
}
else {
  alert("Scelta sbagliate, inserisci un numero che sia , 0 , 1 , o 2.");
}
alert(casualnumber);

var punteggio=0;

//ciclo do while che si ripete finche l'utente inserisce un numero
//uguale a uno dei numeri vietati, e stampa il punteggio finale

do {
  var inputNumber= prompt("inserisci un numero da 1 a 10 compresi:");
  for(var i=0; i<16; i++){
    if(inputNumber!=casualnumber[i]){
      punteggio++;
    }
  }



} while (inputNumber==casualnumber[i]);

document.write("fine del gioco , punteggio = ", + punteggio);
