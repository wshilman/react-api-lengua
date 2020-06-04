const Sequelize = require('sequelize');
const users = require('../models').users;
module.exports = {
  /**
   * 
   * @param {*} req 
   * @param {*} res 
   */
  create(req, res) {
    return users
      .create({
        username: req.body.username,
        status: req.body.status
      })
      .then(users => res.status(200).send(users))
      .catch(error => res.status(400).send(error))
  },
  /**
   * 
   * @param {*} _ 
   * @param {*} res 
   */
  list(_, res) {
    return users.findAll({})
      .then(users => res.status(200).send(users))
      .catch(error => res.status(400).send(error))
  },
  /**
   * 
   * @param {*} req 
   * @param {*} res 
   */
  find(req, res) {
    return users.findAll({
      where: {
        username: req.body.username,
      }
    })
      .then(users => res.status(200).send(users))
      .catch(error => res.status(400).send(error))
  },
};