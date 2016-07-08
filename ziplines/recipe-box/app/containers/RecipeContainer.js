var React = require("react");
var Recipe = require("../components/recipe");
var AddForm = require("./addForm");
require('../style/style.scss');

var RecipeContainer = React.createClass({
  getInitialState: function() {
    var storage = JSON.parse(localStorage.getItem("recipes")) || [];
    return {
      recipes: storage
    }
  },

  addRecipeToList: function(rec) {
    this.state.recipes.push(rec);
    this.setState({
      recipes: this.state.recipes
    });
    localStorage.setItem("recipes", JSON.stringify(this.state.recipes));
  },

  editRecipe: function(id) {
    this.state.recipes[id].editRecipe = !(this.state.recipes[id].editRecipe);
    this.setState({
      recipes: this.state.recipes
    });
    localStorage.setItem("recipes", JSON.stringify(this.state.recipes));
  },

  deleteRecipe: function(id) {
    this.state.recipes.splice(id, 1);
    this.setState({
      recipes: this.state.recipes
    });
    localStorage.setItem("recipes", JSON.stringify(this.state.recipes));
  },

  saveTheIngredient: function(id, ingredient) {
    this.state.recipes[id].ingredients.push(ingredient);
    this.setState({
      recipes: this.state.recipes
    });
    localStorage.setItem("recipes", JSON.stringify(this.state.recipes));
  },

  cancelIngredient: function(ingrId, recId) {
    this.state.recipes[recId].ingredients.splice(ingrId, 1);
    this.setState({
      recipes: this.state.recipes
    });
    localStorage.setItem("recipes", JSON.stringify(this.state.recipes));
  },

  render: function() {
    return (
      <div className="container">
        <h1 className="title">Recipe-Box</h1>
        <div className="recipesList">
          <div className="addForm">
            <AddForm addRecipe={this.addRecipeToList} />
          </div>
          <div className="addForm">
            <Recipe recipeList={this.state.recipes} editRecipe={this.editRecipe} deleteRecipe={this.deleteRecipe} saveTheIngredient={this.saveTheIngredient} cancelIngredient={this.cancelIngredient} />
          </div>
        </div>
      </div>
    )
  }
});

module.exports = RecipeContainer;
