const express = require('express');
const router = express.Router();
const {getAllTasks,createTaks,getTaks,updateTaks,deleteTaks} = require('../controllers/tasks');
router.route('/').get(getAllTasks).post(createTaks);
router.route('/:id').get(getTaks).patch(updateTaks).delete(deleteTaks);

module.exports = router;