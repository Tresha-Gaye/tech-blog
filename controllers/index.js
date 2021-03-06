const router = require('express').Router();

const apiRoutes = require('./api');

const homeRoutes = require('./home-routes.js');

const dashboardRoutes = require('./dashboard-routes.js');

const postRoutes = require("./single-post-routes.js")

router.use('/', homeRoutes);

router.use('/post', postRoutes);

router.use('/dashboard', dashboardRoutes);

router.use('/api', apiRoutes);

router.use((req, res) => {
  res.status(404).end();
});


module.exports = router;