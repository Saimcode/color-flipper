const colors = ["#ff0000", "#ffa500", "#ffff00", "#008000", "#0000ff", "#4b0082", "#ee82ee"];
const btn = document.getElementById("btn-hero");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
    // get random number
    const randomNumber = getRandomNumber();
    console.log(randomNumber);

    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}

// copy text on click
const copyText = document.querySelector(".btn-copy");

// copy to clipboard function
function copyToClipboard() {
    let text = document.querySelector(".color");
    text[0].select();
    document.execCommand("copy");
    console.log("Copied to clipboard");
}

copyText.addEventListener("click", copyToClipboard);