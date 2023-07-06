const express=require('express');

const app = express();
app.get('/api/main', (req,res)=>{
    res.send(" Express JS is a Node.js framework designed to build API's web applications cross-platform mobile apps quickly and make node js eas");
})

app.listen(3030,()=>{
    console.log("listening");
})