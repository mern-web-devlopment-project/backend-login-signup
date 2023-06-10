require('dotenv').config()
const express = require('express')
const app = express()
const PORT = 3500;
const signUp = require('./routes/signUpRoute')
const mongoose = require('mongoose')
const cors = require('cors')
mongoose.connect(process.env.DB_URL)

const db = mongoose.connection
db.on('error',(errormessage)=>console.log(errormessage))
db.once('open',()=>console.log("Connection Established"))

app.use(express.json())
app.use(cors())
app.get('/',(req,res)=>{
  res.send("Get Method working")
})

app.use('/api/v1/signup',signUp)
app.listen(PORT,()=>console.log(`Server Running at http://localhost:${PORT}`))