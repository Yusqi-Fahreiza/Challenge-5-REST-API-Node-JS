const express = require("express") // memanggil library express js
const bodyParser = require("body-parser") // memanggil library body-parser
const cors = require("cors") // memanggil library cors
const app = express()

// penggunaan body-parser untuk ekstrak data request berformat JSON
app.use(bodyParser.json())

// penggunaan body-parser untuk ekstrak data request dari body
app.use(bodyParser.urlencoded({extended: true}))

// penggunaan cors agar end point dapat diakses oleh cross platform
app.use(cors())

// end-point "/kubus" dengan method POST
app.post("/kubus", (req,res) => {
    // menampung data yang dikirimkan dan mengkonversi menjadi tipe numerik
    let sisi = Number(req.body.sisi) // mengambil nilai sisi dari body
    
    let volume = sisi * sisi * sisi
    let lp = 6 * sisi * sisi

    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
        sisi: sisi,
        volume: volume,
        luas_permukaan: lp
    }

    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
})

// end-point "/balok" dengan method POST
app.post("/balok", (req,res) => {
    // menampung data yang dikirimkan dan mengkonversi menjadi tipe numerik
    let p = Number(req.body.p) // mengambil nilai panjang dari body
    let l = Number(req.body.l) // mengambil nilai lebar dari body
    let t = Number(req.body.t) // mengambil nilai tinggi dari body
    
    let v = p * l * t
    let lp = 2 * ((p*l)+(p*t)+(l*t))

    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
        panjang: p,
        lebar: l,
        tinggi: t,
        volume: v,
        luas_permukaan: lp
    }

    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
})

// end-point "/tabung" dengan method POST
app.post("/tabung", (req,res) => {
    // phi adalah konstanta
    const phi = 3.14 
    // menampung data yang dikirimkan dan mengkonversi menjadi tipe numerik
    let t = Number(req.body.t) // mengambil nilai tinggi dari body
    let r = Number(req.body.r) // mengambil nilai jari-jari dari body
    
    let v = phi * r * r * t
    let lp = 2 * phi * r * (r+t)

    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
        tinggi: t,
        jari_jari: r,
        volume: v,
        luas_permukaan: lp
    }

    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
})

// end-point "/bola" dengan method POST
app.post("/bola", (req,res) => {
    // phi adalah konstanta
    const phi = 3.14 
    // menampung data yang dikirimkan dan mengkonversi menjadi tipe numerik
    let r = Number(req.body.r) // mengambil nilai jari-jari dari body
    
    let v = 4/3 * phi * r * r * r
    let lp = 4 * phi * r * r

    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
        jari_jari: r,
        volume: v,
        luas_permukaan: lp
    }

    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
})

// menjalankan server pada port 8000
app.listen(8000, () => {
    console.log("Server run on port 8000");
})