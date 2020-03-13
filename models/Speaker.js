var keystone = require('keystone');
var Tracker = require('./helper/customTracker');
var NameModel = require('./helper/customModelInhert');

var Speaker = new keystone.List('Speaker', {
  autokey: { from: 'name', path: 'slug', unique: true }
});

Speaker.add({
  name: NameModel(String),
  Tracker
});

Speaker.defaultSort = '-createdAt';
Speaker.register();
