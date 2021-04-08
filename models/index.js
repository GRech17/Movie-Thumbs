// import models
let Comment = require('./Comment');
let Favorite = require('./Favorite');
let User = require('./User');
let Post = require('./Post');

Comment.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'cascade'
});



Favorite.belongsTo(User, {
foreignKey: 'user_id',
onDelete:'cascade'
});



User.hasMany(Comment, {
    foreignKey: 'user_id',
    onDelete: 'cascade'
  });
  
User.hasMany(Favorite, {
    foreignKey: 'user_id',
  });
  Post.hasMany(Comment, {
    foreignKey: 'post_id'
    });
    Post.belongsTo(User, {
      foreignKey: 'user_id'
      });
      User.hasMany(Post, {
        foreignKey: 'user_id',
      });

module.exports = {
  Comment,
  Favorite,
  User,
  Post,
  
};