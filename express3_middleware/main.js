const express = require('express')
const app = express()

// app.use(express.static('public')) is also a middleware

// there are two way to define middleware

// method1
const log1 = (req, res, next) => {
    console.log('log1 LOGGED')
    next()
}
app.use(log1)


// method2
app.use((req,res,next)=>{
    console.log('log2 LOGGED');
    next()
})

app.get('/', (req, res) => {
    res.send('Hello World!')
    console.log('last step')
})

app.listen(3000)
