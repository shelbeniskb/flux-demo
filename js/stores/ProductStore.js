var assign = require('object-assign');
var EventEmitter = require('events').EventEmitter;
var Dispatcher = require('../dispatcher/Dispatcher.js');
var Constants = require('../contants/ContantsValue.js');
var _product = [];
var CHANGE_EVENT = 'change';
var ACTION_TYPE = Constants.ACTION_TYPE;

var _decreaseInventory = function(item) {
	item.inventory--;
}
var ProductStore = assign({}, EventEmitter.prototype, {
	getAllProduct: function() {
		return _product;
	},

	emitChange: function() {
		this.emit(CHANGE_EVENT);
	},

	addEventListener: function(fn) {
		this.on(CHANGE_EVENT, fn);
	},

	offEventListener: function(fn) {
		this.removeListener(CHANGE_EVENT, fn);
	}
});

ProductStore.dispatchToken = Dispatcher.register(function(payload) {
	var action = payload.action;
	switch(action.type) {
		case ACTION_TYPE.ADD_TO_CART:
			_decreaseInventory(action.item);
			ProductStore.emitChange();
			break;
		case ACTION_TYPE.SUBMIT:
			break;
		case ACTION_TYPE.RECEIVE:
			ProductStore._product = action.product;
			ProductStore.emitChange();
			break;
	}
})

module.exports = ProductStore;

