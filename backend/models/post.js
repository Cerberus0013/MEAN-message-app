const mongoose = require('mongoose')

//holds my custom DB configuration for posts
const postSchema = mongoose.Schema({
 title: {type: String, required: true},
 content: {type: String, required: true}
 });

 module.exports = mongoose.model('Post', postSchema)
