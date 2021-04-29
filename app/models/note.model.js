const mongoose = require('mongoose'); //adapted from https://www.callicoder.com/node-js-express-mongodb-restful-crud-api-tutorial/ 

const MemberSchema = mongoose.Schema({
    name: {
        desc: "The member's name",
        trim: true,
        type: String,
        required: true
    },
    birthday:{
        desc:"The member's birthday",
        trim:true,
        type: Date,
        required: true,
    },
    email:{
        desc: "The member's email",
        trim:true,
        type: String,
        required: true
    },
    password:{
        desc:"The member's password",
        trim:true,
        type: String,
        required: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Member', MemberSchema);
