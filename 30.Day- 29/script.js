fruits = ['Apple','Mango','banana','Grapes','Orange','Melon'];

for(const fruit of fruits){
   console.log(fruit);
}

/*to convert in uppercase*/
function toUpper(string){
   return string.toUpperCase();
}
const upperFruits = fruits.map(toUpper);
console.log(upperFruits);


/*to filter out fruits name started with A*/
function firstLetter(string){
   return string.startsWith('M');
}
const filterFruits = fruits.filter(firstLetter);
console.log(filterFruits);

