var React = require('react');
var IngredientsList = require("../components/ingredientsList");
var Description = require("../components/description");
var Modal = require('react-bootstrap').Modal;
var PropTypes = React.PropTypes;

function RecipeModalBox(props) {

  function saveTheIngredient() {
    var ingredient = document.getElementById('ingredient').value;
    props.saveTheIngredient(props.id, ingredient);
    document.getElementById('ingredient').value = "";
  }

  function hideRecipeModal() {
    props.hideRecipeModal(props.id);
  }

  function editRecipe() {
    props.editRecipe(props.id);
  }

  function cancelIngredient(ingrId) {
    props.cancelIngredient(ingrId, props.id);
  }

  return (
    <div className="recipesList">
      <Modal show={props.recipe.showModal} onHide={hideRecipeModal} bsSize="large" dialogClassName="modalStyle" aria-labelledby="contained-modal-title-lg">
        <Modal.Header closeButton>
          <Modal.Title>{props.recipe.title}</Modal.Title>
            <span onClick={editRecipe}><i className="fa fa-edit"></i></span>
        </Modal.Header>
        <Modal.Body>
          {!(props.recipe.editRecipe) ? <span></span> : <div><input id="ingredient" type="text" placeholder="Add a Recipe" /><button type="button" onClick={saveTheIngredient}><i className="fa fa-plus"></i></button></div>}
          <IngredientsList ingredientsList={props.recipe.ingredients} isRecipeSaved={true} editRecipe={props.recipe.editRecipe} cancelIngredient={cancelIngredient} />
          <hr></hr>
          <Description description={props.recipe.description} />
        </Modal.Body>
        <Modal.Footer>
          <button onClick={hideRecipeModal}>Close</button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

RecipeModalBox.propTypes = {
  recipeList: PropTypes.array
}

module.exports = RecipeModalBox;
