module.exports = (app) => {//copied from https://www.callicoder.com/node-js-express-mongodb-restful-crud-api-tutorial/ 
    const notes = require('../controllers/note.controller.js.js');

    // Create a new Note
    app.post('/memberPage.html', notes.create);
    // Retrieve a single Note with noteId
    app.get('/memberPage.html/:email', notes.findOne);

    // Update a Note with noteId
    app.put('/memberPage.html/:email', notes.update);

    // Delete a Note with noteId
    app.delete('/memberPage.html/:email', notes.delete);
}