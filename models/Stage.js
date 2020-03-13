var keystone = require('keystone');
var Tracker = require('./helper/customTracker');

var Stage = new keystone.List('Stage', {
  autokey: { from: 'name', path: 'slug', unique: true }
});

Stage.add({
  name: {
    type: String,
    initial: true,
    default: '',
    required: true,
    unique: true
  },
  Tracker
});

Stage.defaultSort = '-createdAt';
Stage.register();
