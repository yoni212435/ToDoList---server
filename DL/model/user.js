const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
    },
    
    lastName: {
        type: String
        
    },
    email: {
        type: String,
        unique: true
    },
    
    todos: []
    ,
    Password: {
        type: String,
            },
    craeteDate: {
        type: Date,
        require: false,
        default: Date.now
    },
    isActive: {
        type: Boolean,
        default: true
    },
    



})



const userModel = mongoose.model('user', userSchema)
module.exports = { userModel }

// module.exports.userModel = userModel 