const router = require('express').Router();
const User = require('../models/user');

module.exports = router;

router.param('userId', (req, res, next, userId) => {
  User.findById(userId)
    .then(user => {
      if (!user) {
        const error = new Error('Not Found :(');
        error.status = 404;
        next(error);
      } else {
        req.user = user;
        return next();
      }
    });
});

//find all users
router.get('/', (req, res, next) => {
  User.findAll()
    .then(users => res.json(users))
    .catch(next);
});

router.post('/', (req, res, next) => {
    User.create(req.body)
      .then(user => {
        return res.status(201).json(user);
      })
      .catch(next);
  });

router.put('/:userId', (req, res, next) => {
  req.user.update(req.body)
    .then(updatedUser => res.sendStatus(202).json(updatedUser))
    .catch(next);
});

router.delete('/:userId', (req, res, next) => {
  req.user.destroy()
    .then(() => res.sendStatus(202))
    .catch(next);
});
