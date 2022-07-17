const express = require('express');
const router = express.Router();
const {getAllTasks,createTaks,getTaks,updateTaks,deleteTaks} = require('../controllers/tasks');
router.route('/').get(getAllTasks);

module.exports = router;