function changeMessage(){

let input = document.getElementById("userInput").value;
document.getElementById("text").innerHTML = input;

}

function changeBackground(){

let colors = ["lightblue","lightgreen","lightyellow","pink","lavender"];
let randomColor = colors[Math.floor(Math.random()*colors.length)];

document.body.style.backgroundColor = randomColor;

}

function increaseFont(){

let para = document.getElementById("text");
let size = window.getComputedStyle(para).fontSize;
size = parseFloat(size) + 2;

para.style.fontSize = size + "px";

}

function randomParagraph(){

let arr = [
"JavaScript makes websites interactive.",
"Learning coding improves logical thinking.",
"Events help us trigger actions in JS.",
"Practice coding daily to improve skills."
];

let random = arr[Math.floor(Math.random()*arr.length)];

document.getElementById("text").innerHTML = random;

}

function hideText(){

let para = document.getElementById("text");

if(para.style.display === "none"){
para.style.display = "block";
}else{
para.style.display = "none";
}

}