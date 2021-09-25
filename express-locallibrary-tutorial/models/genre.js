var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var GenreSchema = new Schema({
    name : {
        type: String, 
        required: [true,'Genre required'] ,
        min: [3, 'Too short'],
        max : 100}
});

GenreSchema
.virtual('url')
.get(function () {
    return '/url'
});

module.exports = mongoose.model('Genre', GenreSchema);