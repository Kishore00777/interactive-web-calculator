function appendToInput(value) {
  document.getElementById('input').value += value;
}
function calculate() {
  var input = document.getElementById('input').value;
  var result = eval(input);
  document.getElementById('result').innerHTML = result;
}

function clearResult() {
  document.getElementById("input").value = "";
}
let resultField = document.getElementById('input');
function deleteLastChar() {
resultField.value = resultField.value.slice(0, -1);
}