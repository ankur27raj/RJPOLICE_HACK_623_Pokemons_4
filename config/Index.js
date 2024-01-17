const express = require('express');
const app = express();


require("dotenv").config();
const PORT = process.env.PORT || 4000;

const cors=require("cors");
const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

app.use(cors(corsOptions))

app.use(express.json());
const fir_route = require("./routes/userRoute");

app.use("/api/v1", fir_route);


app.listen(PORT, ()=>{
    console.log(`server started at port no. ${PORT}`);
});

const dbConnect = require("./config/dbConnect");
dbConnect();

app.get("/", (req, res)=>{
    res.send(`<h1>Hello from HEAVEN</h1>`)
});