//CUSTOMIZE THE MODEL SCHEMA TO MATCH THE TEST. don't forget the validations!
//REMEMBER THAT "UNIQUE: TRUE" BREAKS VALIDATIONS ON UPDATE... SO YOU CAN ONLY USE ONE OR THE OTHER
let uniqueValid = require('mongoose-unique-validator'); // This breaks validations!!!

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PetSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: [3, "you name needs a min length of 3!"]
    },
    type: {
        type: String,
        required: true,
        minlength: [3, "your type needs a min length of 3!"]
    },
    description: {
        type: String,
        required: true,
        minlength: [3, "your description  need a min length of 3!"]
    },
    likes: {
        type: Number,
        required: true,
        default: 0
    },
    skill1: {
        type: String
    },
    skill2: {
        type: String
    },
    skill3: {
        type: String
    },

}, { timestamps: true })
mongoose.model('Pet', PetSchema)