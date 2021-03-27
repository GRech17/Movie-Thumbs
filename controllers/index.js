const router = require('express').Router();

const apiRoutes = require('./api')
const homeRoutes = require('./home-routes.js');
const ToTRoutes = require('./ToT-routes');
const likeListRoutes = require('./likeList-routes')

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/ToT', ToTRoutes);
router.use('/likeList', likeListRoutes);

module.exports = router;