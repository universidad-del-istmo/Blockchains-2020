$(document).ready(function () {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const stat = urlParams.get('stat')
  if (stat == 1) {
    alert("Success!");
  }
  else if(stat == 0) {
    alert("Something went wrong!");
  }
  
});
function save() {
  var userInput = document.getElementById("registros").innerHTML;
  userInput = userInput.trim();
  userInput = userInput.replace(/\s+/g, "");
  userInput = userInput.replace(/<td>/g, "");
  userInput = userInput.replace(/<\/td>/g, "\t");
  userInput = userInput.replace(/<tr>/g, "");
  userInput = userInput.replace(/<\/tr>/g, "\n");
  
  var blob = new Blob([userInput], { type: "text/plain;charset=utf-8" });
  saveAs(blob, "hosts.txt");
}