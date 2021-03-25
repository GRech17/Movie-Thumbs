const { User } = require('../models');

const userData = [
    {
        username: "Salina_Herrera",
        password: "1@passworda"
    },
    {
        username: "Wendy_B",
        password: "2@passwordb"
    },
    {
        username: "Maria_Valdivia",
        password: "3@passwordc"
    },
    {
        username: "Huy_Ly",
        password: "4@passwordd"
    },
    {
        username: "Jamie_Aung",
        password: "5@passworde"
    }

]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;