var keystone = require('keystone');
var Types = keystone.Field.Types;
var Tracker = require('./helper/customTracker');
var NameModel = require('./helper/customModelInhert');

var Day = new keystone.List('Day', {
  autokey: { from: 'name', path: 'slug', unique: true }
});

Day.add({
  name: NameModel(Types.Date),
  Tracker
});

Day.register();
