var React = require('react');
var RecipeModalBox = require("../components/recipeModalBox");
var Modal = require('react-bootstrap').Modal;
var PropTypes = React.PropTypes;

function Recipe(props) {
  return (
    <div className="recipesList">
      {props.recipeList.map(function(recipe, id) {
        var modalRecipeShow = false;
        console.log("ricetta", recipe);

        function editRecipe(id) {
          props.editRecipe(id);
        }

        function deleteRecipe() {
          props.deleteRecipe(id);
        }

        function saveTheIngredient(id, ingredient) {
          props.saveTheIngredient(id, ingredient);
        }

        function cancelIngredient(ingrId, id) {
          props.cancelIngredient(ingrId, id);
        }

        function showRecipeModal() {
          props.showRecipeModal(id);
        }

        function hideRecipeModal(id) {
          props.hideRecipeModal(id);
        }

        return (
          <div key={id} className="singleRecipe" onClick={showRecipeModal}>
            <div>
              <span className="recipeTitle">
                {recipe.title}
              </span>
              <span onClick={deleteRecipe}><i className="fa fa-trash-o"></i></span>
            </div>
            <RecipeModalBox id={id} recipe={recipe} hideRecipeModal={hideRecipeModal} editRecipe={editRecipe} cancelIngredient={cancelIngredient} saveTheIngredient={saveTheIngredient} />
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
