const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`App is Running on http://localhost:${port}`));

console.log("Bot làm bởi Folody Team");
