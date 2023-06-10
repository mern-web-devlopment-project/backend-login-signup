const express = require('express')
const app = express()
const PORT = 3500;

app.get('/',(req,res)=>{
  res.send("Get Method working")
})
app.listen(PORT,()=>console.log(`Server Running at http://localhost:${PORT}`))