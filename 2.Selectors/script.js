let a = document.getElementsByClassName("important")
for (let i = 0 ; i < a.length ; i ++){
    a[i].title = "This is an important item"
    console.log(a[i])
}

let images = document.getElementsByTagName("img")

for (let j = 0 ; j < images.length ; j++){
    if (images[j].className != "important"){
        images[j].style.display = "none"
    }
}

const randomColour = () => {
    return Math.floor(Math.random() * 255)
}

let paragraphes = document.getElementsByTagName("p")

for (let k = 0 ; k < paragraphes.length ; k++){
    console.log(paragraphes[k].textContent)
    if (paragraphes[k].className != ""){
        console.log(paragraphes[k].className)
    }
    else {
        paragraphes[k].style.color = `rgb(${randomColour()},${randomColour()},${randomColour()})`;
    }
}


console.log(document.title)