const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const populateDatabaseSchema = new Schema({
    results: Schema.Types.Mixed

},{ timestamps: true });

const populateDatabase = mongoose.model("populateDatabase", populateDatabaseSchema);

module.exports = populateDatabase;