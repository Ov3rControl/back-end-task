var keystone = require('keystone');
var Types = keystone.Field.Types;
var Tracker = require('./helper/customTracker');

var Session = new keystone.List('Session', {
  autokey: { from: 'name', path: 'slug', unique: true }
});

Session.add({
  name: { type: String, default: '', required: true },
  day: {
    type: Types.Relationship,
    ref: 'Day',
    index: true,
    many: false
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
    index: true
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
  Tracker
});
// Prevents Adding Same Day Same Stage Sessions Twice
Session.schema.index({ stage: 1, day: 1, startingTime: 1 }, { unique: true });
Session.schema.index({ stage: 1, day: 1, endingTime: 1 }, { unique: true });

Session.defaultSort = '-createdAt';
Session.defaultColumns = 'name, day|20%, startingTime, endingTime stage';
Session.register();
