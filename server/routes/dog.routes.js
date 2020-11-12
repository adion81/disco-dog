const DogController = require('../controllers/dog.controller');

module.exports = (app) => {
    app.get('/api/dogs',DogController.index);
    app.get('/api/dogs/:id',DogController.show);
    app.post('/api/dogs/create',DogController.create);
    app.put('/api/dogs/update/:id',DogController.update);
    app.delete('/api/dogs/destroy/:id',DogController.destroy);
}