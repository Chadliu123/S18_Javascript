var state = true;
function toggleLight() {
  var image = document.getElementById("image");
  state = !state;
  image.src = state ? "img/on.jpg" : "img/off.jpg";
}


var id = 0;
var timeLeft = 0;

function setTime(){
  var input = document.getElementById('input').value;
  if (input == ""){
    alert("請輸入倒數秒數");
    return;
  }if(isNaN(input)){
    alert("請輸入數字！");
    document.getElementById('input').value = "";
    return;
  }else{
   id = setInterval(countDownTimer,1000);
   document.getElementById('timer').innerHTML = input;
   timeLeft = input;
   document.getElementById('input').value = "";
  }
}



function countDownTimer() {
  timeLeft = timeLeft - 1;
  if (timeLeft <= 0) {
    document.getElementById("image").src = "img/off.jpg";
    clearInterval(id);
  }
  document.getElementById("timer").innerHTML = timeLeft;
}

