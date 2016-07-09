var React = require('react');
var IngredientsList = require("../components/ingredientsList");
var PropTypes = React.PropTypes;

function Recipe(props) {
  return (
    <div>
      {props.recipeList.map(function(recipe, id) {
        console.log("ricetta", recipe);
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

        function toggleIngredients() {
          props.toggleIngredients(id);
        }

        return (
          <div key={id} className="singleRecipe">
            <div>
              <span className="recipeTitle" onClick={toggleIngredients}>
                {recipe.title}
              </span>
              {!(props.recipeList[id].editRecipe) ? <span></span> : <div><input id="ingredient" type="text" placeholder="Add a Recipe" /><button type="button" onClick={saveTheIngredient}><i className="fa fa-plus"></i></button></div>}
              <span onClick={editRecipe}><i className="fa fa-edit"></i></span>
              <span onClick={deleteRecipe}><i className="fa fa-trash-o"></i></span>
            </div>
            {recipe.showIngredients ? <IngredientsList ingredientsList={recipe.ingredients} isRecipeSaved={true} editRecipe={recipe.editRecipe} cancelIngredient={cancelIngredient} /> : null}
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
