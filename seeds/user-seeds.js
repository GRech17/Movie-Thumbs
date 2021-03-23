const { User } = require('../models');

const userData = [
    {
        username: "Salina_Herrera",
       
        email: "salina_h@gmail.com",
        password: "1@passworda"
    },
    {
        username: "Wendy_B",
        email: "wendy_b@yahoo.com",
        password: "2@passwordb"
    },
    {
        username: "Maria_Valdivia",
        email: "maria_valdivia@gmail.com",
        password: "3@passwordc"
    },
    {
        username: "Huy_Ly",
        email: "huy_ly11@gmail.com",
        password: "4@passwordd"
    },
    {
        username: "Jamie_Aung",
        email: "Jamie_Aung14yahoo.com",
        password: "5@passworde"
    }

]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;