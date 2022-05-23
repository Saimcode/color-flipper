const hex = ["A", "B", "C", "D", "E", "F", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const btn = document.getElementById("btn-hero");
const color = document.querySelector(".color");
const colorContainer = document.querySelector(".container-bg");

btn.addEventListener("click", function () {
    // get random number
    let hexColor = '#';
    for (let i = 0; i < 6; i++) {
        hexColor += hex[getRandomNumber()];
    }
    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
    document.colorContainer.style.backgroundColor = hexColor;
    console.log(hexColor);
});


function getRandomNumber() {
    return Math.floor(Math.random() * hex.length);
}

// copy text on click
const copyText = document.getElementById("btn-copy");

// copy to clipboard function
function copyToClipboard() {
    let text = document.getElementById("color");
    text[0].select();
    document.execCommand("copy");
    console.log("Copied to clipboard");
}

copyText.addEventListener("click", copyToClipboard);


//=========== COPY TO CLIPBOARD TOOLTIP ===========//
