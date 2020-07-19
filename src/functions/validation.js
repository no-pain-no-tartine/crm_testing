function isValid (contact) {
    let validation = {}
    validation.isError = false;

    if (isNul(contact.firstName)) {
        validation.isError = true;
        validation.error.firstName = 'The first name is required';
    }

    if (isNul(contact.lastName)) {
        validation.isError = true;
        validation.error.lastName = 'The last name is required';
    }

    if (isNul(contact.email)) {
        validation.isError = true;
        validation.error.email = 'The email is required';
    }

    if (!validEmail(contact.email)) {
        validation.isError = true;
        validation.error.email = 'The email isn\'t valid';
    }

    if (isNul(contact.tag)) {
        validation.isError = true;
        validation.error.email = 'The tag is required';
    }

    return validation;
}

function validEmail (email) {
    const re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return re.test(String(email).toLowerCase());
}

function isNul (val) {
    if (null == val) {
        return true;
    }
    return false;
}

module.exports = isValid;