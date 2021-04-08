const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment } = require('../models');
const withAuth = require('../utils/auth');

router.get('/:id', withAuth, (req, res) => {
  

  Comment.findAll({
    where: {
      movie_id: req.params.id
    },
    attributes: ['id', 'post_content', 'movie_id', 'created_at'],
    include: [
      {
        model: User,
        attributes: ['username']
      }
    ]
  })
  .then(dbPostData => {
    const posts = dbPostData.map(post => post.get({ plain: true }));
    res.render('single-post', { posts, loggedIn: true });

    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});


  
module.exports = router;