var keystone = require('keystone');
var Types = keystone.Field.Types;

const NameModel = type => {
  return {
    type,
    initial: true,
    default: '',
    required: true,
    unique: true
  };
};
module.exports = NameModel;
