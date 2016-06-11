var React = require("react");
var Recipe = require("../components/recipe");
var AddForm = require("./addForm");

var RecipeContainer = React.createClass({
  getInitialState: function() {
    var storage = JSON.parse(localStorage.getItem("recipes")) || [];
    return {
      recipes: storage
    }
  },

  addRecipeToList: function(rec) {
    console.log("RecipeContainer: ", this.state.recipes);
    this.state.recipes.push(rec);
    this.setState({
      recipes: this.state.recipes
    });
    localStorage.setItem("recipes", JSON.stringify(this.state.recipes));
  },

  render: function() {
    return (
      <div className="container row">
        <div className="col-md-6">
          <Recipe recipeList={this.state.recipes} />
        </div>
        <div className="col-md-6">
          <AddForm addRecipe={this.addRecipeToList} />
        </div>
      </div>
    )
  }
});

module.exports = RecipeContainer;
