
const bcrypt = require('bcryptjs');
const users = []

module.exports = {
    login: (req, res) => {
      console.log('Logging In User')
      console.log(req.body)
      const { username, password } = req.body
      for (let i = 0; i < users.length; i++) {
        if (users[i].username === username && bcrypt.compareSync(password, users[i].password)) {
          let user = {...users[i]}
          delete user.password
          res.status(200).send(user)
        }
      }
      res.status(400).send("User not found.")
    },
    register: (req, res) => {
        console.log('Registering User')
        console.log(req.body)
        const { username, email, firstName, lastName, password } = req.body 
        const hashed_pw = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
        console.log(hashed_pw);
        let user_obj = {
          username: username,
          email: email,
          firstName: firstName,
          lastName: lastName,
          password: hashed_pw
        }
        users.push(user_obj);
        res.status(200).send(user_obj)
    }
  }
