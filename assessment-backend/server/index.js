const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const { 
    getCompliment,
    getFortune,
    getFriend
    deleteFriend,
    addEnemy,
    updateEnemy
 } = require('./controller')

app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune);
app.get("/api/friends", getFriend);
app.delete("/api/enemies", deleteEnemy);
app.post("/api/enemies", addEnemy);
app.put("/api/enemies/:status", updateEnemy);


app.listen(4000, () => console.log("Server running on 4000"));
