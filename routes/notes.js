const fs = require('fs');
const util = require('util');
const { v4: uuidv4 } = require('uuid');
const notes = require('express').Router();
const { readAndAppend, readFromFile } = require('../helpers/fsUtils');


//Get Route for notes Page
notes.get('/', (req, res) =>
readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)))
);

notes.post('/', (req, res) =>{
// readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)))
const {text,title} = req.body;
if(req.body){
    const newNote = {
        text,
        title,
        note_id: uuidv4(),
    }
    readAndAppend(newNote, './db/db.json');
    res.json('successfully added the note')
}else{
    res.error('Error adding the note');
}

}
);



module.exports = notes;