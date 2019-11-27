const mongoose = require('mongoose');

const votersSchema = new mongoose.Schema({
    name: {type: String},
    address: {type: String},
    party: {type: String},
    registered: {type: Boolean, required: true},
    commitToDonate: {type: Boolean, required: true}
});

const Voter = mongoose.model('Vote', votersSchema);

module.exports = Voter;