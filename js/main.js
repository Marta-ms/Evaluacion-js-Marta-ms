"use strict"

//Juego de "adivinar el número"

/*La aplicación genera un número al azar entre el 1 y el 100 y la usuaria tiene que adivinarlo.
Si quiere volver a jugar tiene que recargar la página. */

//Pasos

/*Seleccionar los elementos del html: input, boton, pos párrafos, boton recargar? */

const button = document.querySelector(".js-btn-proof");
const numberInput = document.querySelector(".js-input");
const textClue = document.querySelector(".js-paragraph");
const attempts = document.querySelector(".js-paragraph2");






function getRandomNumber(max) { 
    return Math.ceil(Math.random() * max); 
    } 

const randomNumber = getRandomNumber(100);
console.log(randomNumber)


/*escuchar el click*/

button.addEventListener("click", (event) => {
    event.preventDefault();
    const randomNumber = numberInput.value;


        // if (ramdomNumber === "")
    
        if (numberInput === getRandomNumber) {
            textClue.innerHTML = "Has ganado campeona!!!";
    
        }  else if (numberInput > getRandomNumber) {
            textClue.innerHTML = "Demasiado alto";
    
        }  else if (numberInput < getRandomNumber) {
            textClue.innerHTML = "Demasiado bajo";
            
        }   else {
            textClue.innerHTML = "El número debe estar entre 1 y 100";
        }
    
    
});












   
   
   
   
   
   
   
   
  





  


/*Recoger el valor(numero) que escribe la usuaria*/
