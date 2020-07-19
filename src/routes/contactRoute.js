module.exports = (app) => {
    let contactController = require('../controllers/contactController');
    app.route('/')
        .get(contactController.listContact);
    app.route('/:id')
        .post(contactController.createContact)
        .get(contactController.readContact)
        .put(contactController.updateContact)
        .delete(contactController.deleteContact);
}