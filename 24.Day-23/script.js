const buttonA=document.querySelector("#button_A")
const heading_A=document.querySelector("#headingA")

buttonA.onclick=()=>{
   const name=prompt('What is your name?');
   alert(`Hello ${name}, nice to see you`);
   heading_A.textContent = `Welcome ${name}`;
}