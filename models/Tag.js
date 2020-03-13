var keystone = require('keystone');
var Types = keystone.Field.Types;

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
  createdAt: { type: Types.Datetime, default: Date.now },
  updatedAt: { type: Types.Datetime, default: Date.now }
});

Tag.defaultSort = '-createdAt';
Tag.register();
