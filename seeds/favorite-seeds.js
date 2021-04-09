const { Favorite } = require('../models');

const FavoriteData = [
   
    {
        listTitle: 'Liked Movies',
        title: "Zoolander",
        posterImg:"",
        user_id: 5
        
    }
]

const seedFavorites = () => Favorite.bulkCreate(FavoriteData);

module.exports = seedFavorites;