'use strict';

module.exports = {
	up: (queryInterface) => {

		return queryInterface.bulkInsert('Cars', [{
			name: 'Ford',
			model: 'terrano',
			color: 'red',
			year: 2014,
			category: 'suv',
			createdAt: new Date().toISOString().slice(0, 19).replace('T', ' '),
			updatedAt: new Date().toISOString().slice(0, 19).replace('T', ' ')
		}, {
			name: 'Maruti',
			model: 'swift',
			color: 'black',
			year: 2009,
			category: 'hatchpack',
			createdAt: new Date().toISOString().slice(0, 19).replace('T', ' '),
			updatedAt: new Date().toISOString().slice(0, 19).replace('T', ' ')
		}, {
			name: 'Renault',
			model: 'duster',
			color: 'white',
			year: 2009,
			category: 'suv',
			createdAt: new Date().toISOString().slice(0, 19).replace('T', ' '),
			updatedAt: new Date().toISOString().slice(0, 19).replace('T', ' ')
		}], {});

	},

	down: (queryInterface) => {
		return queryInterface.bulkDelete('Cars', null, {});
	}
};
