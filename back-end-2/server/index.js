const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json())
app.use(cors())

const {
    getHouses,
    createHouse, 
    updateHouse, 
    deleteHouse
} = require('./controller');

app.get("/api/houses", getHouses)
app.post("/api/houses", createHouse)
app.put("/api/houses/:id", updateHouse)
app.delete("/api/houses", deleteHouse)
app.listen(4004, () => console.log("Server running on port 4004"));


