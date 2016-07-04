var React = require('react');
var IngredientsList = require("../components/ingredientsList");
var PropTypes = React.PropTypes;

function Recipe(props) {
  return (
    <div>
      {props.recipeList.map(function(recipe, id) {
        function editRecipe() {
          props.editRecipe(id);
        }

        function deleteRecipe() {
          props.deleteRecipe(id);
        }

        function saveTheIngredient() {
          var ingredient = document.getElementById('ingredient').value;
          props.saveTheIngredient(id, ingredient)
        }

        function cancelIngredient(ingrId) {
          props.cancelIngredient(ingrId, id);
        }

        return (
          <div key={id}>
            <div>
              {recipe.title}
              {!(props.recipeList[id].editRecipe) ? <span></span> : <div><input id="ingredient" type="text" placeholder="Add a Recipe" /><button type="button" onClick={saveTheIngredient}>Add Ingredient</button></div>}
              <span onClick={editRecipe}><i className="fa fa-edit"></i></span>
              <span onClick={deleteRecipe}><i className="fa fa-trash-o"></i></span>
            </div>
            <IngredientsList ingredientsList={recipe.ingredients} isRecipeSaved={true} editRecipe={recipe.editRecipe} cancelIngredient={cancelIngredient} />
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
