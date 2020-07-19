module.exports = (app) => {
    let contactController = require('../controllers/contactController');
    app.route('/')
        .get(contactController.listContact);
    app.route('/create')
        .get(contactController.createContactForm)
        .post(contactController.createContactValid);
    app.route('/update/:id')
        .get(contactController.updateContactForm)
        .post(contactController.updateContactValid);
    app.route('/delete/:id')
        .get(contactController.deleteContact);
}