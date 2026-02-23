const button = document.getElementById("formatButton");
const input = document.getElementById("inputText");
const output = document.getElementById("outputText");

button.addEventListener("click",function (){
    const text = input.value;
    output.textContent = text;
});