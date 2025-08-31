const express = require("express");
const app = express();
const PORT = 3000;

const {users} = require("./data/user.json")
app.use(express.json());

app.get('/',(req, res) => {
    res.status(200).send(users)
})

//furtures get post put delete methode will handle

app.listen(PORT , ()=>{
    console.log("Server Connected")
})

