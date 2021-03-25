const { Favorite } = require('../models');

const FavoriteData = [
   
    {
        title: "World Health Organization Investigators Tied to China?!",
        user_id: 5
    }
]

const seedFavorites = () => Favorite.bulkCreate(FavoriteData);

module.exports = seedFavorites;