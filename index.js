window.addEventListener('load', function () {

function randomNumber(min, max) { 
  return Math.floor(Math.random() * (max - min) + min);
} 

function myMove() {
    let elem = document.getElementById('nut');
    let elem1 = document.getElementById('squir');
    let id = setInterval(frame, 2000);
    function frame() {
            
      elem.style.top = randomNumber(0, window.innerHeight) + 'px';
      elem.style.left = randomNumber(0, window.innerWidth) + 'px';
      
      elem1.style.top = randomNumber(0, window.innerHeight) + 'px';
      elem1.style.left = randomNumber(0, window.innerWidth) + 'px';
     
    }
    }
  
  myMove ()

})