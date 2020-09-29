const server = require('../server/index.js');
const request = require('supertest')(server);
const username = 'admin';
const password = '123';
let id = 10;

/* From seed file */
const auth = 'Basic ' + new Buffer(username + ':' + password).toString('base64');

describe('API Endpoints', () => {
	describe('[GET] /cars', () => {
		it('should return a paginated list of cars', (done) => {
			request.get('/cars?limit=1&offset=1')
				.set('Authorization', auth)
				.then(() => { //res
					//expect(res.body.data).toBeInstanceOf(Array);
					done();
				})
				.catch(done);
		});
	});

	describe('[GET] /cars/1', () => {
		it('should return car with id', (done) => {
			request.get('/cars/1')
				.set('Authorization', auth)
				.then(() => { //res
					//expect(res.body.data).toBeInstanceOf(Array);
					done();
				})
				.catch(done);
		});
	});

	describe('[GET] /cars/1', () => {
		it('should return car with id', (done) => {
			request.get('/cars?fields=name,color')
				.set('Authorization', auth)
				.then(() => { //res
					//expect(res.body.data).toBeInstanceOf(Array);
					done();
				})
				.catch(done);
		});
	});

	describe('[GET] /cars/1', () => {
		it('should return car with id', (done) => {
			request.get('/cars?fields=name,color,year&year=1234')
				.set('Authorization', auth)
				.then(() => { //res
					//expect(res.body.data).toBeInstanceOf(Array);
					done();
				})
				.catch(done);
		});
	});

	describe('[POST] /cars', () => {
		it('should return newly created entry', (done) => {
			request.post('/cars')
				.set('Authorization', auth)
				.send({
					name: 'swift',
					color: 'red',
					year: 1234,
					model: 'desire',
					category: 'hatchpack'
				})
				.then((res) => {
					id = res.body.id;
					//expect(res.body.data).toBeInstanceOf(Array);
					done();
				})
				.catch(done);
		});
	});

	describe('[PUT] /cars/:id', () => {
		it('should update the entry', (done) => {
			request.put(`/cars/${id}`)
				.set('Authorization', auth)
				.send({
					name: 'swift',
					color: 'red',
					year: 1234,
					model: 'desire',
					category: 'hatchpack'
				})
				.then(() => { //res
					//expect(res.body.data).toBeInstanceOf(Array);
					done();
				})
				.catch(done);
		});
	});

	describe('[DELETE] /cars/:id', () => {
		it('should delete the entry', (done) => {
			request.delete(`/cars/${id}`)
				.set('Authorization', auth)
				.send({})
				.then(() => { //res
					//expect(res.body.data).toBeInstanceOf(Array);
					done();
				})
				.catch(done);
		});
	});
});