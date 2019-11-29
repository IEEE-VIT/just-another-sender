const express = require("express")
const app = express()
const bodyParser = require('body-parser')
const path = require("path")

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static('public'))
app.set('views', path.join(__dirname, '/template'));
app.set('view engine', 'hbs');


//importing routes
const route = require("./routes/route.js")

app.use(route)
//default route
app.use((req, res, next)=>{
    res.render("index.hbs")
})

const port = process.env.PORT || 8080

app.listen(port,()=>{
    console.log("Server started at: " + port)
})