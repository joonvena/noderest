var express = require('express');
var router = express.Router();
var usercontroller = require('../controller/usercontroller');
var pool = require('../database');

/* /GET all users */
router.get('/', async function(req, res, next) {
	usercontroller.getallUsers(function(results){
		res.json(results);
	});
	});

/* /GET user by :id */
router.get('/:id?', async function(req, res, next) {
	usercontroller.getuserById(req.params.id, function(results) {
		res.json(results);
	});
});

/* /POST add new user */
router.post('/', async function(req, res, next) {
	usercontroller.addUser(req.body, function(count) {
		res.json(req.body);
	});
});

/* /DELETE delete user by :id */
router.delete('/:id?', async function(req, res, next) {
	usercontroller.deleteUser(req.params.id, function(count) {
		res.json(count);
	});
});

/* /PUT update user by :id */
router.put('/:id?', async function(req, res, next) {
	usercontroller.updateUser(req.params.id, req.body, function(rows) {
		res.json(rows);
	});
	});




module.exports = router;
