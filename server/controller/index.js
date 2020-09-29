const seqModels = require('../db/models');
const _ = require('lodash');
exports.get = function (reqObj) {
	const options = {
		limit: reqObj.query.limit ? parseInt(reqObj.query.limit) : undefined,
		offset: reqObj.query.offset ? parseInt(reqObj.query.offset) : undefined

	};
	let filter = _.pick(reqObj.query, Object.keys(seqModels.Car.rawAttributes));
	filter = _.mapValues(filter, function (value, key) {
		return (seqModels.Car.rawAttributes[key].type === seqModels.Sequelize.INTEGER) ? value : parseInt(value);
	});
	options.where = reqObj.params.id ? {
		id: reqObj.params.id
	} : filter;

	options.attributes = reqObj.query.fields ? ['id'].concat(reqObj.query.fields.split(',')) : undefined;
	console.log('Processing get cars request with params:', options);
	return reqObj.params.id ? seqModels.Car.findOne(options) : seqModels.Car.findAll(options);

};
exports.create = function (reqObj) {
	console.log('Creating a new car:', reqObj.body);
	return seqModels.Car.create(reqObj.body);

};
exports.update = function (reqObj) {
	console.log('Updating a car of id:', reqObj.params.id, 'with values', reqObj.body);
	return seqModels.Car.update(reqObj.body, {
		where: {
			id: reqObj.params.id
		}
	});

};
exports.delete = function (reqObj) {
	console.log('Deleting a car with id:', reqObj.params.id);
	return new Promise((resolve, reject) => {
		seqModels.Car.destroy({
			where: {
				id: reqObj.params.id
			}
		})
			.then(() => resolve({}))
			.catch(reject);
	});
};
