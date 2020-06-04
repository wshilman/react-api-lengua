/* Controllers */
const usersController = require('../controllers').users;
const gamesController = require('../controllers').games;
const playsController = require('../controllers').plays;

module.exports = (app) => {
   app.get('/api', (req, res) => res.status(200).send ({
        message: 'Example project did not give you access to the api web services',
   }));
   app.post('/api/users/create', usersController.create);
   app.get('/api/users/list', usersController.list);
   app.get('/api/users/find', usersController.find);

   app.post('/api/games/create', gamesController.create);
   app.get('/api/games/list', gamesController.list);
   app.get('/api/games/find', gamesController.find);

   app.post('/api/plays/create', playsController.create);
   app.get('/api/plays/list', playsController.list);
   app.get('/api/plays/find', playsController.find);
};