  function playBiza(){
  	   var sound1=document.getElementById("audio");
  	   var sound2=document.getElementById("audio2");

       var full=[sound1,sound2];
       var broj= Math.floor(Math.random() * 2);
       full[broj].play();
   }