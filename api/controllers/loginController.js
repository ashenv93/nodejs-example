/**
 * Created By Ashen Priyankara
 */

'use strict';

var mongoose = require('mongoose'),
  Users = mongoose.model('users');



exports.list_all_users = function(req, res) {
  Users.find({}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};


exports.insert_user = function(req, res) {
  var new_user = new Users(req.body);
  new_user.save(function(err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });
};

// exports.read_a_task = function(req, res) {
//   Task.findById(req.params.taskId, function(err, task) {
//     if (err)
//       res.send(err);
//     res.json(task);
//   });
// };

// exports.update_a_task = function(req, res) {
//   Task.findOneAndUpdate({_id:req.params.taskId}, req.body, {new: true}, function(err, task) {
//     if (err)
//       res.send(err);
//     res.json(task);
//   });
// };
// // Task.remove({}).exec(function(){});
// exports.delete_a_task = function(req, res) {

//   Task.remove({
//     _id: req.params.taskId
//   }, function(err, task) {
//     if (err)
//       res.send(err);
//     res.json({ message: 'Task successfully deleted' });
//   });
// };
