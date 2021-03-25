const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const favoriteRoutes = require('./favorite-routes');
const commentRoutes = require('./comment-routes');

router.use('/users', userRoutes);
router.use('/favorites', favoriteRoutes);
router.use('/comments', commentRoutes);

module.exports = router;