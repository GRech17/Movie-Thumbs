const router = require('express').Router();
const { User, Watchlist } = require('../../models');
const { restore } = require('../../models/Watchlist');

// get all users
router.get('/', async (req, res) => {
  try { 
  const watchInfo = await Watchlist.findAll({
    attributes: [
      'id',
      'movieTitle'
    ],
    // include: [
    //   {
    //     model: User,
    //     attributes: ['username']
    //   }
    // ]
   })
   res.status (200).json(watchInfo); 
    // .then(dbPostData => res.json(dbPostData))
  }
  catch(err) {
      console.log(err);
      res.status(500).json(err);
    };
});

router.get('/:id', (req, res) => {
  Watchlist.findOne({
    where: {
      id: req.params.id
    },
    attributes: [
      'id',
      'movieTitle',
      'user_id'
    ],
    include: [
     {
        model: User,
        attributes: ['username']
      }
    ]
  })
    .then(dbPostData => {
      if (!dbPostData) {
        res.status(404).json({ message: 'No watchlist found with this id' });
        return;
      }
      res.json(dbPostData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post('/', async (req, res) => {
  try {
  if (req.session) {
const newWatch = await Watchlist.create(
      req.body
    )
      // movieTitle: req.body.title,
      // user_id: req.session.user_id,  
    console.log(req.body);
    res.status(200).json(newWatch)
  }
  }
      // .then(dbPostData => res.json(dbPostData))
      catch(err) {
        console.log(err);
        res.status(500).json(err);
      };
  }
);

router.put('/:id', (req, res) => {
  Watchlist.update(
    {
      movieTitle: req.body.title
    },
    {
      where: {
        id: req.params.id
      }
    }
  )
    .then(dbPostData => {
      if (!dbPostData) {
        res.status(404).json({ message: 'No watchlist found with this id' });
        return;
      }
      res.json(dbPostData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete('/:id', (req, res) => {
  console.log('id', req.params.id);
  Watchlist.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbPostData => {
      if (!dbPostData) {
        res.status(404).json({ message: 'No favorites found with this id' });
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