describe('GET /users', function(){
	it('returns list of users', function(done) {
		request.get('/users')
			.expect(200)
			.end(function(err, res) {
				expect(res.body).to.have.lengthOf(2);
				done(err);
			});
	});

	it('should return not found.', function(done) {
		request.get('/invalidpath')
			.expect(404)
			.end(function(err, res) {
				done(err);
			});
	});
});

describe('GET /users/:id', function() {
	it('returns a user by id', function(done) {
		request.get('/users/1')
			.expect(200)
			.end(function(err, res) {
				done(err);
			});
	});
});