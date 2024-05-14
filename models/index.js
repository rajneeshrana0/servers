const mongoose = require("mongoose");
require('dotenv').config();

function main() {
    mongoose.connect(process.env.MONGODB_URI).then(() => {
        console.log("Successful connection to MongoDB");
    }).catch((err) => {
        console.error("Error connecting to MongoDB:", err);
    });
}

module.exports = { main };
