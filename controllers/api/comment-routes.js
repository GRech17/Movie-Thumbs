const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', (req, res) => {
  Comment.findAll()
    .then(dbCommentData => res.json(dbCommentData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
    Comment.findAll({
            where: {
                id: req.params.id
            },
            attributes: ['id', 'post_content', 'movie_id', 'created_at'],
        })
        .then(dbCommentData => res.json(dbCommentData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
});

router.post('/:movie_id', withAuth, (req, res) => {
  // expects {title: 'Taskmaster goes public!', post_content, user_id: 1}
  console.log(req.body.movie_id);
  Comment.create({
      movie_id : req.body.movie_id,
      post_content: req.body.post_content,
      user_id: req.session.user_id,
      created_at: Date.now()
    })
      .then(dbPostData => res.json(dbPostData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});

router.post('/', withAuth, (req, res) => {
  console.log(req);
  if (req.session) {
    Comment.create({
      comment_text: req.body.comment_text
  // expects {title: 'Taskmaster goes public!', post_content, user_id: 1}
      movie_id : req.body.movie_id
      user_id: req.session.user_id
      created_at:Date.now()
    
    })
      .then(dbPostData => res.json(dbPostData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});
router.post('/:id', withAuth, (req, res) => {
  console.log(req);
  if (req.session) {
      Comment.create({
          comment_text: req.body.comment_text,
          movie_id: req.params.id,
          user_id: req.session.user_id,
          favorite_id: req.body.favorite_id,
          created_at: Date.now()
      })
          .then(dbCommentData => res.json(dbCommentData))
          .catch(err => {
              console.log(err);
              res.status(400).json(err);
          });
  }
});
router.put('/:id', withAuth, (req, res) => {
  
    Comment.update({
      post_content: req.body. post_content
    }, {
        where: {
            id: req.params.id
        }
    }).then(dbCommentData => {
        if (!dbCommentData) {
            res.status(404).json({ message: 'No comment found with this id' });
            return;
        }
        res.json(dbCommentData);
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.delete('/:id', withAuth, (req, res) => {
    Comment.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(dbCommentData => {
        if (!dbCommentData) {
          res.status(404).json({ message: 'No comment found with this id!' });
          return;
        }
        res.json(dbCommentData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  }
);

module.exports = router;
