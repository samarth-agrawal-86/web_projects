//const fs = require("fs");

//fs.copyFileSync("file1.txt", "file2.txt");

const superheroes = require("superheroes");
const supervillains = require("supervillains");

var superhero = superheroes.random();
var supervillain = supervillains.random();

console.log("Next match " + superhero + " vs " + supervillain);