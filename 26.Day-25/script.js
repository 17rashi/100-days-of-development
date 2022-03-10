// const greeting = `Hello`;

const name = 'Chris';
const greeting = `Hello , ${name}`;

const one = 'hello, ';
const two = 'how are you?';
const joined = `${one}${two}`;


const button = document.querySelector('button');

button.addEventListener('click',greet);
function greet(){
   const name = prompt('What is you name?');
   alert(`Hello, ${name} nice to see you!`);
}

const myString = '123';
const myNum = Number(myString);
console.log(typeof myNum);

const myNum2 = 123;
const myString2 = myNum.toString();
console.log(myString2);

const song = 'Fight the Youth';
const score = 9;
const highestScore = 10;
const output = `I like the song ${song}. I gave it a score of ${score/highestScore * 100}%.`;
console.log(output);  // "I like the song Fight the Youth. I gave it a score of 90%."

const intro = `I am Rashi.
I love coding`;
console.log(intro);

// or 
const intro2 = 'I am Rashi\nI love to code';
console.log(intro2); 