var React = require("react");

var Title = React.createClass({
  getInitialState: function() {
    return {
      value: {
        title: ""
      }
    }
  },

  handleChange: function(evt) {
    this.setState({
      value: {
        title: evt.target.value
      }
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
          <input type="text" value={this.state.value.title} placeholder="Add a Recipe" onChange={this.handleChange}/>
        </div>
      </div>
    )
  }
});

module.exports = Title;
