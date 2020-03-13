var keystone = require('keystone');
var Types = keystone.Field.Types;

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
  createdAt: { type: Types.Datetime, default: Date.now },
  updatedAt: { type: Types.Datetime, default: Date.now }
});

Stage.defaultSort = '-createdAt';
Stage.register();
