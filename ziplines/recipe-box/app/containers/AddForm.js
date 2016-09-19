var React = require("react");
var Ingredients = require("./ingredients");
var IngredientsList = require("../components/ingredientsList");
var Modal = require('react-bootstrap').Modal;

var AddForm = React.createClass({
  getInitialState: function() {
    var title = "";
    var descr = "";
    if(this.props.recipe !== undefined) {
      title = this.props.recipe.title;
      descr = this.props.recipe.description;
    }
    return {
      title: title,
      ingredients: [],
      description: descr,
      editRecipe: false,
      showIngredients: false,
      showModal: false,
      addFormCompleted: false
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
      description: this.state.description,
      addFormCompleted: true
    });
    this.props.addRecipe(this.state);
    this.setState({
      title: "",
      ingredients: [],
      description: "",
      addFormCompleted: false
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

  editRecipe: function() {
    this.props.editRecipe();
  },

  saveModifiedRecipe: function() {
    this.props.saveModifiedRecipe(this.state.title, this.state.description);
    this.props.editRecipe();
    this.setState({
      title: "",
      description: ""
    });
  },

  renderModal: function() {
    if(this.props.recipe !== undefined) {
      return (
        <div>
          <Modal.Header closeButton>
            {this.props.recipe.editRecipe ? <div className="addFormTitle"><input type="text" value={this.state.title} onChange={this.handleTitleChange}/></div> : <Modal.Title>{this.props.recipe.title}</Modal.Title>}
          </Modal.Header>
          <Modal.Body>
            {!(this.props.recipe.editRecipe) ? <span></span> : <div><input id="ingredient" type="text" placeholder="Add a Recipe" /><button type="button" onClick={this.saveTheIngredient}><i className="fa fa-plus"></i></button></div>}
            <IngredientsList ingredientsList={this.props.recipe.ingredients} isRecipeSaved={true} editRecipe={this.props.recipe.editRecipe} cancelIngredient={this.cancelIngredient} />
            <hr></hr>
            {this.props.recipe.editRecipe ? <textarea id="textarea" value={this.state.description} onChange={this.handleTextAreaChange}></textarea> : <div className="description">{this.props.recipe.description || ""}</div>}
          </Modal.Body>
          <Modal.Footer>
            {!(this.props.recipe.editRecipe) ? <span onClick={this.editRecipe}>Edit <i className="fa fa-edit"></i></span> : <span onClick={this.saveModifiedRecipe}>Save <i className="fa fa-edit"></i></span>}
          </Modal.Footer>
        </div>
      )
    } else {
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
  },

  render: function() {
    return (
      <div>
        {this.renderModal()}
      </div>
    )
  }
});

module.exports = AddForm;
