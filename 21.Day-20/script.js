const name1 = document.getElementById('name');

name1.addEventListener('click',updateName);

function updateName(){
   const newName=prompt('Enter a new name');
   name1.textContent=`Player 1: ${newName}`;
}

/*
const para = document.querySelector('p');

para.addEventListener('click', updateName);

function updateName() {
  const name = prompt('Enter a new name');
  para.textContent = `Player 1: ${name}`;
}
*/

