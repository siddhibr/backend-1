import express from "express";
import { Login, Register } from "./Controllers/auth.conterollers.js";
const app = express()
app.use(express.json());
app.post('/' ,function(req,res){
     const {name,email,password} =req.body.UserData;
     if (name&&email&&password) {
        res.send("succesful");
     }else{
        res.send("all fields are mandatory")
    }
     
})

app.post('/login',Login)
app.post('/register',Register)
app.get('/',function hello(req,res){
    res.send("hello")
})

app.listen(3000)
