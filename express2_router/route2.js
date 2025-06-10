const express = require('express')
const route = express.Router()

route.get("/",(req,res)=>{
    res.send("route2 home page")
})

route.get("/about",(req,res)=>{
    res.send("route2 about page")
})

module.exports = route