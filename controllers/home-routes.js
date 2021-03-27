
const { Favorite, User, Comment } = require('../models');
const router = require('express').Router();

router.get('/', (req, res) => {
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
            res.render('homepage', { posts, loggedIn: req.session.loggedIn });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
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