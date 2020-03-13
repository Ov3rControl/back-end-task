var keystone = require('keystone');

keystone.init({
  'cookie secret': '#####123$$$$@@@222QQswE',
  name: 'Dynamic Agenda',
  'user model': 'User',
  'auto update': true,
  auth: true
});

keystone.import('models');

keystone.set('routes', require('./routes'));
keystone.set('cors allow origin', true);
keystone.set('cors allow methods', true);
keystone.set('cors allow headers', true);

keystone.set('nav', {
  'Session-settings': ['days', 'speakers', 'stages', 'tags'],
  Session: 'sessions',
  admin: 'users'
});

keystone.start();
