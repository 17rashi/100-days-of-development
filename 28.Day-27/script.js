const shopping = ['Bread','milk','cheese','noodles','Manchurian'];
console.log(shopping[0]);

/*We can store Random values also like integer and string */

const sequence = [1,2,2,3,5,8,13];
const random =['tree',795,[0,1,2]];

//Priniting the array element
for (let i = 0; i < random.length; i++) {
   const element = random[i];
   console.log(element);
}

//Accessing and modifying array elements.

shopping[0]='clothes';
shopping[1]='malls';

for (let i = 0; i < shopping.length; i++) {
   console.log(shopping[i]);
}
console.log('\n');
const multiDimensional = ['one','two',['three','four','five','first','second']];

multiDimensional[0]='five';
multiDimensional[1]='six';
multiDimensional[2][0]='nine';
multiDimensional[2][1]='ten';
// multiDimensional[2][2]='eleven';



console.log(multiDimensional.indexOf('six')); //output = 1 (index of size)
console.log(multiDimensional.indexOf('second'));

//to add an element at the end
multiDimensional.push('extra');
multiDimensional.push('extra2',23);
// multiDimensional.push('extra3');

console.log(multiDimensional);
console.log(multiDimensional.indexOf(23));

//to add an element at the start of the array

console.log(multiDimensional.unshift(90087));

//to remove the element we use pop

multiDimensional.pop(); //it will delete the last element
multiDimensional.shift(); //it will pop out the first elememt
console.log(multiDimensional);

/* use of SPLICE METHOD*/

const cities = ['Manchester', 'Liverpool', 'Edinburgh', 'Carlisle'];
console.log(cities);     // [ "Manchester", "Edinburgh", "Carlisle" ]
const index = cities.indexOf('Liverpool');
if (index !== -1) {
  cities.splice(index, 1);
}
console.log(cities);     // [ "Manchester", "Edinburgh", "Carlisle" ]

/*Accessing every intem */

for (const city of cities){
   console.log(city);
}

console.log('\nMapping in Js\n');

/* Map in JS */

function double(number){
   return number * 2;
}
const numbers = [1,2,3,4,5];
const doubled = numbers.map(double); 
console.log(doubled);

//If you want to create a new array using only some of the elements with specific condition
//you can do that using filter.

function isLong(state){
   return state.length>8;
}
const states = ['Madhya Pradesh','Punjab','Bihar','Himachal Pradesh','Chandigarh'];

const longer = states.filter(isLong);
console.log(longer);

/*conversion between Arrays and String */

const data = 'Bhopal,Agra,Chandigarh,Punjab,Meerut';
const cities2 = data.split(',');
cities2;
console.log(cities2);
console.log('Length of city 2 arrays is : '+cities2.length);


//covert array to string
const fruits = ['Apple','Mango','Orange','Lemon'];
const commaSeprated = fruits.join(', ');
console.log(commaSeprated);

/*Another way to convert array to string is to use toString() method*/

fruits.toString();
console.log(fruits);

