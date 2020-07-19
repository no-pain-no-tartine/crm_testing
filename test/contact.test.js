const Contact = require('.');
const ContactValidator = require('../functions/validation.js');
jest.mock('.'); 
// We clean up each instance, as well as the calls to constructors and its methods.
beforeEach(() => {
    Contact.mockClear();
});

it(`Checks if the Contact and his validator have been called once`, function () {
    new Contact({
        email: 'nour@gmail.com',
        lastName: 'HANNAFI',
        firstName: 'Nour',
        noPhone: +3325652649,
        tag: 'developer'
    });

    expect(Contact).toHaveBeenCalledTimes(1);
});

it(`Check if a Contact is created with good parameters`, function () {
    const Contact = new Contact({
        email: 'nour@gmail.com',
        lastName: 'HANNAFI',
        firstName: 'Nour',
        noPhone: +3325652649,
        tag: 'developer'
    });

    expect(Contact).toBeDefined();
});

it(`Check if we get an error if we don't put arguments`, function () {
    const Contact = new Contact({});

    Contact.mockImplementation(() => new Contact({}));
    expect() 
});

it(`Check if you get an error if you don't define the last name`, function () {
    expect(function() {
    new Contact({
        email: 'nour@gmail.com',
        firstName: 'Nour',
        noPhone: +3325652649,
        tag:'developer'
    });
    }).toThrowError(); 
});

it(`Check if you get an error if you don't define the first name`, function () {
    expect(function() {
        new Contact({
            email: 'nour@gmail.com',
            lastName: 'HANNAFI',
            noPhone: +3325652649,
            tag:'developer'
    });
    }).toThrow();
});


it(`Check if we get an error if the email address is not the right format`, function () {
    expect(function() {
        new Contact({
            email: 'nourtata',
            firstName: 'Nour',
            lastName: 'HANNAFI',
            noPhone: +3325652649,
            tag:'developer'
    });
    }).toThrow(); 
});

it(`Check if we get an error if the noPhone is under 13`, function () {
    expect(function() { 
    new Contact({
        email: 'nour@gmail.com',
        firstName: 'Nour',
        lastName: 'HANNAFI',
        noPhone: 'fjzi',
    });
    }).toThrow();
});
it(`Check if you get an error if you don't define the tag`, function () {
    expect(function() {
        new Contact({
            email: 'nour@gmail.com',
            lastName: 'HANNAFI',
            noPhone: +3325652649
    });
    }).toThrow();
});
