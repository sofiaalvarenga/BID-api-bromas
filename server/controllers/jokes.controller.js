const Joke = require("../models/jokes.model");
//var random = require('mongoose-random');

//FIND ALL THE JOKES
module.exports.findAllJokes = (req, res) => {
    Joke.find()
    .then((allJokes) => res.json({ jokes: allJokes }))
    .catch((err) => res.json({ message: "Something went wrong", error: err }));
};

//FIND A JOKE
module.exports.findOneJoke = (req, res) => {
    Joke.findOne({ _id: req.params.id })
    .then((oneJoke) => res.json({ joke: oneJoke }))
    .catch((err) => res.json({ message: "Something went wrong", error: err }));
};

//FIND A RANDOM JOKE
module.exports.findRandomJoke = (req, res) => {
    Joke.find()
    .then((allJokes) => {
        if(allJokes){
            let jokes = allJokes;
            return res.json({ joke: allJokes[Math.floor(Math.random() *jokes.length)] })
        }
    })
    .catch((err) => res.json({ message: "Something went wrong", error: err }));
};

//CREATE A JOKE
module.exports.createJoke = (req, res) => {
    Joke.create(req.body)
    .then((createdJoke) => res.json({ joke: createdJoke }))
    .catch((err) => res.json({ message: "Something went wrong", error: err }));
};

//UPDATE A JOKE
module.exports.updateJoke = (req, res) => {
    Joke.updateOne({ _id: req.params.id }, req.body, { new: true })
    .then((updatedJoke) => res.json({ joke: updatedJoke }))
    .catch((err) => res.json({ message: "Something went wrong", error: err }));
};

//DETELE A JOKE
module.exports.deleteJoke = (req, res) => {
    Joke.deteleOne({ _id: req.params.id })
    .then((result) => res.json({ result: result }))
    .catch((err) => res.json({ message: "Something went wrong", error: err }));
};