const mongoose = require('mongoose');
const contact = require('../models/userModel');
const contactModel = mongoose.model('Contact');
const isValidContact = require('../functions/validation');

exports.listContact = (req, res) => {
    contactModel.find({}, (err, listContact) => {
        if (err) {
            console.log(err);
            res.status(500);
            res.json({message: "Server Error."});
        } else {
            let list = listContact.map(listContact => listContact.toJSON());
            res.status(200);
            res.render('list', {
                list: list
            });
        }
    });
}

exports.createContactForm = (req, res) => {
    res.render('form', {
        title: 'Ajouter un contact',
        action: 'create'
    });
};

exports.createContactValid = async (req, res) => {
    const validation = isValidContact(req.body);
    console.log(req.body);
    if(validation.isError) {
        res.render('form', {
            title: 'Ajouter un contact',
            action: 'create',
            errors: validation.errors
        });
    } else {
        res.render('form', {
            title: 'Ajouter un contact',
            action: 'create'
        });

        const newContact = new contact ({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email:req.body.email,
            noPhone:req.body.noPhone,
            tag:req.body.tag
        });
    
        newContact.save((error)=> {
            if (error) {
                res.status(500);
                console.log("result=" + error);
            } else {
                res.status(200);
                res.redirect('/');
            }
        })
    }
};

exports.updateContactForm = (req, res) => {
    contactModel.findById({_id: req.params.id}, (error, newContact) => {
        if (error) {
            res.status(500);
            console.log(error);
        } else {
            res.status(200);
            res.render('form', {
                title: 'Modifier un contact',
                action: 'update',
                id: req.params.id,
                contact: newContact
            });
        }
    });
}

exports.updateContactValid = (req, res) => {
    const validation = validation(req.body);
    if(validation.isError) {
        res.render('form', {
            title: 'Modifier un contact',
            action: 'update',
            id: req.params.id,
            errors: validation.errors
        });
    } else {
        const newContact = new contact ({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email:req.body.email,
            noPhone:req.body.noPhone,
            tag:req.body.tag
        });

        const contactID = {
            _id: req.params.id
        }

        contactModel.findOneAndUpdate(contactID, newContact, {new: true}, (error, newContact) => {
            if (error) {
                res.status(500);
                console.log(error);
                res.json({message: "Server error"});
            } else {
                res.status(200);
                res.redirect('/');
            }
        });
    }
}

exports.deleteContact = (req, res) => {
    contactModel.remove({"_id": req.params.id}, (error) => {
        if (error) {
            res.status(500);
            console.log(error);
            res.json({message: "Server error"});
        } else {
            res.status(200);
            res.redirect('/');
        }
    });
}