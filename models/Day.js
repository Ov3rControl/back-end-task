var keystone = require('keystone');
var Types = keystone.Field.Types;

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
  createdAt: { type: Types.Datetime, default: Date.now },
  updatedAt: { type: Types.Datetime, default: Date.now }
});

Day.defaultSort = '-createdAt';
Day.register();
