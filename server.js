const express = require('express');
const path = require('path');
const fs = require('fs');
const util = require('util');
// const { clog } = require('./middleware/clog');
const api = require('./routes/index.js');

const PORT = process.env.port || 3001;

const app = express();

// // Import custom middleware, "cLog"
// app.use(clog);

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api);

app.use(express.static('public'));

// GET Route for homepage
// app.get('/', (req, res) =>
//   res.sendFile(path.join(__dirname, '/public/index.html'))
// );


//Get Route for notes Page
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);

// GET Route for homepage
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);
//Get Route for notes Page
// app.get('/api/notes', (req, res) =>
//   res.sendFile(path.join(__dirname, '/public/notes.html'))
// );
// // Wildcard Route for 404 Page
// app.use((req, res) => {
//   res.status(404).sendFile(path.join(__dirname, '/public/pages/404.html'));
// });

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);
