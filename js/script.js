
let PlayerOneInputFiled = document.querySelector("#playerOneInput")
let playerOneButton = document.querySelector(".playerOneBtn")
let displayedError = document.querySelector(".error")

playerOneButton.addEventListener("click", function(){
console.log(PlayerOneInputFiled.value)

if(PlayerOneInputFiled.value == ""){
  displayedError.style.display = "inline-block"
}
else{
  if(Number(PlayerOneInputFiled.value)){
    displayedError.innerHTML = ""

     
     
  }
  else{
    displayedError.style.display = "inline-block"
     displayedError.innerHTML = "Please Give a Number LIKE(1,2,3)"

  }
 
}


})