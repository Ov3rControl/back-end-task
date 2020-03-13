var keystone = require('keystone');
var Types = keystone.Field.Types;

var Session = new keystone.List('Session', {
  autokey: { from: 'name', path: 'slug', unique: true }
});

Session.add({
  name: { type: String, default: '', required: true },
  day: {
    type: Types.Relationship,
    ref: 'Day',
    index: true,
    many: false,
    unique: true
  },
  startingTime: {
    type: Types.Datetime,
    format: 'HH:mm',
    default: Date.now
  },
  endingTime: {
    type: Types.Datetime,
    format: 'hh:mm',
    default: Date.now
  },

  stage: {
    type: Types.Relationship,
    ref: 'Stage',
    many: false,
    index: true,
    unique: true
  },
  description: {
    type: String
  },
  speakers: {
    type: Types.Relationship,
    ref: 'Speaker',
    many: true,
    index: true
  },
  tags: {
    type: Types.Relationship,
    ref: 'Tag',
    index: true,
    many: true
  },
  createdAt: { type: Types.Datetime, default: Date.now },
  updatedAt: { type: Types.Datetime, default: Date.now }
});

// Prevents Adding Same Day Same Stage Sessions Twice
Session.schema.pre('save', next => {
  Session.schema.index({ stage: 1, day: 1 }, { unique: true });
  next();
});

Session.defaultSort = '-createdAt';
Session.defaultColumns = 'name, day|20%, startingTime, endingTime stage';
Session.register();
