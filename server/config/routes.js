//CHANGE NAME TO A RELEVANT NAME... USERS, AUTHORS, ETC.
//CHANGE CONTROLLER NAME
const controller = require('./../controllers/pets.js'); //CHANGE CONTROLLER NAME
const path = require('path')

module.exports = function (app) {
    app.get('/animals/', controller.index)
    app.get('/animals/:id', controller.show)
    app.post('/animals/', controller.create)
    app.put('/animals/:id', controller.update)
    app.put('/animals/vote/:id', controller.updateVotes)
    app.delete('/animals/:id', controller.destroy)
    app.all("*", (req, res, next) => {
        res.sendFile(path.resolve("./public/dist/public/index.html"))
    });
}