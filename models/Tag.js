var keystone = require('keystone');
var Tracker = require('./helper/customTracker');

var Tag = new keystone.List('Tag', {
  autokey: { from: 'name', path: 'slug', unique: true }
});

Tag.add({
  name: {
    type: String,
    initial: true,
    default: '',
    required: true,
    unique: true
  },
  Tracker
});

Tag.defaultSort = '-createdAt';
Tag.register();
