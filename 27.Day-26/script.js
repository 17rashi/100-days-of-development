const browser = 'I am string, I will print my length in browser';
browser.length;
console.log(browser.length);
console.log(browser[browser.length-1]);


/*Testing if a string contains a substring*/

const browserType = 'mozilla';

if(browser.includes('will')){
   console.log('present');
}else{
   console.log('Absent');
}


const str1 = 'Saturday night plans';

console.log(str1.startsWith('Sat'));
// expected output: true

console.log(str1.startsWith('Sat', 5)); //true if stating 5 letters matched

console.log(str1.endsWith('ans'));
// expected output: false



/*Extracting a substring from a string*/

const sliceMethod = 'This is a string.';
console.log(sliceMethod.slice(1,14));
console.log(sliceMethod.slice(5));


/*Changing Case*/

//toLowerCase() & toUpperCase();

const changeCase = 'I aM a StRinG.';

console.log(changeCase.toLowerCase());
console.log(changeCase.toUpperCase());


//Updating a part of a string

const updatingPart = 'Mozilla';
const updated=updatingPart.replace('Moz','Van');

console.log(updated);

let updatingPart2 = 'Mozkila' //if you want tp edit the original string you must declare it as let
updatingPart2=updatingPart2.replace('Moz','Van');
console.log(updatingPart2);


/*Important Example*/

const list = document.querySelector('.output ul');
list.innerHTML = '';
const stations = ['MAN675847583748sjt567654;Manchester Piccadilly',
                  'GNF576746573fhdg4737dh4;Greenfield',
                  'LIV5hg65hd737456236dch46dg4;Liverpool Lime Street',
                  'SYB4f65hf75f736463;Stalybridge',
                  'HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield'];

for (let station of stations) {
  // write your code just below here
  const firstThree = station.slice(0,3);
  const idx = station.indexOf(';');
  const appendLast = firstThree + ': ' + station.slice(idx+1);
  const result = appendLast;
  const listItem = document.createElement('li');
  listItem.textContent = result;
  list.appendChild(listItem);
}

/*Pythagorean Theorem - Test*/

const theorem = 'Pythagorean theorem';

const a = 5;
const b = 8;

const myString = `Using ${theorem}, we can work out that that if the two shortest sides of a right-angled triangle have lengths of ${a} and ${b}, the length of the hypotenuse is ${(Math.sqrt((a*a)+(b*b))).toFixed(2)}.`;


// Don't edit the code below here!

section.innerHTML = ' ';
const para1 = document.createElement('p');
para1.textContent = myString;

section.appendChild(para1);