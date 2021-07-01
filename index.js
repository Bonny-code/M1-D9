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