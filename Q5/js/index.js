function createToDo() {
  var todo = document.createElement("div");
  var span = document.createElement("span");
  var input = document.getElementById("input").value;
  if (input == "") {
    input = "廢文一篇耶";
  }
  span.innerHTML = input;
  todo.appendChild(span);

  if(window.radio1.checked){
    span.style.color = "red";
  }else{
    span.style.color = "darkgreen";
  }

  var replaceButton = document.createElement("button");
  replaceButton.onclick = function() {
    var input = document.getElementById("input").value;
    if (input == "") {
      alert("你並沒有輸入任何文字");
      return;
    }
    this.parentNode.firstChild.innerHTML = input;
    document.getElementById("input").value = "";
  }
  replaceButton.textContent = "R";
  todo.appendChild(replaceButton);

  var removeButton = document.createElement("button");
  removeButton.onclick = function() {
    if (window.confirm("是否確定完成？")){
    span.style.color="blue";
    todo.removeChild(removeButton)
    todo.removeChild(replaceButton)
    }
  }
  removeButton.textContent = "V";
  todo.appendChild(removeButton);



  document.getElementById("todolist").appendChild(todo);
  document.getElementById("input").value = "";
}