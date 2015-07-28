var assign = require('object-assign');
var EventEmitter = require('events').EventEmitter;
var Dispatcher = require('../dispatcher/Dispatcher.js');
var Constants = require('../contants/ContantsValue.js');
var _product = [];
var CHANGE_EVENT = 'change';
var ACTION_TYPE = Constants.ACTION_TYPE;
var _product = [];
var _addProduct = function(item) {
	var id = item.id;
	var tmp = id in _product ? _product[id] : assign({}, item);
	tmp.quantity = (tmp.quantity || 0);
	tmp.quantity++;
	_product[id] = tmp;

	CartStore._product = _product;

}
var CartStore = assign({}, EventEmitter.prototype, {
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

CartStore.dispatchToken = Dispatcher.register(function(payload){
	var action = payload.action;
	switch(action.type) {
		case ACTION_TYPE.ADD_TO_CART:
			_addProduct(action.item);
			CartStore.emitChange();
			break;
	}
})


module.exports = CartStore;

