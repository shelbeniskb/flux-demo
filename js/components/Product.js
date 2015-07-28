var React = require('react/addons'),
	ProductStore = require('../stores/ProductStore.js'),
	ActionCreator = require('../actions/ActionCreator');

var CHANGE_EVENT = 'change';

var ProductItem = React.createClass({
	handleClick: function(e) {
		ActionCreator.addToCart(this.props.oneItem);
	},

	render: function() {
		var oneItem = this.props.oneItem;
		if (!oneItem) {
			return;
		}
		return (
			<div>
				<div>{oneItem.title}</div>
				<img src={oneItem.image} className={'item-img'}/>
				<button onClick={this.handleClick} disabled={oneItem.inventory <= 0 ? 'disabled' : ''}>purchase</button>
			</div>
		);
	}
});
var Product = React.createClass({
	getInitialState: function() {
		return {
			product: []
		}
	},

	componentDidMount: function() {
		ProductStore.addEventListener(this.handleProductChange);
	},

	handleProductChange: function() {
		this.setState({product:ProductStore._product});
	},

	render: function() {
		var product = this.state.product,
			self = this,
			result = product.map(function(item, index) {
				return <ProductItem oneItem={item} index={index}/>
			});
		return (
			<div>
			{result}
			</div>
		)
	}
});

React.render(<Product/>, document.querySelector('.hkb'));
