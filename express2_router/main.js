const express = require('express')
const app = express()
const port = 3000


const route1 = require('./route1.js')
const route2 = require('./route2.js')


app.use('/route1', route1)
app.use('/route2', route2)


app.get('/', (req, res) => {
    res.send("home")
})
app.get('/about', (req, res) => {
    res.send("about page")
})

app.listen(port, () => {
    console.log(`listening at ${port}`)
})