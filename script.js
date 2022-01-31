const addButton = document.getElementById("add") // Add button
const input = document.getElementById("Input") // input text plate
const view = document.getElementById("view") // Shows where the todos will view
const inputValue = input.value
var todo = [] // Empty array to put the to dos in
var counter = 0




function inputToDo() { 
  view.innerHTML += `<span id="${counter}">${input.value} 
  <button id="X" onclick="xButton(this)" class="xButton">X</button> <br> </span> `
}
  // Button makes a button right next to do todo
  
function xButton(elem){
  elem.parentNode.remove()
}