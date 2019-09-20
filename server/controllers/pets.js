//1) change the above name to the correct model.
//2) adjust the model names below accordingly as well
//3) change the update paramaters to match what is in model

const mongoose = require('mongoose');
const Pet = mongoose.model('Pet'); //CHANGE NAME TO MODEL NAME
let errorHandler = require('./helpers/error-handler');

module.exports = {
    index(req, res) {
        Pet.find()
            .sort({ type: 1 })
            .then(results => res.json(results))
            .catch(errorHandler.bind(res));
    },
    show(req, res) {
        Pet.findById(req.params.id)
            // .populate("_ratings")
            // .exec()
            .then(result => res.json(result))
            .catch(errorHandler.bind(res));
    },
    create(req, res) {
        //not sure if this works or not!?!? will need to test for uniqueness!!!!
        Pet.find({ name: req.body.name })
            .then(data => {
                console.log("Does the name already exist?", data)
                if (data.length == 0) {
                    Pet.create(req.body)
                        .then(result => res.json(result))
                        .catch(errorHandler.bind(res));
                }
                else {
                    //if we already have a copy, I pushed in an error that gets returned.  Then we can search if there is an error on return, and if so, print that error on the Angular side instead of saving the person.
                    data.push({ err: "that's not good, we already have that name!" })
                    res.json(data);

                }
            })
            .catch(errorHandler.bind(res));
    },
    update(req, res) {
        //     Pet.find({ name: req.body.name })
        //         .then(listOfPets => {
        //             if (listOfPets.length > 1) {
        //                 let err = "that name is already in existance!";
        //                 res.json(err);
        //             }
        //             else {
        //                 Pet.update({ _id: req.params.id }, req.body, { new: true, runValidators: true })
        //                     // Pet.findByIdAndUpdate(req.params.id, { name: req.body.name }, { new: true })
        //                     .then(task => res.json(task))
        //                     .catch(errorHandler.bind(res));
        //             }
        //         })
        //         .catch(errorHandler.bind(res));
        // },
        Pet.update({ _id: req.params.id }, req.body, { new: true, runValidators: true })
            // Pet.findByIdAndUpdate(req.params.id, { name: req.body.name }, { new: true })
            .then(task => res.json(task))
            .catch(errorHandler.bind(res));
    },
    destroy(req, res) {
        Pet.findByIdAndRemove(req.params.id)
            .then(result => res.json(result))
            .catch(errorHandler.bind(res));
    },
    updateVotes(req, res) {
        Pet.findOne({ _id: req.params.id })
            .then(pet => {
                console.log("the pet seelcted!!!", pet)
                pet.likes += 1;
                pet.save()
                    .then(data => {
                        console.log(data)
                        res.json(result)
                    })
                    .catch(errorHandler.bind(res))
            })
            .catch(errorHandler.bind(res));
    }

    // createQuote(req, res) {
    //     Pet.findOne({ _id: req.params.id })
    //         .then(author => {
    //             console.log("$$$$$$$$$$$", author)
    //             console.log(req.body.quote)
    //             console.log(req.body.votes)
    //             author._quotes.push({ quote: req.body.quote, votes: req.body.votes })
    //             author.save()
    //                 .then(data => res.json(data))
    //                 .catch(errorHandler.bind(res))
    //         })
    //         .catch(errorHandler.bind(res));
    // },
    // voteUp(req, res) {
    //     console.log("###########", req.params.id)
    //     console.log(req.body._id)
    //     Pet.findOne({ _id: req.params.id })
    //         .then(author => {
    //             console.log("here is the author!", author)
    //             for (let quote of author._quotes) {
    //                 console.log(quote)
    //                 if (quote._id == req.body._id) {
    //                     quote.votes += 1;
    //                 }
    //             }
    //             author.save()
    //                 .then(data => res.json(data))
    //                 .catch(errorHandler.bind(res));
    //         })
    //         .catch(errorHandler.bind(res));
    // },
    // voteDown(req, res) {
    //     console.log("###########", req.params.id)
    //     console.log(req.body._id)
    //     Pet.findOne({ _id: req.params.id })
    //         .then(author => {
    //             console.log("here is the author!", author)
    //             for (let quote of author._quotes) {
    //                 console.log(quote)
    //                 if (quote._id == req.body._id) {
    //                     quote.votes -= 1;
    //                 }
    //             }
    //             author.save()
    //                 .then(data => res.json(data))
    //                 .catch(errorHandler.bind(res));
    //         })
    //         .catch(errorHandler.bind(res));
    // }
}