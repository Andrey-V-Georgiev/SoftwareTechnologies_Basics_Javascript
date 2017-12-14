const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectID;

let articleSchema = mongoose.Schema({
    title: {type: String, required: true},
    contend: {type: String, required: true},
    author: {type: ObjectID, required: true, ref: 'User'},
    date: {type: Date, default: Date.now()},
});

const Article = mongoose.model('Article', articleSchema);

module.exports = Article;