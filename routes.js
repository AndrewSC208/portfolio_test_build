const controllers = require('./controllers');

const Router = require('express').Router;
const router = new Router();

// this is where I should redirect to the angular app, and handel the rest there.
router.get('/', (req, res) => {
  res.json({ message: 'you missed the api' });
});

router.route('/pet')
  .get((...args) => controllers.pet.find(...args))
  .post((...args) => controllers.pet.create(...args));

module.exports = router;
