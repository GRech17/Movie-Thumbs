const router = require('express').Router();

const apiRoutes = require('./api')
const homeRoutes = require('./home-routes.js');
const ToTRoutes = require('./ToT-routes');
const ListRoutes = require('./list-routes')

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/ToT', ToTRoutes);
router.use('/lists', ListRoutes);

module.exports = router;