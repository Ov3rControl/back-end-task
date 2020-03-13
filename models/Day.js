var keystone = require('keystone');
var Types = keystone.Field.Types;
var Tracker = require('./helper/customTracker');
var Day = new keystone.List('Day', {
  autokey: { from: 'name', path: 'slug', unique: true }
});

Day.add({
  name: {
    type: Types.Date,
    initial: true,
    default: Date.now,
    required: true,
    unique: true
  },
  Tracker
});

Day.defaultSort = '-createdAt';
Day.register();
