function validate(){
  var code = document.getElementById("nric").value;
  if(code == ""){
    alert("內容不能為空的！");
  } if(!isNaN(code)){
    alert("內容不能是數字!");
  } if(code.length != 10){
    alert("內容的長度不正確!");
  } if(code[1] == 1){
    document.getElementById("result").innerHTML = "歡迎Ｘ先生";
    return;
  } if(code[1] == 2){
    document.getElementById("result").innerHTML = "歡迎Ｙ小姐";
    return;
  } else{
    alert("性別輸入錯誤");
  }
  
}