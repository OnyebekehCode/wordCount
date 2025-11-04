const input = document.getElementById("text-input");
const button = document.getElementById("check-btn");
const result = document.getElementById("result");
let output = ""
let cleanedString = ""


const checkValidInput = ()=>{
  if (input.value === ""){
    alert("yo! what do you want me to count?")
  }else{
    countWords()
  }
}
button.addEventListener("click", checkValidInput)

function countWords(){
output = [input.value].toString()
let count = output.split(" ")
 count = `Your article contains ${count.length} words`
result.textContent = count
}