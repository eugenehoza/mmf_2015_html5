/**
 * Created by Mikalai_Konan on 11/13/2015.
 */
var mongoose = require('mongoose');
var config = require('../config');
mongoose.connect(config.get('mongoose:uri'), config.get('mongoose:options'));

module.exports=mongoose;