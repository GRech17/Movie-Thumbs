const router = require('express').Router();

const apiRoutes = require('./api')
const homeRoutes = require('./home-routes.js');
const ToTRoutes = require('./ToT-routes');
const ListRoutes = require('./list-routes')
const CommentRoutes = require('./comment-routes')

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/ToT', ToTRoutes);
router.use('/lists', ListRoutes);
router.use('/comment', CommentRoutes);

module.exports = router;