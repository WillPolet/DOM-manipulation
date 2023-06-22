let inputs = document.querySelectorAll("input")
// console.log(Inputs[0])

const copyName = (e) => {
document.getElementById("display-firstname").textContent = e.target.value
}

const oldEnough = (e) => {
    let age = document.getElementById("age").value
    let truth = document.getElementById("a-hard-truth")
    if (age >= 18){
        truth.style.visibility = "visible"
    }
}

inputs[0].addEventListener("keyup" , copyName)
inputs[1].addEventListener("keyup", oldEnough)

const verifypwd = (e) => {
    if (inputs[3].value == ""){
        if (inputs[2].value.length < 6){
            inputs[2].style.backgroundColor = 'red'
        }
        else{
            inputs[2].style.backgroundColor = 'white'
        }
    }
    else {
        if (inputs[2].value != inputs[3].value){
            inputs[2].style.backgroundColor = 'red'
            inputs[3].style.backgroundColor = 'red'
        }
        else{
            inputs[2].style.backgroundColor = 'green'
            inputs[3].style.backgroundColor = 'green'
        }
    }
}


inputs[2].addEventListener("keyup", verifypwd)
inputs[3].addEventListener("keyup", verifypwd)


let select = document.querySelector("select")

const mode = () => {
    console.log("testmode")
    console.log(select.value)
    console.log(typeof(select.value))
    if (select.value == "light"){
        document.body.style.backgroundColor = "white"
        document.body.style.color = "black"
    }
    else {
        document.body.style.backgroundColor = "black"
        document.body.style.color = "white"
    }
}

select.addEventListener("change", mode)