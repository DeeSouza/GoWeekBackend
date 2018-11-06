const express   = require('express');
const mongosse  = require('mongoose');
const cors      = require('cors');

// Inicia a aplicação
const app       = express();

// Inicializar protocolo WS
const server    = require('http').Server(app);
const io        = require('socket.io')(server);

// Conexão na base de dados
mongosse.connect('mongodb://goweek:goweek123@ds253713.mlab.com:53713/goweek-backend', {
    useNewUrlParser: true
});

// Middleware para utilizar o IO nas requisições
app.use((req, res, next) => {
    req.io = io;

    return next();
});

// CORS
app.use(cors());

// Usar JSON para todas as requisições
app.use(express.json());

// Arquivo de rotas
app.use(require('./routes'));

/**
 * Iniciar o servidor na porta 3000
 */
server.listen(3000, () => {
    console.log('Server Started');
});