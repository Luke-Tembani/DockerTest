const express = require("express");
require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 5010;


app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.get("/",(req,res)=>{
    res.status(200).send("<h2>Hello Client, this is the server</h2>");
});



app.listen(PORT,()=>{
    console.log(`App live on port ${PORT}`)
});