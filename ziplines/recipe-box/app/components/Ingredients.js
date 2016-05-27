var React = require("react");

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
  },

  render: function() {
    return (
      <div className="container">
        <div className="row">
          <button type="button" onClick={this.saveTheIngredient}>Add Ingredient</button>
          <button type="button">Cancel</button>
        </div>
        <div className="row">
          <input type="text" value={this.state.value} placeholder="Add an Ingredient" onChange={this.handleChange}/>
        </div>
      </div>
    )
  }
});

module.exports = Ingredients;
