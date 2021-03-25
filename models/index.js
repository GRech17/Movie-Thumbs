// import models
let Comment = require('./Comment');
let Favorite = require('./Favorite');
let User = require('./User');


Comment.belongsTo(User, {
  foreignKey: 'user_id',
});


Favorite.belongsTo(User, {
foreignKey: 'user_id'
});


Favorite.hasMany(Comment, {
foreignKey: 'favorite_id'
});
User.hasMany(Comment, {
    foreignKey: 'user_id',
  });
  
User.hasMany(Favorite, {
    foreignKey: 'user_id',
  });


module.exports = {
  Comment,
  Favorite,
  User,
  
};