const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const plays = require('../models').plays;
const users = require('../models').users;
const games = require('../models').games;
module.exports = {
  /**
   * 
   * @param {*} req 
   * @param {*} res 
   */
  create(req, res) {
    // Users
    const responseUsers = users.findOne({
      where: {
        [Op.or]: [{
          username: req.body.users
        }, {
          id: req.body.users
        }]
      }
    });
    // Games
    const responseGames = games.findOne({
      where: {
        [Op.or]: [{
          name: req.body.games
        }, {
          id: req.body.games
        }]
      }
    });
    Promise
      .all([responseUsers, responseGames])
      .then(responses => {
        return plays
          .create({
            users_id: responses[0].id,
            games_id: responses[1].id,
            score: req.body.score,
            status: req.body.status
          })
          .then(plays => res.status(200).send(plays))
      })
      .catch(error => res.status(400).send(error));
  },
  /**
   * 
   * @param {*} _ 
   * @param {*} res 
   */
  list(_, res) {
    return plays.findAll({
      include: [{
        model: users,
        as: 'users'
      }, {
        model: games,
        as: 'games'
      }]
    })
    .then(plays => res.status(200).send(plays))
    .catch(error => res.status(400).send(error))
  },
  /**
   * 
   * @param {*} req 
   * @param {*} res 
   */
  find(req, res) {
    return plays.findAll({
      where: {
      id: req.params.id,
      },
      include: [{
        model: users,
        as: 'users'
      }, {
        model: games,
        as: 'games'
      }]
    })
    .then(plays => res.status(200).send(plays))
    .catch(error => res.status(400).send(error))
  },
};