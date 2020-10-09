console.log("* server in funzione *");
const express = require("express");
const app = express()
const fs = require("fs");
require('dotenv').config()
var bodyParser = require("body-parser");
app.use(bodyParser.text({ limit: '10mb' }));//necessario se il body della POST/PUT req non è fatto di json

app.listen(3000)

app.put("/data", (req, res) => {
    fs.writeFile(req.headers["x-name"].replace("\/", "preventingHacking")
        , req.body, { encoding: "base64" }, () => {
            res.sendStatus(201)
        })
})
