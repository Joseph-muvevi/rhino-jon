const mongoose = require("mongoose")

// creating the database module
module.exports = connection = async () => {
    try {
        const connectionParams = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true,
            autoIndex: true,
        }

        await mongoose.connect(process.env.DB, connectionParams);
        console.log("Connected to the database...")
    }
    catch (err) {
        console.log(err, "Could not connect to the database")
    }
}