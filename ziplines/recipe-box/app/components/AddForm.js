var React = require("react");
var ReactDOM = require("react-dom");
var $ = require("jquery");

var AddForm = React.createClass({
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

  saveTheRecipe: function() {
    this.props.addRecipe(this.state.value);
  },

  render: function() {
    return (
      <div className="container">
        <div className="row">
          <button type="button" onClick={this.saveTheRecipe}>Add</button>
          <button type="button">Cancel</button>
        </div>
        <div className="row">
          <input type="text" value={this.state.value} placeholder="Add a Recipe" onChange={this.handleChange}/>
        </div>
      </div>
    )
  }
});

module.exports = AddForm;
