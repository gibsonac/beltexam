//CUSTOMIZE THE MODEL SCHEMA TO MATCH THE TEST. don't forget the validations!
//REMEMBER THAT "UNIQUE: TRUE" BREAKS VALIDATIONS ON UPDATE... SO YOU CAN ONLY USE ONE OR THE OTHER
// let uniqueValid = require('mongoose-unique-validator'); // This breaks validations!!!

// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

// const BookSchema = new mongoose.Schema({
//     title: {
//         type: String,
//         trim: true, //gets rid of extra spaces
//         // unique: true,//// unique? TRUE?
//         required: [true, "You need a title for your task"],
//         minlength: [4, "Title length must be longer than 4 characters"]
//     },
//     desc: {
//         type: String,
//         trim: true,
//         default: ""
//     },
//     completed: {
//         type: Boolean,
//         required: true,
//         default: false
//     },
//     _user: {type: Schema.Types.ObjectId, ref: "User"  }
// }, {timestamps: true});
// mongoose.model('Book', BookSchema)