var keystone = require('keystone');
var Types = keystone.Field.Types;

const Tracker = {
  createdAt: { type: Types.Datetime, default: Date.now },
  updatedAt: { type: Types.Datetime, default: Date.now }
};
module.exports = Tracker;
