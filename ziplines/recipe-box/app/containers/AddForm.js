var React = require("react");
var Ingredients = require("./ingredients");
var IngredientsList = require("../components/ingredientsList");

var AddForm = React.createClass({
  getInitialState: function() {
    return {
      title: "",
      ingredients: [],
      description: "",
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
      ingredients: this.state.ingredientsList,
      description: this.state.description
    });
    this.props.addRecipe(this.state);
    this.setState({
      title: "",
      ingredients: [],
      description: ""
    });
    this.closeModal();
  },

  handleTitleChange: function(evt) {
    this.setState({
      title: evt.target.value
    });
  },

  handleTextAreaChange: function(evt) {
  this.setState({
    description: evt.target.value
  });
},

  cancelIngredient: function(index) {
    this.state.ingredients.splice(index, 1)
    this.setState({
      ingredients: this.state.ingredients
    });
  },

  closeModal: function() {
    this.props.closeModal();
  },

  render: function() {
    return (
      <div>
        <div className="addFormTitle">
          <input type="text" value={this.state.title} placeholder="Add a Recipe" onChange={this.handleTitleChange}/>
        </div>
        <hr></hr>
        <Ingredients addIngredient={this.addIngredientToList} />
        <IngredientsList ingredientsList={this.state.ingredients} cancelIngredient={this.cancelIngredient} isRecipeSaved={false} />
        <hr></hr>
        <textarea id="textarea" value={this.state.description} onChange={this.handleTextAreaChange}></textarea>
        <hr></hr>
        <button onClick={this.saveTheRecipe}>Save</button>
        <button onClick={this.closeModal}>Cancel</button>
      </div>
    )
  }
});

module.exports = AddForm;
