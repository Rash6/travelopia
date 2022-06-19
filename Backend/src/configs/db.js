const mongoose = require('mongoose');

module.exports = () => {
    return mongoose.connect(
        "mongodb+srv://rashmi:rashmi@cluster0.vso3ogx.mongodb.net/test?retryWrites=true&w=majority"
    );
   
};