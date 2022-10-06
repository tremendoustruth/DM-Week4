import { faker } from '@faker-js/faker';
import express from 'express';
import cors from "cors";

//

const app = express();
app.use(express.json());
app.use(cors());

//

class User{
    constructor() {
        this._id= faker.datatype.uuid(),
        this.firstName=faker.name.firstName(),
        this.lastName=faker.name.lastName()
    }
}

class Company{
    constructor() {
        this._id=faker.datatype.uuid(),
        this.companyName = faker.company.name()
        // this.address = {
        //     street: faker.address.streetAddress()
        //     city: faker.address.city()
        //     state:
        //     zipcode:

    }
}

//

app.listen(8080, () => console.log("Server running on port 8080"));

app.get("/api/users/new", (req, res) => {
    let user = new User();
    res.status(200).send(user);
  });

app.get("/api/companies/new", (req, res) => {
    let company = new Company();
    res.status(200).send(company);
  });  

app.get("/api/user/company", (req, res) => {
    let user = new User();
    let company = new Company();
    res.status(200).send({user, company}); //send likes one piece of data, put in curly brackets --look this up
  });

// We will be using faker to create random endpoints. above I have some code to help you get started in the assignment
// I want you to make this file into a server file and create me 3 endpoints
// Create an api route "/api/users/new" that returns a new user 
// Create an api route "/api/companies/new" that returns a new company
// Create an api route "/api/user/company" that returns both a new user and a new company