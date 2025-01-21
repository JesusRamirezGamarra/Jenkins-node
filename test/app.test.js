const express = require('express');
const app = express();

// Definición de rutas
app.get('/api/hello', (req, res) => {
    res.json({ message: 'Hola mundo!' });
});

app.get('/api/message', (req, res) => {
    res.json({ message: 'Endpoint de message!' });
});

// Exporta la app para pruebas
module.exports = app;

// Opcional: inicia el servidor solo si no es un módulo
if (require.main === module) {
    const port = process.env.PORT || 3000;
    app.listen(port, () => {
        console.log(`Servidor ejecutándose en el puerto ${port}`);
    });
}
