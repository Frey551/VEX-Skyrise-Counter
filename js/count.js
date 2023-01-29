
function IncDecRed(plusminus) {

plusminus = parseInt (plusminus);

currentScore  = parseInt(document.getElementById("scorered").innerHTML) + plusminus;

document.getElementById("scorered").innerHTML = currentScore;

  }
  
  
function IncDecBlue(plusminus) {

plusminus = parseInt (plusminus);

currentScore  = parseInt(document.getElementById("scoreblue").innerHTML) + plusminus;

document.getElementById("scoreblue").innerHTML = currentScore;

  } 
 
 function reset () {

document.getElementById("scorered").innerHTML = 0;
document.getElementById("scoreblue").innerHTML = 0; 	
 	
 }
