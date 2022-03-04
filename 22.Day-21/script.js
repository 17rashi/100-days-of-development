let randomNumber = Math.floor(Math.random() * 100) + 1;

const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const loworHigh = document.querySelector('.loworHigh');


const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');

let guessCount = 1;
let resetButton;

console.log(randomNumber);

/*
function checkGuess() {
   alert('I am a placeholder');
}
*/

function checkGuess(){
   const userGuess = Number(guessField.value);

   if(guessCount === 1){
      guesses.textContent = 'Previous guesses: ';
   }

   guesses.textContent +=userGuess +' ';

   if(userGuess === randomNumber){
      lastResult.textContent = 'Congratulations! you got it right.';
      lastResult.style.backgroundColor = 'lightgreen';
      loworHigh.textContent ='';
      setGameOver();
   }
   else if(guessCount === 10){
      lastResult.textContent = '!!!GAME OVER!!!';
      loworHigh.textContent='';
      setGameOver();
   }
   else{
      lastResult.textContent = 'Wrong!';
      lastResult.style.backgroundColor='pink';
      if(userGuess<randomNumber){
         loworHigh.textContent='Last guess was too low!';
      }
      else if(userGuess>randomNumber){
         loworHigh.textContent = 'Last guess was too high!';
      }
   }
   guessCount++;
   guessField.value='';
   guessField.focus();
}

guessSubmit.addEventListener('click', checkGuess);

function setGameOver(){
   
}