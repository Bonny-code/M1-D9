window.onload = function() {
    displayAllNumbers()
}
const displayAllNumbers = function() {
let displayFullNumber = document.getElementById("fcontainer")

for (let number=0; number <= 76; number++) {
    let newNumber = document.createElement("div")
    newNumber.innerText = number
    newNumber.classList.add("cell")
    displayFullNumber.appendChild(newNumber)
}

}

let button = document.getElementsByClassName("btn")
let myArray = ["1", "2", "3", "4", "5"]

button.onclick = function(){
    
    alert(myarray[Math.floor(Math.random() * myarray.length)]);
}