var keystone = require('keystone');
var Tracker = require('./helper/customTracker');
var NameModel = require('./helper/customModelInhert');

var Stage = new keystone.List('Stage', {
  autokey: { from: 'name', path: 'slug', unique: true }
});

Stage.add({
  name: NameModel(String),
  Tracker
});

Stage.register();
