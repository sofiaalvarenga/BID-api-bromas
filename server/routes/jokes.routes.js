const jokeController = require("../controllers/jokes.controller");

module.exports = app => {
    app.get("/api/jokes/", jokeController.findAllJokes); //ok
    app.get("/api/jokes/random", jokeController.findRandomJoke); //ok
    app.get("/api/jokes/:id", jokeController.findOneJoke); // ok //id number directamente
    app.post("/api/jokes/new", jokeController.createJoke); //ok //Escribir como "setup": "string" y "punchile": "string"
    app.put("/api/jokes/update/:id", jokeController.updateJoke); //OK //id directamente
    app.delete("/api/jokes/delete/:id", jokeController.deleteJoke);// ok
    };