const mongoose = require('mongoose');
const Schema = mongoose.Schema;



let Dis_menu = new Schema({
    
    Station_Name: {
        type: String
    },
    Distance: {
        type: String
    }
    
   
});

module.exports = mongoose.model('Dis_menu', Dis_menu);