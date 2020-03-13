var keystone = require('keystone');
var importRoutes = keystone.importer(__dirname);

var routes = {
  api: importRoutes('./api')
};

exports = module.exports = app => {
  app.get(
    '/api/allSessions/',
    [keystone.middleware.api, keystone.middleware.cors],
    routes.api.getAllSessions.list
  );
  app.get('/', (req, res) => {
    function renderFullPage() {
      return `
		<!doctype html>
		<html>
			<head>
				<title>Welcome to RiseUp Dynamic Agenda</title>
			</head>
		</html>
		`;
    }
    // Send the html boilerplate
    res.send(renderFullPage());
  });
};
