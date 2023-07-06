const express = require('express');
const app = express();
const middleware1=(req,res,next)=>{
    console.log(req.url,"middleware1");
next();
}
const middleware2=(req,res,next)=>{
    console.log("middleware2");
next();
}
app.use(middleware1);

app.get('/api/home', (req,res)=>{
      res.send("home data")
});
app.get('/api/about', (req,res)=>{
    res.send("about data")
});
app.get('/api/services', (req,res)=>{
    res.send("services data")
});
app.get('/api/contact', (req,res)=>{
    res.send("contact data")
});
app.get('/api/login',middleware2, (req,res)=>{
    res.send("login data")
});
app.get('/api/signup',middleware2, (req,res)=>{
    res.send("signup data")
});

app.listen(3040,()=>{
    console.log("server listening on port 3040");
})