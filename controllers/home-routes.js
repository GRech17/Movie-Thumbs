
const { Favorite, User, Comment } = require('../models');
const router = require('express').Router();
const withAuth = require('../utils/auth');
const axios = require('axios');

let api_key = "068bcb78c00e7bd39492e93efa6cd1c2"

router.get('/', withAuth, (req, res) => {
    axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`)
    .then(function (response) {
        movieChoices = response.data.results;  
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function (){
    Favorite.findAll({
            attributes: [
                'id',
                'title'
                
            ],
            include: [{
                    model: Comment,
                    attributes: ['id', 'comment_text',  'user_id', ],
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
            res.render('homepage', { displayed: movieChoices, posts, loggedIn: true });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});
});


router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    res.render('login');
});

router.get('/signup', (req, res) => {
    res.render('signup');
});

module.exports = router;