const express = require('express');
const app = express();

(req, res) => res.send('Hello World!')
app.listen(4000, () => console.log('Server is running'))     