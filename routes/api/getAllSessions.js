var keystone = require('keystone');
var Session = keystone.list('Session');

exports.list = (req, res) => {
  Session.model
    .find({}, { slug: 0 })
    .limit(Number(req.query.limit))
    .sort('createdAt')
    .populate({
      path: 'day stage tags speakers',
      select: 'name'
    })
    .exec((err, data) => {
      res.apiResponse({
        session: data
      });
    })
    .catch(err => {
      res.status(500).send(err.name);
    });
};
