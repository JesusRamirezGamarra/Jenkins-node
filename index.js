const express = require('express');
const app = express();

const PORT = 3000;

app.get('/api/hello', (req, res) => {
    res.json({message: 'Hola mundo!'});
})

app.get('/api/message', (req, res) => {
    res.json({message: 'Endpoint de message!'});
})

app.listen(PORT, () => {
    console.log('Server running on port:', PORT)
})

module.exports = app;