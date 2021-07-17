const express=require('express')
require("dotenv").config()
const app =express()

app.listen(process.env.PORT,(err)=>{
err?console.log(err):console.log(`server is running on port ${process.env.PORT}`)
})

const connectdb=require('./connectDb')
connectdb()

app.use(express.json())
app.use("/api/user",require('./routes/User'))


