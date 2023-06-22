console.log(document.querySelector("ol").lastElementChild)

document.querySelector("ol").insertAdjacentElement("afterbegin",document.querySelector("ol").lastElementChild)
// This will change the last element to the first element position

// move the H2 of the second section to the third section and vice-versa

console.log(document.querySelectorAll("section"))

let section = document.querySelectorAll("section") // We could use .children to do an array with all children in it

let second = section[2].firstElementChild.firstElementChild
let third = section[1].firstElementChild

section[1].insertAdjacentElement("afterbegin", second)
section[2].insertAdjacentElement("afterbegin", third)

// the insertAdjacentElement move the element not only add it.

// Delete the footer

let footer = document.getElementsByTagName("footer")
footer[0].remove()