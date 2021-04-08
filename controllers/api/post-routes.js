let router = require('express').Router();
let { Post, User, Comment, Favorite } = require('../../models');
let sequelize = require('../../config/connection');
let withAuth = require('../../utils/auth');

// get all users
router.get('/', (req, res) => {
  console.log('======================');
   Post.findAll({
    attributes: ['id', 'post_content', 'title'],
    order: [['created_at', 'DESC']], 
    include: [
       // include the Comment model here:
   {
    model: Comment,
    attributes: ['id', 'comment_text', 'post_id', 'user_id', ],
    include: {
      model: User,
      attributes: ['username']
    }
  },
      {
        model: User,
        attributes: ['username']
      }
    ]
   })
      .then(dbPostData => res.json(dbPostData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

  //get a Single Post
  router.get('/:id', (req, res) => {
    console.log(req);
    Post.findOne({
      where: {
        id: req.params.id
      },
      attributes: ['id', 'post_content', 'title'],
      include: [
        {
          model: User,
          attributes: ['username']
        }
      ]
    })
      .then(dbPostData => {
        if (!dbPostData) {
          res.status(404).json({ message: 'No post found with this id' });
          return;
        }
        res.json(dbPostData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

router.post('/:movie_id', withAuth, (req, res) => {
  // expects {title: 'Taskmaster goes public!', post_content, user_id: 1}
  console.log(req.body.movie_id);
  Post.create({
      movie_id : req.body.movie_id,
      post_content: req.body.post_content,
      user_id: req.session.user_id,
    
    })
      .then(dbPostData => res.json(dbPostData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});

router.put('/:id', withAuth, (req, res) => {
    Post.update({
       movie_id : req.body.movie_id,
        post_content: req.body.post_content
      },
      {
        where: {
          id: req.params.id
        }
      })
      .then(dbPostData => {
        if (!dbPostData) {
          res.status(404).json({ message: 'No post found with this id' });
          return;
        }
        res.json(dbPostData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

  router.delete('/:id', withAuth, (req, res) => {
    Post.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(dbPostData => {
        if (!dbPostData) {
          res.status(404).json({ message: 'No post found with this id' });
          return;
        }
        res.json(dbPostData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

  module.exports = router;