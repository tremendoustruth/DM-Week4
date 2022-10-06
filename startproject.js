// Start a new express js project 

// 1. create a new folder
// 2. npm init -y (npm install when getting a pre-existing project)
// 3. npm i express cors (installs server, config package)
// 4. create gitignore file to ignore node modules
// 5. set up basic functionality of server (or index).js file:
const express = require("express"); //imports the express package installed by npm
const cors = require("cors") //imports the cors package installed by npm; allows client+server to communicate
const app = express(); //initializes express commands without repetition
//configure express server to handle JSON and cors objects correctly:
app.use(express.json()); 
app.use(cors()); 
// 6. call nodemon serverfoldername/filename
// 7. app.listen to arbitrary port server.listen(PORT, ) at the end

// Method structure:

// app.get("/api/users", (req, res) => {
//     let friends = ["Nitin", "Eric", "Jeddy", "Cameron", "Riley"];
//     res.status(200).send(friends);
//   });

//   server.get("")