const mongoose = require('mongoose');
const schema = mongoose.Schema;

let contact = new schema (
    {
        firstName: {
            type: String,
            required: 'First name is required'
        },
        lastName: {
            type: String,
            required: 'Last name is required'
        },
        email: {
            type: String,
            required: 'Email is required'
        },
        noPhone:  {
            type: Number
        },
        tag: {
            type: String,
            required: 'Tag is required'
        }
    }
);

module.exports = mongoose.model('Contact', contact);