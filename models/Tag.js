var keystone = require('keystone');
var Tracker = require('./helper/customTracker');
var NameModel = require('./helper/customModelInhert');

var Tag = new keystone.List('Tag', {
  autokey: { from: 'name', path: 'slug', unique: true }
});

Tag.add({
  name: NameModel(String),
  Tracker
});

Tag.register();
