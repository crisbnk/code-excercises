var React = require("react");
require('../style/ingredients.scss');

var Ingredients = React.createClass({
  getInitialState: function() {
    return {
      value: ""
    }
  },

  handleChange: function(evt) {
    this.setState({
      value: evt.target.value
    });
  },

  saveTheIngredient: function() {
    this.props.addIngredient(this.state.value);
    this.setState({
      value: ""
    });
  },

  render: function() {
    return (
      <div className="addIngredient">
        <input type="text" className="genericInput" value={this.state.value} placeholder="Add an Ingredient" onChange={this.handleChange}/>
        <a href="" onClick={this.saveTheIngredient}><i className="fa fa-plus"></i></a>
      </div>
    )
  }
});

module.exports = Ingredients;
