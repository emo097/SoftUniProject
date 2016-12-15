/**
 * Created by Radi on 15-Nov-16.
 */
const mongoose = require('mongoose');

let roleSchema = mongoose.Schema({
    name: {type: String, require: true, unique:true},
    users: [{type: mongoose.Schema.Types.ObjectId, ref:'User'}]
});

const Role = mongoose.model('Role',roleSchema);

module.exports = Role;

module.exports.initialize = () => {
    Role.findOne({name: 'User'}).then(role => {
        if(!role){
            Role.create({name: 'User'});
        }
    });

    Role.findOne({name: 'Admin'}).then(role => {
        if(!role){
            Role.create({name: 'Admin'});
        }
    });
};