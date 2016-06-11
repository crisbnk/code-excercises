var React = require("react");
var Ingredients = require("./ingredients");
var IngredientsList = require("../components/ingredientsList");

var AddForm = React.createClass({
  getInitialState: function() {
    return {
      title: "",
      ingredients: []
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
    this.setState({
      ingredients: this.state.ingredients
    });
  },

  render: function() {
    return (
      <div className="container">
        <div className="col-md-12">
          <div className="row">
            <button type="button" onClick={this.saveTheRecipe}>Add</button>
            <button type="button">Cancel</button>
          </div>
          <div className="row">
            <input type="text" value={this.state.title} placeholder="Add a Recipe" onChange={this.handleChange}/>
          </div>
        </div>
        <div className="col-md-12">
          <Ingredients addIngredient={this.addIngredientToList} />
        </div>
        <div className="col-md-12">
          <IngredientsList ingredientsList={this.state.ingredients} cancelIngredient={this.cancelIngredient} isRecipeSaved={false} />
        </div>
      </div>
    )
  }
});

module.exports = AddForm;
