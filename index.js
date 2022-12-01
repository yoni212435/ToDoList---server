require("dotenv").config();

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;


const router = require('./Routes')


app.use(express.json())
app.use(require('cors')())
app.get("/", (req, res) => { res.send("ToDoList"); })

app.use("/api", router)




app.listen(port, () => console.log(`server is running => ${port}`))
require('./DL/db').connect();




