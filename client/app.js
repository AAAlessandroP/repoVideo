const fs = require("fs");
const fetch = require("node-fetch");
require('dotenv').config()
console.log("* client in funzione *");

// const yargs = require('yargs');  libreria figa per il parsing degli args da cli
// console.log(process.argv);//il nome del file è il 3o param se eseguo con "node", 4o se con "nodemon"

// fs.writeFile("args", process.argv[2], { encoding: "ascii", flag: "" }, () => { })

let filenameFullPath = process.argv[2].toString()
fs.readFile(filenameFullPath
    , {}, (err, data) => {
        fetch("http://127.0.0.1:3000/data", {
            method: 'PUT', body: data.toString("base64"), headers: { 'x-name': filenameFullPath.split("\/").pop(), }
        })
            .then(res => res.text())
            .then(res => console.log(res));
    });