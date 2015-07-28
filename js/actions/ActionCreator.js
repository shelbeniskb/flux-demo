var Dispatcher = require('../dispatcher/Dispatcher.js');
var Constants = require('../contants/ContantsValue.js');
var ACTION_TYPE = Constants.ACTION_TYPE;

var ActionCreator = {
	receiveProduct: function(data) {
		Dispatcher.handleServerAction({
			product: data,
			type: ACTION_TYPE.RECEIVE
		});
	},
	addToCart: function(item) {
		Dispatcher.handleViewAction({
			item: item,
			type: ACTION_TYPE.ADD_TO_CART
		});
	}
}

module.exports = ActionCreator;
