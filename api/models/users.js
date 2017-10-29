'use strict';


var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  name: {
    type: String,
    Required: 'Kindly enter the username of user'
  },
  password: {
    type: String,
    Required: 'Kindly enter the password of user'
  }
});


module.exports = mongoose.model('users', UserSchema);