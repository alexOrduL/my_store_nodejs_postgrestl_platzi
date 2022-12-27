const express = require('express');
const cors = require('cors');
const routerApi = require('./routes');

const { logErros, errorHandler, boomErrorHandler } = require('./middlewares/error.handler');

const app = express();
const port = 3000;

app.use(express.json());

const whitelist = [
    'http://localhost:8080',
    'http://myapp.co'
]
const options = {
    origin: (origin, callback) => {
        if (whitelist.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('no permitido'));
        }
    }
}
app.use(cors());

app.get('/', (req, res) => {
    res.send("hola server express");
});

app.get('/nuevaruta', (req, res) => {
    res.send("hola soy una nueva ruta");
});

routerApi(app);

app.use(logErros);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
    console.log("Mi port" + port);
});

