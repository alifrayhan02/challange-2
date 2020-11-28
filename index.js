const express = require("express") // memanggil library
const bodyParser = require("body-parser") // memanggil library
const cors = require("cors") // memanggil library
const app = express()

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({
    extended: true
}))

app.use(cors())

app.get("/convert/celcius/:valcelcius", (req, res) => {

    let valcelcius = req.params.valcelcius

    let resreamur = (4 / 5) * valcelcius
    let resfahrenheit = ((9 / 5) * valcelcius) + 32
    let reskelvin = 273 + (valcelcius * 1)

    let response = {
        celcius: valcelcius,
        result: {
            reamur: resreamur,
            fahrenheit: resfahrenheit,
            kelvin: reskelvin
        }
    }

    res.json(response)
})

app.get("/convert/reamur/:valreamur", (req, res) => {

    let valreamur = req.params.valreamur

    let rescelcius = (5 / 4) * valreamur
    let resfahrenheit = ((9 / 4) * valreamur) + 32
    let reskelvin = (rescelcius * 1) + 273

    let response = {
        reamur: valreamur,
        result: {
            celcius: rescelcius,
            fahrenheit: resfahrenheit,
            kelvin: reskelvin
        }
    }

    res.json(response)
})

app.get("/convert/kelvin/:valkelvin", (req, res) => {

    let valkelvin = req.params.valkelvin

    let rescelcius = valkelvin - 273
    let resreamur = (4 / 5) * (valkelvin - 273)
    let resfahrenheit = ((9 / 5) * (valkelvin - 273)) + 32

    let response = {
        kelvin: valkelvin,
        result: {
            celcius: rescelcius,
            fahrenheit: resfahrenheit,
            reamur: resreamur
        }
    }

    res.json(response)
})

app.get("/convert/fahrenheit/:valfahrenheit", (req, res) => {

    let valfahrenheit = req.params.valfahrenheit

    let rescelcius = (5 / 9) * ((valfahrenheit * 1) - 32)
    let resreamur = (4 / 9) * ((valfahrenheit * 1) - 32)
    let reskelvin = (5 / 9) * ((valfahrenheit * 1) - 32) + 273

    let response = {
        fahrenheit: valfahrenheit,
        result: {
            celcius: rescelcius,
            reamur: resreamur,
            kelvin: reskelvin
        }
    }

    res.json(response)
})

app.post("/bmi", (req, res) => {
    let beratbadan = Number(req.body.beratbadan)
    let tinggibadan = Number(req.body.tinggibadan)

    let bmi = beratbadan / (tinggibadan * tinggibadan)

    var status = status
    if (bmi < 18.5) {
        status = "Kekurangan berat badan"
    } else if (bmi < 25) {
        status = "Normal (Ideal)"
    } else if (bmi < 30) {
        status = "Kelebihan Berat Badan"
    } else {
        status = "Kegemukan (Obesitas)"
    }

    let response = {
        tinggi: tinggibadan,
        berat: beratbadan,
        bmi: bmi,
        status: status
    }

    res.json(response)
})

app.get("/biner/:biner", (req,res) => {

    let biner = req.params.biner
    let convertO = parseInt(req.params.biner,2).toString(8);
    let convertH = parseInt(req.params.biner,2).toString(16);
    let convertD = parseInt(req.params.biner,2).toString(10).toUpperCase();

    let response = {
        biner : biner,
        convertO : convertO,
        convertH : convertH,
        convertD : convertD,
    }

    res.json(response)
})

app.listen(8000, () => {
    console.log("Server run on port 8000");
})