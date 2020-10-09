const express = require("express") // memanggil library express js
const bodyParser = require("body-parser") // memanggil library body-parser
const cors = require("cors") // memanggil library cors
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())

// end-point "/desimal" dengan method POST
app.post("/desimal", (req,res) => {
    let desimal = Number(req.body.desimal)

    let biner = desimal.toString(2)
    let octal = desimal.toString(8)
    let heksa = desimal.toString(16)

    let response = {
        desimal: desimal,
        biner: biner,
        octal: octal,
        heksa: heksa
    }

    res.json(response);
})

// mohon maaf bu untuk konversi dari biner, oktal, heksa masih error dan belum bisa

app.listen(8000, () => {
    console.log("Server run on port 8000");
})