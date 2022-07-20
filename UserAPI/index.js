const bodyParser = require('body-parser');
const express = require('express');

const app = express();
const cors = require('cors');
const router = require('./routes/routes');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/', router);

app.listen(8686, () => {
  console.log('Servidor rodando na porta: 8686');
});
