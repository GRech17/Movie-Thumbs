const { Favorite } = require('../models');

const FavoriteData = [
   
    {
        listTitle: 'Liked Movies',
        title: "Zoolander",
        user_id: 5
    }
]

const seedFavorites = () => Favorite.bulkCreate(FavoriteData);

module.exports = seedFavorites;