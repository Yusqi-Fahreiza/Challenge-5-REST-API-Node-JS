const express = require("express") // memanggil library express js
const bodyParser = require("body-parser") // memanggil library body-parser
const cors = require("cors") // memanggil library cors
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())

// endpoint "/convert/celcius" dengan method GET
app.get("/convert/celcius/:celcius", (req,res) => {
    let celcius = Number(req.params.celcius)
    let result;

    let reamur = 4/5 * celcius
    let kelvin = celcius + 273
    let fahrenheit = 9/5 * celcius + 32

    let response = {
        celcius: celcius,
        result: result = {
            reamur: reamur,
            kelvin: kelvin,
            fahrenheit: fahrenheit
        }
    }

    res.json(response)
})

// endpoint "/convert/reamur" dengan method GET
app.get("/convert/reamur/:reamur", (req,res) => {
    let reamur = Number(req.params.reamur)
    let result;

    let celcius = 5/4 * reamur
    let kelvin = 5/4 * reamur + 273
    let fahrenheit = 9/4 * reamur + 32

    let response = {
        reamur: reamur,
        result: result = {
            celcius: celcius,
            kelvin: kelvin,
            fahrenheit: fahrenheit
        }
    }

    res.json(response)
})

// endpoint "/convert/kelvin" dengan method GET
app.get("/convert/kelvin/:kelvin", (req,res) => {
    let kelvin = Number(req.params.kelvin)
    let result;

    let celcius = kelvin - 273
    let reamur = 4/5 * (kelvin-273) 
    let fahrenheit = 9/5 * (kelvin-273) + 32

    let response = {
        kelvin: kelvin,
        result: result = {
            celcius: celcius,
            reamur: reamur,
            fahrenheit: fahrenheit
        }
    }

    res.json(response)
})

// endpoint "/convert/fahrenheit" dengan method GET
app.get("/convert/fahrenheit/:fahrenheit", (req,res) => {
    let fahrenheit = Number(req.params.fahrenheit)
    let result;

    let celcius = 5/9 * (fahrenheit-32)
    let reamur = 4/9 * (fahrenheit-32) 
    let kelvin = 5/9 * (fahrenheit-32) + 273

    let response = {
        fahrenheit: fahrenheit,
        result: result = {
            celcius: celcius,
            reamur: reamur,
            kelvin: kelvin
        }
    }

    res.json(response)
})

app.listen(8000, () => {
    console.log("Server run on port 8000");
})