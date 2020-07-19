function isValid (contact) {
    let validation = {};
    let errors = {};
    validation.isError = false;

    if ('undefined' === typeof contact.firstName) {
        validation.isError = true;
        errors.firstName = 'The first name is required';
    }

    if ('undefined' === typeof contact.lastName) {
        validation.isError = true;
        errors.lastName = 'The last name is required';
    }

    if ('undefined' === typeof contact.email) {
        validation.isError = true;
        errors.email = 'The email is required';
    }

    if (!validEmail(contact.email)) {
        validation.isError = true;
        errors.email = 'The email isn\'t valid';
    }

    if ('undefined' === typeof contact.tag) {
        validation.isError = true;
        errors.tag = 'The tag is required';
    }

    validation.errors = errors;

    return validation;
}

function validEmail (email) {
    const re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return re.test(String(email).toLowerCase());
}

module.exports = isValid;