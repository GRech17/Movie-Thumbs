const router = require('express').Router();
const { Favorite, User, Comment } = require('../models');
const withAuth = require('../utils/auth');
const axios = require('axios');

let api_key = "068bcb78c00e7bd39492e93efa6cd1c2"

router.get('/', withAuth, (req, res) => {
    let movieTitle;

    axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`)

    .then(function (response) {
        
        movieTitle = response.data.results;
        console.log(movieTitle);
        
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {
        Favorite.findAll({
            where: {
              user_id: req.session.user_id
            },
            attributes: [
              'id',
              'title',
            ],
            include: [
              {
                model: Comment,
                attributes: ['id', 'comment_text', 'favorite_id', 'user_id'],
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
          .then(dbPostData => {
          const posts = dbPostData.map(post => post.get({ plain: true }));
          res.render('ToT', {displayed: movieTitle, posts, loggedIn: true });
        })
        .catch(err => {
          console.log(err);
          res.status(500).json(err);
        });
      });

    console.log(req.session);
    console.log('======================');




});

router.get('/edit/:id', withAuth, (req, res) => {
    Favorite.findByPk(req.params.id, {
      attributes: [
        'id',
        'title',
      ],
      include: [
        {
          model: Comment,
          attributes: ['id', 'comment_text', 'favorite_id', 'user_id'],
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
      .then(dbPostData => {
        if (dbPostData) {
          const post = dbPostData.get({ plain: true });
          
          res.render('edit-post', {
            post,
            loggedIn: true
          });
        } else {
          res.status(404).end();
        }
      })
      .catch(err => {
        res.status(500).json(err);
      });
});
  
module.exports = router;