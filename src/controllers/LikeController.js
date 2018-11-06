const Tweet = require('../models/Tweet');

module.exports = {
    // Like no Tweet
    async store(req, res){
        const tweet = await Tweet.findById(req.params.id);

        tweet.set({
            likes: tweet.likes + 1
        });

        await tweet.save();

        // Enviar notificação de tweet para todos os usuários
        req.io.emit('like', tweet);

        return res.json(tweet);
    }
}