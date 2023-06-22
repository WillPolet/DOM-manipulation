/* There's 26 learner in my group -> while to do 26 sections with random bg color */

/* The part about the color would be hard think of it later*/

const randomColour = () => {
    return Math.floor(Math.random() * 255)
}

//#region tableau
let tableau = []
tableau[0] = "Florentina"
tableau[1] = "Oana"
tableau[2] = "Athi"
tableau[3] = "Jean-Louis"
tableau[4] = "Zuzana"
tableau[5] = "Camila"
tableau[6] = "Jonh"
tableau[7] = "Leslie"
tableau[8] = "Glaucielle"
tableau[9] = "Antoine S."
tableau[10] = "Safa"
tableau[11] = "Alizee"
tableau[12] = "William"
tableau[13] = "Noah"
tableau[14] = "Raad"
tableau[15] = "Antoine"
tableau[16] = "Aziza"
tableau[17] = "Leila"
tableau[18] = "Giorgi"
tableau[19] = "Prince"
tableau[20] = "Francesca"
tableau[21] = "Lucie"
tableau[22] = "Ignace"
tableau[23] = "Louis"
tableau[24] = "Adam"
tableau[25] = "Walid"
tableau[26] = "Diogo & Nicolas"
//#endregion

//#region isDark?

function isColorDark(rgb) {
    // Extract the individual RGB components
    const red = rgb[0] / 255;
    const green = rgb[1] / 255;
    const blue = rgb[2] / 255;
  
    // Calculate the relative luminance using the sRGB luminance formula
    const luminance = 0.2126 * red + 0.7152 * green + 0.0722 * blue;
  
    // Return true if the luminance is below a threshold, indicating a dark color
    return luminance < 0.5;
  }

//#endregion


let i = 0
while (i < 27){
    let section = document.createElement("section")
    let red = randomColour()
    let green = randomColour()
    let blue = randomColour()
    let color = [red,green,blue]
    section.style.backgroundColor = `rgb(${red},${green},${blue})` ;
    section.id = "section" + i
    let paragraphe = document.createElement("p")
    randomName = Math.floor(Math.random() * (27-i))
    paragraphe.textContent = tableau[randomName]
    if (isColorDark(color)) {
        paragraphe.style.color = "white"
      } else {
        paragraphe.style.color = "black"
      }
    tableau.splice(randomName,1)
    document.getElementsByTagName("article")[0].appendChild(section)
    document.getElementById(section.id).appendChild(paragraphe)
    i+=1
}

