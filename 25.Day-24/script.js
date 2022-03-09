const btn=document.querySelector('button');
const text=document.querySelector('p');

btn.onclick=()=>{
   if(btn.textContent==='Start Machine'){
      btn.textContent='Stop Machine';
      text.textContent='Machine has started';
   }
   else{
      btn.textContent='Start Machine';
      text.textContent='Machine has stopped';
   }
}