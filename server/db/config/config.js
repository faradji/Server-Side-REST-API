const envConf = require('../../../config');
module.exports = {
	'development': {
		'username': envConf.mysql.username,
		'password': envConf.mysql.password,
		'database': envConf.mysql.database,
		'host': envConf.mysql.host,
		'port': envConf.mysql.port,
		'dialect': 'mysql',
		'logging': false
	},
	'test': {
		'username': envConf.mysql.username,
		'password': envConf.mysql.password,
		'database': envConf.mysql.database,
		'host': envConf.mysql.host,
		'port': envConf.mysql.port,
		'dialect': 'mysql',
		'logging': false
	},
	'production': {
		'username': envConf.mysql.username,
		'password': envConf.mysql.password,
		'database': envConf.mysql.database,
		'host': envConf.mysql.host,
		'port': envConf.mysql.port,
		'dialect': 'mysql',
		'logging': false
	}
};