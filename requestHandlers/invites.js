var db = require('../db.js');
var Event = require('../model/event.js');
var Movie = require('../model/moviequeue.js');
var User = require('../model/user.js');
var Invite = require('../model/invite.js');
var Message = require('../model/message.js');
var util = require('../lib/utility');

exports.addInvite = function(req, res) {
  // TODO get the new invite info from the request object
  let invitedUserName = req.body.invitedUserName;
  let eventId = req.body.eventId;
  let eventTitle = req.body.eventTitle;
  let eventHostUserName = req.session.user.username;
  let eventMoviePictureUrl = '';
  User.findOne({ username: invitedUserName })
    .exec(function(err, user) {
      if(!user) {
        console.log('Error finding user for creating invite: ', err);
        res.send('error');
      } else {
        Invite.create({
          invitedUserName,
          eventId,
          eventTitle,
          eventHostUserName,
          eventMoviePictureUrl,
          invitedUserResponded: false,
          invitedUserGoing: null
        },function(err, invite) {
          if (err) {
            console.log('Error creating invite: ', err);
            res.send('error');
          } else {
            res.send('success')
          }
        });
      }
    }); 
};

exports.removeInvite = function(req, res) {
  Invite.remove({ 
    invitedUserName: req.body.username, 
    eventHostUserName: req.session.user.username,
    eventId: req.body.eventId
   }, function(err) {
    if (err) {
      res.send('Bad');
    } else {
      res.send('Good');
    }
  })
  // res.send('You did it');
}
