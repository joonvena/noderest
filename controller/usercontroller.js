var pool = require('../database');


async function getallUsers(callback) {
	pool.query('SELECT * FROM users', function (err, results, fields) {
	if(err) {throw error;}
	callback(results);
	});
	conn.release();
}

async function getuserById(id, callback) {
	pool.query('SELECT * FROM users where id=?',[id], function(err, results, fields) {
	if(err) {throw error;}
	callback(results);
	});
	conn.release();
}

async function addUser(users, callback) {
	pool.query('INSERT into users(name, email) values(?,?)',[users.name, users.email], function(err, results, fields) {
	if(err) {throw error;}
	callback(results);
	});
	conn.release();
}

async function deleteUser(id, callback) {
	pool.query('DELETE from users where id =?',[id], function(err, results, fields) {
	if(err) {throw error;}
	callback(results);
	});
	conn.release();
}

async function updateUser(id, users, callback) {
	pool.query('UPDATE users set name = ?, email = ? where id = ?', [users.name, users.email, id], callback, function(err, results, fields) {
	if(err) {throw error;}
	callback(results);
	})
	conn.release();
}

module.exports = {getallUsers, getuserById, addUser, deleteUser, updateUser};