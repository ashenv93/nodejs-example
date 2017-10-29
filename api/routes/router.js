/**
 * Created By Ashen Priyankara
 */


'use strict';

module.exports = function(app) {
	var userRoute = require('../controllers/loginController');

	// todoList Routes
	app.route('/users')
		.get(userRoute.list_all_users)
		.post(userRoute.insert_user);

};
