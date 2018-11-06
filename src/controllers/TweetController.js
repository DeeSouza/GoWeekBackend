const Tweet = require('../models/Tweet');

module.exports = {
    // Listagem
    async index(req, res) {
        // Consulta de todos os tweets em ordem decrescente
        const tweets = await Tweet.find({}).sort('-createdAt');

        return res.json(tweets);
    },

    // Criação
    async store(req, res) {
        const tweet = await Tweet.create(req.body);

        // Enviar notificação de tweet para todos os usuários
        req.io.emit('tweet', tweet);

        return res.json(tweet);
    }
};