var keystone = require('keystone');
var Tracker = require('./helper/customTracker');

var Speaker = new keystone.List('Speaker', {
  autokey: { from: 'name', path: 'slug', unique: true }
});

Speaker.add({
  name: {
    type: String,
    initial: true,
    default: '',
    required: true,
    unique: true
  },
  Tracker
});

Speaker.defaultSort = '-createdAt';
Speaker.register();
