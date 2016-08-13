var React = require('react');
var IngredientsList = require("../components/ingredientsList");
var Description = require("../components/description");
var Modal = require('react-bootstrap').Modal;
var PropTypes = React.PropTypes;

function Recipe(props) {
  return (
    <div className="recipesList">
      {props.recipeList.map(function(recipe, id) {
        var modalRecipeShow = false;
        console.log("ricetta", recipe);

        function editRecipe() {
          props.editRecipe(id);
        }

        function deleteRecipe() {
          props.deleteRecipe(id);
        }

        function saveTheIngredient() {
          var ingredient = document.getElementById('ingredient').value;
          props.saveTheIngredient(id, ingredient);
          document.getElementById('ingredient').value = "";
        }

        function cancelIngredient(ingrId) {
          props.cancelIngredient(ingrId, id);
        }

        function toggleIngredients() {
          props.toggleIngredients(id);
        }

        function showRecipeModal() {
          props.showRecipeModal(id);
        }

        function hideRecipeModal() {
          props.hideRecipeModal(id);
        }

        function addIngredientToList() {
          props.addIngredientToList(id);
        }

        return (
          <div key={id} className="singleRecipe" onClick={showRecipeModal}>
            <div>
              <span className="recipeTitle">
                {recipe.title}
              </span>
              {/* {!(props.recipeList[id].editRecipe) ? <span></span> : <div><input id="ingredient" type="text" placeholder="Add a Recipe" /><button type="button" onClick={saveTheIngredient}><i className="fa fa-plus"></i></button></div>} */}
              {/* <span onClick={editRecipe}><i className="fa fa-edit"></i></span> */}
              <span onClick={deleteRecipe}><i className="fa fa-trash-o"></i></span>
            </div>
            {/*{recipe.showIngredients ? <IngredientsList ingredientsList={recipe.ingredients} isRecipeSaved={true} editRecipe={recipe.editRecipe} cancelIngredient={cancelIngredient} /> : null}
            {recipe.showIngredients ? <Description description={recipe.description} /> : null}*/}
            {/* {recipe.showIngredients ? <div>
              <IngredientsList ingredientsList={recipe.ingredients} isRecipeSaved={true} editRecipe={recipe.editRecipe} cancelIngredient={cancelIngredient} />
              <hr></hr>
              <Description description={recipe.description} />
            </div> : null} */}
            <Modal show={recipe.showModal} onHide={hideRecipeModal} bsSize="large" dialogClassName="modalStyle" aria-labelledby="contained-modal-title-lg">
              <Modal.Header closeButton>
                <Modal.Title>{recipe.title}</Modal.Title>
                  <span onClick={editRecipe}><i className="fa fa-edit"></i></span>
              </Modal.Header>
              <Modal.Body>
                {!(props.recipeList[id].editRecipe) ? <span></span> : <div><input id="ingredient" type="text" placeholder="Add a Recipe" /><button type="button" onClick={saveTheIngredient}><i className="fa fa-plus"></i></button></div>}
                <IngredientsList ingredientsList={recipe.ingredients} isRecipeSaved={true} editRecipe={recipe.editRecipe} cancelIngredient={cancelIngredient} />
                <hr></hr>
                <Description description={recipe.description} />
              </Modal.Body>
              <Modal.Footer>
                <button onClick={hideRecipeModal}>Close</button>
              </Modal.Footer>
            </Modal>
          </div>
        )
      })}
    </div>
  )
}

Recipe.propTypes = {
  recipeList: PropTypes.array
}

module.exports = Recipe;
