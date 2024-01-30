const express = require("express");
const app = express();

app.use("/", (req, res)=>{
    res.json({name:"Umesh Kumarb Bedi"})
})

app.listen("5000", () => {
    console.log("Server is running.");
  });