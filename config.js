module.exports = {
	port: process.env.port || 3000,
	basicAuthCreds: {
		'admin': '123',
		'test': 'test'
	},
	mysql: {
		host: process.env.MYSQL_HOST || 'localhost',
		port: process.env.MYSQL_PORT || 3306,
		username: process.env.MYSQL_USER || 'root',
		password: process.env.MYSQL_PWD || 'aliila881029',
		database: process.env.MYSQL_DB || 'carsdb'
	}
};
