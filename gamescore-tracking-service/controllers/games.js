const Sequelize = require('sequelize');
const games = require('../models').games;
module.exports = {
  /**
  * 
  * @param {*} req 
  * @param {*} res 
  */
  create(req, res) {
    return games
      .create({
        name: req.body.name,
        description: req.body.description,
        score: req.body.score,
        status: req.body.status
      })
      .then(games => res.status(200).send(games))
      .catch(error => res.status(400).send(error))
  },
  /**
   * 
   * @param {*} _ 
   * @param {*} res 
   */
  list(_, res) {
    return games.findAll({})
      .then(games => res.status(200).send(games))
      .catch(error => res.status(400).send(error))
  },
  /**
   * 
   * @param {*} req 
   * @param {*} res 
   */
  find(req, res) {
    return games.findAll({
      where: {
        name: req.body.name,
      }
    })
      .then(games => res.status(200).send(games))
      .catch(error => res.status(400).send(error))
  },
};