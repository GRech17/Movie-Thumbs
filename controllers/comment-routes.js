const router = require('express').Router();
const { Favorite, User, Comment } = require('../models');
const withAuth = require('../utils/auth');
const axios = require('axios');
let api_key = "068bcb78c00e7bd39492e93efa6cd1c2"
let randomPage = 1;
router.get('/:id', withAuth, (req, res) => {
    //axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${randomPage}`)
    axios.get(`https://api.themoviedb.org/3/movie/${req.params.id}?api_key=${api_key}`)
          .then(function (response) {
              movieChoices = response.data;

             // console.log(response.data);
             // console.log('***********' + req.params.id );

              //console.log(response.data.results.filter(id => id.id == req.params.id));
        })
        .catch(function (error) {
            console.log(error);
        })
        .then(function () {
            Comment.findAll({
                where: {
                    movie_id: req.params.id
                },
                attributes: [
                    'id',
                    'movie_id',
                    'comment_text',
                    'user_id',
                    'created_at'
                ],
                include: [

                    {
                        model: User,
                        attributes: ['username']
                    }
                ]
            })
                .then(dbPostData => {
                    const posts = dbPostData.map(post => post.get({ plain: true }));
                    console.log(posts);
                    res.render('comment', { displayed: movieChoices, posts, loggedIn: true });
                })
                .catch(err => {
                    console.log(err);
                    res.status(500).json(err);
                });

});
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