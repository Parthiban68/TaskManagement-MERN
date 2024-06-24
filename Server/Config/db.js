const mongoose = require('mongoose');

const db = () => {

    mongoose.connect(process.env.db_url)
    
    try {
        mongoose.connection.on('connected', () => {
            console.log("server conneted");
        })
    }
    catch (error) {
        console.log(error);
    }

}

module.exports = db