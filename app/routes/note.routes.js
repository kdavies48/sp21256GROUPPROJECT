module.exports = (app) => {//copied from https://www.callicoder.com/node-js-express-mongodb-restful-crud-api-tutorial/ 
    const notes = require('../controllers/note.controller.js.js');

    // Create a new Note
    app.post('/', notes.create);
    // Retrieve a single Note with noteId
    app.get('/:email', notes.findOne);

    // Update a Note with noteId
    app.put('/:email', notes.update);

    // Delete a Note with noteId
    app.delete('/:email', notes.delete);
}