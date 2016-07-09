var React = require("react");
var Ingredients = require("./ingredients");
var IngredientsList = require("../components/ingredientsList");

var AddForm = React.createClass({
  getInitialState: function() {
    return {
      title: "",
      ingredients: [],
      editRecipe: false,
      showIngredients: false
    }
  },

  addIngredientToList: function(ing) {
    this.state.ingredients.push(ing);
    this.setState({
      ingredients: this.state.ingredients
    });
  },

  saveTheRecipe: function(rec) {
    this.setState({
      title: rec,
      ingredients: this.state.ingredientsList
    });
    this.props.addRecipe(this.state);
    this.setState({
      title: "",
      ingredients: []
    });
  },

  handleChange: function(evt) {
    this.setState({
      title: evt.target.value
    });
  },

  cancelIngredient: function(index) {
    this.state.ingredients.splice(index, 1)
    this.setState({
      ingredients: this.state.ingredients
    });
  },

  render: function() {
    return (
      <div>
        <div className="addFormTitle">
          <input type="text" value={this.state.title} placeholder="Add a Recipe" onChange={this.handleChange}/>
          <button href="" onClick={this.saveTheRecipe}><i className="fa fa-plus"></i></button>
        </div>
        <Ingredients addIngredient={this.addIngredientToList} />
        <IngredientsList ingredientsList={this.state.ingredients} cancelIngredient={this.cancelIngredient} isRecipeSaved={false} />
      </div>
    )
  }
});

module.exports = AddForm;
