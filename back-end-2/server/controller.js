const houses = require("./db.json");
let globalID = 4;

module.exports = {
    getHouses: (req, res) => {res.status(200).send(houses)},
    createHouse: (req, res) => {
         let { address, price, imageURL } = req.body
         let newHouse = {
            id: globalID,
            address, 
            price,
            imageURL
        }
        houses.push(newHouse)
        res.status(200).send(houses)
        globalID++
    },
    updateHouse: (req, res) => {
        let { id } = req.params;
        console.log(id);
        let { type } = req.body;
        let index = houses.findIndex(elem => elem.id === +id);
        console.log(index);
        if (type==="plus"){
            console.log(houses[index])
            houses[index].price+=10000;
            res.status(200).send(houses)
        }
        else if (type==="minus"){
            console.log(houses[index])
            houses[index].price-=10000;
            res.status(200).send(houses)
        }
        else {
            res.status(400).send(houses)
        }
    },
    deleteHouse: (req, res) => {
        let index = houses.findIndex(house => house.id === req.param.id); //findIndex(var callback predicate)
        houses.splice(index,1) //removes 1 house element at index 
        res.status(200).send(houses)
        console.log(houses)
    }
}
