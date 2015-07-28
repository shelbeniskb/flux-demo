var Product = require('./components/Product.js');
var Cart = require('./components/Cart.js');
var Out = require('./APIjson/out.js');
var ActionCreator = require('./actions/ActionCreator.js');

Out.getData(function(data) {
	ActionCreator.receiveProduct(data);
});