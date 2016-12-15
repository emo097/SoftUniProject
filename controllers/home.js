const mongoose = require('mongoose');
const Article = mongoose.model('Article');

module.exports = {
    forumGet: (req, res) => {
        Article.find({}).limit(250).populate('author').then(articles => {
            res.render('home/home1', {articles: articles, showCreateButton: true});
        })
    },
    motorGet: (req, res) => {
        Article.find({}).limit(250).populate('author').then(articles => {
            res.render('home/motor', {articles: articles, showCreateButton: true});
        })
    },
    eventsGet: (req, res) => {
        res.render('home/events')
    },
    index: (req, res) => {
        res.render('home/index');
    }
};