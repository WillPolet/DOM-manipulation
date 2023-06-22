var a = document.getElementsByTagName("h1")
for (let i = 0 ; i < a.length ; i ++){
    console.log(a[i])
}


var c = document.title
console.log(c)

document.title = "Modifying the DOM"

const randomColour = () => {
    return Math.floor(Math.random() * 255)
}

console.log(randomColour())


document.body.style.backgroundColor = `rgb(${randomColour()},${randomColour()},${randomColour()})`;

// console.log(document.children[0].children[1])

let child = document.children[0].children[1].children

for (let j = 0 ; j < child.length ; j ++){
    console.log(child[j])
}
