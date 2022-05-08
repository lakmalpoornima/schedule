const mongoose = require('mongoose');
const Schema = mongoose.Schema;



let Shed_Menu = new Schema({
    Date: {
        type: String
    },
    Train_Name: {
        type: String
    },
    From: {
        type: String
    },
    Depature_Time: {
        type: String
    },
    To: {
        type: String
    },
    Arrive_Time: {
        type: String
    },
    Stations: {
        type: String
    }
});

module.exports = mongoose.model('Shed_Menu', Shed_Menu);
