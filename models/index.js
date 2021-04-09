// import models
let Comment = require('./Comment');
let Favorite = require('./Favorite');
let User = require('./User');

Comment.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'cascade'
});

Comment.belongsTo(Favorite, {
  foreignKey: 'favorite_id',
  onDelete: 'cascade'
});

Favorite.belongsTo(User, {
foreignKey: 'user_id',
onDelete:'cascade'
});

Favorite.hasMany(Comment, {
foreignKey: 'favorite_id',
onDelete: 'cascade'
});

User.hasMany(Comment, {
    foreignKey: 'user_id',
    onDelete: 'cascade'
});

User.hasMany(Favorite, {
    foreignKey: 'user_id',
});

module.exports = {
  Comment,
  Favorite,
  User,
};