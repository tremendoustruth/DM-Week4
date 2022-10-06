const express = require("express"); //imports the express package installed by npm
const cors = require("cors") //imports the cors package installed by npm; allows client+server to communicate without advanced configuration.

const app = express(); //initializes express commands without repetition

//configure express server to handle JSON and cors objects correctly:
app.use(express.json()); 
app.use(cors()); 

//first endpoint and method that will tell us who our friends are.
app.get("/api/users", (req, res) => {
    let friends = ["Nitin", "Eric", "Jeddy", "Cameron", "Riley"];
    res.status(200).send(friends);
  });

//another endpoint to return the weather today.
// app.get("/weather/:temperature", (req, res) => {
//     const phrase = `<h3>It was ${req.params.temperature} today</h3>`; 
//     res.status(200).send(phrase);
// });

//destructure the above like this:

app.get("/weather/:temperature", (req, res) => {
    const {temperature} = req.params
    const phrase = `<h3>It was ${temperature} today</h3`;
    res.status(200).send(phrase);
});

app.get("/api/magicsets", (req, res) => {
  res.status(200).json(magic_set)
}
)
//run or listen on port 4000;

app.listen(4000, () => console.log("Server running on port 4000"));

//run the nodemon command to get new server listening on port 4000
//nodemon is a tool that helps develop Node. js based applications by automatically restarting the node application when file changes in the directory are detected.





