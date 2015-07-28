var Dispatcher = require('flux').Dispatcher;
var Contants = require('../Contants/ContantsValue.js');
var dispatcher = new Dispatcher();
var SOURCE = Contants.SOURCE;

dispatcher.handleViewAction = function(action) {
  payload = {
    action: action,
    source: SOURCE.FROM_VIEW
  }
  this.dispatch(payload);
}


dispatcher.handleServerAction = function(action) {
  payload = {
    action: action,
    source: SOURCE.FROM_SERVER
  }
  this.dispatch(payload);  
}

module.exports = dispatcher;