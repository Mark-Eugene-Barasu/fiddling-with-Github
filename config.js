console.log("index.js");
console.log("version2 updated");


for(let i = 0; i < 100; i++){document.write(`<p>this is what we used to do back in 2018</p> `)};

(function background_coloring() {
    let bg_color = document.querySelector("body");

    bg_color.style.textAlign = "center";
    bg_color.style.color = "gold";
    bg_color.style.backgroundColor = "rgb(255, 0, 0)";
    bg_color.style.fontWeight = 700;
})(); // this is an IIFE

