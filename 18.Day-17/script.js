function changeText(){
   document.getElementById("demo").innerHTML="Para changed now";
}

"use strict";

var box=document.getElementById('box');
var clickCount=document.getElementById('Click-count');
var count=0;
box.addEventListener('click',function(){
   count++;
   console.log(count);
   clickCount.innerText=count+" ";
});