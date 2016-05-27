var React = require("react");
var Ingredients = require("../components/ingredients");
var IngredientsList = require("../components/ingredientsList");

var IngredientsContainer = React.createClass({
  getInitialState: function() {
    return {
      ingredients: []
    }
  },

  addIngredientToList: function(ing) {
    console.log(ing);
    this.state.ingredients.push(ing);
    console.log(this.state.ingredients);
    this.setState({
      ingredients: this.state.ingredients
    });
  },

  render: function() {
    return (
      <div className="container row">
        <div className="col-md-6">
          <IngredientsList ingredientsList={this.state.ingredients} />
        </div>
        <div className="col-md-6">
          <Ingredients addIngredient={this.addIngredientToList} />
        </div>
      </div>
    )
  }
});

module.exports = IngredientsContainer;
