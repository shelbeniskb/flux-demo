var React = require('react/addons'),
	CartStore = require('../stores/CartStore.js'),
	ActionCreator = require('../actions/ActionCreator');

var Cart = React.createClass({
	getInitialState: function() {
		return {
			product: []
		}
	},

	componentDidMount: function() {
		CartStore.addEventListener(this.handleProductChange);
	},

	handleProductChange: function() {
		this.setState({product:CartStore._product});
	},

	render: function() {
		var product = this.state.product,
			self = this,
			style = {
				width: '250px',
				height: '150px',
				border: '1px solid red'
			};
		var result = product.map(function(item) {
				return (
					<div>

					<span>{item.title}</span>
					<span> * </span>
					<span>{item.quantity}</span>
					</div>
				)
		});
		return (
			<div style={style}>
				{result}
			</div>
		)
	}
});

React.render(<Cart/>, document.querySelector('.cart'));


