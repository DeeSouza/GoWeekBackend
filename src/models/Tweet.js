const mongoose = require('mongoose');

const TweetSchema = new mongoose.Schema({
    author: String,
    content: String,
    likes: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

// O que vai devolvar para quem importar esse arquivo
module.exports = mongoose.model('Tweet', TweetSchema);