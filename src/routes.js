const express           = require('express');
const routes            = express.Router();

const TweetController   = require('./controllers/TweetController');
const LikeController    = require('./controllers/LikeController');

/**
 * Req = Requisição para o Servidor
 * Res = Parâmetros GET, HEADER, AUTH, REQUESTS
 */
routes.get('/', function(req, res){
    return res.send('Hello World - GoWeek');
});

// Rota de Tweets
routes.get('/tweets', TweetController.index);
routes.post('/tweets', TweetController.store);

// Rota de Likes
routes.post('/likes/:id', LikeController.store);

module.exports  = routes;