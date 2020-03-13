var keystone = require('keystone');
var Types = keystone.Field.Types;

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
  createdAt: { type: Types.Datetime, default: Date.now },
  updatedAt: { type: Types.Datetime, default: Date.now }
});

Speaker.defaultSort = '-createdAt';
Speaker.register();
