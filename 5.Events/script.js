const _initTime = Date.now()

const getElapsedTime = () => {
  return Number((Date.now() - _initTime) / 1000).toFixed(2) + 's'
}

let list = document.querySelector("ul")
let duplicateSquares = document.querySelectorAll('.displayedsquare')

const clickOnSquare = (e) => {
  console.log(e.target.classList[1]) // classList sert à chopper les différentes classes
  console.log(getElapsedTime())
  let info = document.createElement("li")
  info.textContent = `[${getElapsedTime()}] Created a new ${e.target.classList[1]} square`
  list.appendChild(info)
  let div = document.createElement("div")
  div.className = e.target.classList
  div.classList.add("displayedsquare")
  let space = document.querySelector(".displayedsquare-wrapper")
  space.appendChild(div)
  duplicateSquares = document.querySelectorAll('.displayedsquare')
  console.log(duplicateSquares)
  for (let duplicateSquare of duplicateSquares){
    duplicateSquare.addEventListener('click', alertSquare)
  }
}

const actionSquares = document.querySelectorAll('.actionsquare')
for (let actionSquare of actionSquares) {
  actionSquare.addEventListener('click', clickOnSquare)
}

const alertSquare = (e) =>{
  alert(e.target.classList[1])
}





console.log(actionSquares)









// let body = document.body

// body.addEventListener("keypress", (event) => {
//     console.log("test")
//     console.log(KeyboardEvent.keyCode)
//     if (event.key === " "){
//         body.style.backgroundColor = "blue"
//     }
// })

let body = document.body;

body.addEventListener("keydown", (event) => {
    let keyCode = event.keyCode //Depreciated
    if (keyCode === 32){
        body.style.backgroundColor = "blue"
    }
    console.log(keyCode);
});
