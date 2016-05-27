var React = require("react");
var Title = require("../components/title");
var IngredientsContainer = require("./ingredientsContainer");

var AddForm = React.createClass({

  saveTheRecipe: function(rec) {
    this.props.addRecipe(rec);
  },

  render: function() {
    return (
      <div className="container">
        <Title addRecipe={this.saveTheRecipe} />
        <IngredientsContainer />
      </div>
    )
  }
});

module.exports = AddForm;
