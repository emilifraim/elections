const express = require('express');
const bodyParser = require('body-parser');

const elections = require('./routes/api/elections');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// USE Routes
app.use('/api/elections', elections);

const port = process.env.PORT || 5040;

app.listen(port, () => console.log(`server running on port ${port}`));
