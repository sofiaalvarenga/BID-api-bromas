const mongoose = require("mongoose");

mongoose.set("strictQuery", true); //
mongoose.connect("mongodb://127.0.0.1/jokes", { //COLOCAR 127.0.0.1 para correr el MongoDB Compass
	useNewUrlParser: true, 
	useUnifiedTopology: true,
})
	.then(() => 
    console.log("Established a connection to the database")
    )
	.catch(err => 
        console.log("Something went wrong when connecting to the database", err)
    );