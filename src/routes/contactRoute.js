module.exports = (app) => {
    let contactController = require('../controllers/contactController');
    app.route('/')
        .get(contactController.listContact);
    app.route('/create')
        .post(contactController.createContact);
    app.route('/update')
        .put(contactController.updateContact);
    app.route('/:id')
        .get(contactController.readContact)
        .delete(contactController.deleteContact);
}