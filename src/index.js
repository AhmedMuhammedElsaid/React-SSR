const express =require('express')
const React =require('react')
const renderToString=require("react-dom/server").renderToString
const Home = require("./client/pages/Home").default





const app=express()

app.get("/",(req,res)=>{
    const content=renderToString(<Home/>);
    res.send(content )
})
app.listen(8888,()=>console.log("Server up running on port 8888"))