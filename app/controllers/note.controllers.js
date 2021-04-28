const Note = require('../models/note.model.js');//adapted from https://www.callicoder.com/node-js-express-mongodb-restful-crud-api-tutorial/ 


// Create and Save a new Note
exports.create = (req, res) => {
    // Validate request
    if(!req.body.name ||!req.body.birthday|| !req.body.email || !req.body.password) {
        return res.status(400).send({
            message: "Member content can not be empty"
        });
    }

    // Create a Note
    const note = new Note({
        name: req.body.name,
        birthday : req.body.birthday,
        email : req.body.email,
        password: req.body.password,
    });



// Find a single member with their email
exports.findOne = (req, res) => {
    Note.findById(req.body.email)
    .then(note => {
        if(!email) {
            return res.status(404).send({
                message: "Email not found "
            });            
        }
        res.send(note);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Member not found with email " + req.params.email
            });                
        }
        return res.status(500).send({
            message: "Error retrieving member"
        });
    });
};

// Update a note identified by the noteId in the request
exports.update = (req, res) => {
// Validate desired update field
/*if(!req.body.content) {
    return res.status(400).send({
        message: "Note content can not be empty"
    });
}*/

// Find note and update it with the request body
Note.findByIdAndUpdate(req.params.email, {
    email: req.params.email,
    password: req.body.password
}, {new: true})
.then(note => {
    if(!email) {
        return res.status(404).send({
            message: "Member not found with id " + req.params.noteId
        });
    }
    res.send(note);
}).catch(err => {
    if(err.kind === 'ObjectId') {
        return res.status(404).send({
            message: "Note not found with id " + req.params.noteId
        });                
    }
    return res.status(500).send({
        message: "Error updating note with id " + req.params.noteId
    });
});

};

// Delete a note with the specified noteId in the request
exports.delete = (req, res) => {
    Note.findByIdAndRemove(req.params.email)
    .then(note => {
        if(!note) {
            return res.status(404).send({
                message: "Member not found with email " + req.params.email
            });
        }
        res.send({message: "Membership deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Member not found with email " + req.params.email
            });                
        }
        return res.status(500).send({
            message: "Could not delete member with email " + req.params.email
        });
    });
};