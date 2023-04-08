import express from "express";//const express=require("express"); module import 
import cors from 'cors';//we can run fe and be running on diff ports
import Connection from "./database/db.js";
import Routes  from './routes/route.js'
import bodyParser from 'body-parser'//helper pkg of express

const app=express(); //initialize and returns objects that has lots of usefull methods
app.use(cors());

app.use(bodyParser.json({extended:true}))//app.use(express.json({extended:true}))
app.use(bodyParser.urlencoded({extended:true}))

app.use('/',Routes)//first parse url and then call route
const PORT=process.env.PORT || 8000;

Connection()
app.listen(PORT, ()=>{
    console.log(`server is running on ${PORT}`)
});

