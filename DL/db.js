//מטרת הקובץ התחברות לשרת מקומי או מרוחק

const mongoose = require('mongoose') //יבוא
const MONGO_URL = process.env.MONGO_URL

const connect = async () => {
    try {
        await mongoose.connect(MONGO_URL, { useNewUrlParser: true },
            (err) => {
                if (err) {
                    console.log("failed to connect");
                    throw err
                }

                console.log('conection success, state:', mongoose.connection.readyState);

            })
    }
    catch (err) {
        console.log('error!', err)

    }

}

module.exports = { connect }