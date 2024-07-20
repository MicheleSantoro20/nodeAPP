const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Imposta EJS come motore di template
app.set('view engine', 'ejs');

// Middleware per parsing del body e delle richieste
app.use(bodyParser.urlencoded({ extended: true }));

// Servire file statici
app.use(express.static('public'));

// Rotta principale
app.get('/', (req, res) => {
  res.render('index');
});

// Avvio del server
app.listen(port, () => {
  console.log(`Server in ascolto su http://localhost:${port}`);
});