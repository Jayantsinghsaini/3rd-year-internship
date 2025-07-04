import mongoose from 'mongoose'
import express from "express";
import cors from 'cors'
const app = express()
const port = 3000

app.use(cors())

mongoose.connect('mongodb://localhost:27017/mydb')
  .then(info => {
    console.log('connected');

  })
  .catch(error => {
    console.log(error);

  })

const mySchema = new mongoose.Schema({
  name: String,
  salary: Number,
  language: String,
  city: String,
  isManager: Boolean
})

const users = mongoose.model('users', mySchema)

function randomIndex(n, m) {
  const randomNum = Math.floor(Math.random() * (m - n + 1)) + n;
  return randomNum
}

let name = ['jayant', 'suhani', 'david']
let salary = [45000, 35000, 100000]
let language = ['python', 'java', 'javascript']
let city = ['jaipur', 'delhi', 'alwar']
let isManager = [true, false]

app.post('/about', async (req, res) => {
  let data = []
  for (let index = 0; index < 10; index++) {
    data.push({
      name: name[randomIndex(0, 2)],
      salary: salary[randomIndex(0, 2)],
      language: language[randomIndex(0, 2)],
      city: city[randomIndex(0, 2)],
      isManager: isManager[randomIndex(0, 1)]
    })
  }
  try {
    await users.deleteMany({})
    await users.insertMany(data)
  } catch (err) {
    console.log(err);

  }
}

)

app.listen(port, () => {
  console.log(`app listening at port number: ${port}`);

})




















