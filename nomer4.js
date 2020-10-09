const express = require("express") // memanggil library express js
const bodyParser = require("body-parser") // memanggil library body-parser
const cors = require("cors") // memanggil library cors
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())

// end-point "/bmi" dengan method POST
app.post("/bmi", (req,res) => {
    let bb = Number(req.body.berat_kg) // mengambil nilai berat badan dari body
    let tb = Number(req.body.tinggi_meter) // mengambil nilai tinggi badan dari body

    let bmi = bb / (tb*tb)

    if (bmi >= 30.0){
        status = "Kegemukan / Obesitas"
    } else if (bmi >= 25.0){
        status = "Kelebihan Berat Badan"
    } else if (bmi >= 18.5){
        status = "Normal / Ideal"
    } else {
        status = "Kekurangan Berat Badan"
    }

    let response = {
        tinggi_meter: tb,
        berat_kg: bb,
        bmi: bmi,
        status: status
    }

    res.json(response);
})

app.listen(8000, () => {
    console.log("Server run on port 8000");
})