var mongoose = require('mongoose');

var schema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        minlength:2,
    },
    username:{
        type: String,
        required: true,
        minlength:2,
        unique:true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    website:{
        type: String,
        required:true,
    },
    phone: String,
});

var user = new mongoose.model('User',schema);
module.exports=user;