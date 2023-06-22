// let list = document.querySelector("ul").children

// console.log(list.children)
// for (let element in list){

// }
console.log(document.body.childNodes)

// let nodes = document.body.childNodes[3].childNodes
let nodes = document.body.querySelector("ul").childNodes
for (let node of nodes){ // for in -> works on object and for of works for tabular
    // console.log(node.nodeType)
    node.addEventListener("click", () => {
        if (node.textContent == "Fast and Furious"){
            alert("The most important franchise ever, the story of DOM(inic) Toretto's family. It's not about car, it's about family.")
        }
        else{
            alert(node.textContent)
        }
    })
    if (node.nodeType === 1){
        if (node.textContent == "Fast and Furious"){
            node.parentElement.prepend(node)
            node.className = "important"
        }
    }
}

const remove = () => {
    for (let i = 0 ; i < nodes.length ; i++){
        for (let j = i+1 ; j < nodes.length ; j++){                 //problem with index j out of range ?
            if (nodes[i].textContent === nodes[j].textContent){
                nodes[j].remove()
            }
        }
    }
}

remove()
addEventListener("keyup", (e) => {
    if (e.key == "k"){
        let nodesFast = document.body.querySelector("ul").childNodes
        console.log(nodesFast)
        for (let i = 0 ; i < nodesFast.length ; i++){
            for (let j = i+1 ; j < nodesFast.length ; j++){                 //problem with index j out of range ?
                if (nodesFast[i].textContent === nodesFast[j].textContent){
                    nodesFast[i].remove()
                    j-=1
                }
            }
        }
    }
})

const randomize = (e) => {
    if (e.key === "r"){
        let copyTab = []
        let nodesTabRandom = []
        for (node of nodes){ // Dans nodes, 12 éléments
            if (node.nodeType === 1){
                copyTab.push(node)
            }
        }
        // console.log(copyTab)
        let lengthOfCopyTab = copyTab.length
        for (let j = 0 ; j < lengthOfCopyTab ; j++){ // length = 12
            let randomNumber = Math.floor(Math.random()*(lengthOfCopyTab - (j)))
            // console.log(randomNumber)
            nodesTabRandom.push(copyTab[randomNumber])
            copyTab.splice(randomNumber,1)
        }
        // console.log(nodesTabRandom)
        for (let k = 0 ; k < nodesTabRandom.length ; k++){
            if (nodesTabRandom[k].textContent == "Fast and Furious"){
                document.body.querySelector("ul").prepend(nodesTabRandom[k])
            }
            else{
                document.body.querySelector("ul").appendChild(nodesTabRandom[k])
            }
        }
    }
}


document.body.addEventListener("keyup", randomize)


const duplicate = (e) => {
    if (e.key === "d"){
        let fast = document.createElement("li")
        fast.textContent = "Fast and Furious"
        document.body.querySelector("ul").prepend(fast)
    }
}

document.body.addEventListener("keyup", duplicate)


let selectDiv = document.createElement("div")
selectDiv.id = "selectDiv"
document.body.insertBefore(selectDiv, document.body.querySelector("ul"))

let selectTag = document.createElement("select")
selectTag.id = "selectTag"
let option0 = document.createElement("option")
let option1 = document.createElement("option")
let option2 = document.createElement("option")
option1.value = "important"
option2.value = "notThatImportant"
option0.value = "all"
option1.textContent = "Important franchises"
option2.textContent = "Normal franchises"
option0.textContent = "All franchises"

document.getElementById("selectDiv").appendChild(selectTag)
document.getElementById("selectTag").appendChild(option0)
document.getElementById("selectTag").appendChild(option2)
document.getElementById("selectTag").appendChild(option1)

let selection = document.getElementById("selectTag")



selection.addEventListener("change", () => {
    // console.log(selection.value)
    for (element of document.querySelector("ul").children){
        if (element.nodeType == 1){
            if (selection.value == "all"){
                element.style.visibility = "visible"
            }
            if (selection.value == "important" && element.className == "important"){
                element.style.visibility = "visible"
            }
            else if (selection.value == "important" && element.className != "important"){
                element.style.visibility = "hidden"
            }
    
            if (selection.value == "notThatImportant" && element.className != "important"){
                element.style.visibility = "visible"
            }
            else if (selection.value == "notThatImportant" && element.className == "important"){
                element.style.visibility = "hidden"
            }
        }
    }
})








// let nodes = document.body.childNodes
// for (let i = 0 ; i < nodes.length ; i++){
//     console.log(nodes[i].nodeType)
    // if (node.nodeType == 1){
    //     console.log("type1")
    // }
// }