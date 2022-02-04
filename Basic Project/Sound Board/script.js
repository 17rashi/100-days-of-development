const sounds = ['song1','song2','song3','song4','song5'];

sounds.forEach(sound =>{
   const btn= document.createElement('button')
   btn.classList.add('btn')

   btn.innerHTML=sound
      // console.log(btn);
   btn.addEventListener('click', () =>{
      stopSongs();
      document.getElementById(sound).play();
   })
   document.getElementById('buttons').appendChild(btn);
});

function stopSongs(){
   sounds.forEach(sound =>{
      const song = document.getElementById(sound)

      song.pause();
      song.currentTime=0;
   })
};