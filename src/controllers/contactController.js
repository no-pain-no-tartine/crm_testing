const mongoose = require('mongoose');
const contact = require('../models/userModel');
const contactModel = mongoose.model('Contact');
const validation = require('../functions/validation');

exports.listContact = (req, res) => {
    contactModel.find({}, (err, listContact) => {
        if (err) {
            console.log(err);
            res.status(500);
            res.json({message: "Server Error."});
        } else {
            res.status(200);
            res.json(listContact);
        }
    });
}

exports.createContact = (req, res) => { 
    const validation = validation(req.body);
    if(validation.isError) return res.status(400).json({error: validation.message});

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
            res.json({message: "Erreur serveur."});
        } else {
            res.json({message: "The contact has been successfully created"});
        }
    })
};

exports.readContact = () => {
    contactModel.findById({"_id": req.params.id}, (err, listContact) => {
        if (err) {
            console.log(err);
            res.status(500);
            res.json({message: "Server Error."});
        } else {
            res.status(200);
            res.json(listContact);
        }
    });
};

exports.updateContact = () => {
    const validation = validation(req.body);
    if(validation.isError) return res.status(400).json({error: validation.message});

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
            res.json(newContact);
        }
    });
}

exports.deleteContact = () => {
    contactModel.remove({"_id": req.params.id}, (error) => {
        if (error) {
            res.status(500);
            console.log(error);
            res.json({message: "Server error"});
        } else {
            res.status(200);
            res.json({"message": "Contact has been succesfuly deleted"});
        }
    });
}