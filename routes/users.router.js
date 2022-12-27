const router = require('express').Router()

const UserService = require('./../services/user.service')

const service = new UserService();

router.get('/', async (req, res, next) => {
    try {
      const users = await service.find();
      res.json(users);
    } catch (error) {
      next(error)
    }
})

router.get('/:id', (req, res) => {
    const { id } = req.params;
    const user = service.findOne(id);
    res.status(200).json(user);
  });

module.exports  = router
