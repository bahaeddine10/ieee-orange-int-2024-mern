require("dotenv").config()
const express = require("express");
const mongoose = require("mongoose")
const workoutRoutes = require('./routes/workouts');
const app =express()

app.use(express.json())
app.use((req,res,next)=>{
 console.log(req.path,req.method)
 next()
})

app.use("/api/workouts",workoutRoutes)

mongoose.connect(process.env.MONGODB_URI).then(
    ()=>{
        app.listen(process.env.PORT,()=>{
            console.log("PORT : ",process.env.PORT)
        })
    }
).catch((err)=>{
    console.log(err)
})


