const mongoose = require('mongoose');
const schema = mongoose.Schema;

var articleSchema = new schema({
    title: {
        type: String,
        required: true
    },
    author:{
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    coverImage: {
        type: String,
        required: true
    },
    quotedFrom: {
        type: String
    }
}, { 
    timestamps: true,
    usePushEach: true
})

var Articles = mongoose.model('Article', articleSchema);
module.exports = Articles;