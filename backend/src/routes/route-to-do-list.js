const router = require('express').Router();
const { addListener } = require('nodemon');
const { to_do_list } = require('../controllers');

router.get('/to_do_list', to_do_list.getDataListUser);

module.exports = router;