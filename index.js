import bodyParser from "body-parser";
import express from "express";
import {dirname} from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url)); 

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res) => {
    console.log(req.body);
    res.sendFile(__dirname + "/public/index.html");
})
  
const clave = "Itachi";

app.post("/check", (req, res) => {
    let body = req.body;
    console.log(body);
    if (clave == body.password) {
        res.sendFile(__dirname + "/public/secret.html");
    } else {
        res.sendFile(__dirname + "/public/index.html");
    }
    
})

app.listen(port, () => {
    console.log(`Listeing on port ${3000}`);
})

