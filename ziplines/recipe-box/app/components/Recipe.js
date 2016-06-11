var React = require('react');
var IngredientsList = require("../components/ingredientsList");
var PropTypes = React.PropTypes;

function Recipe(props) {
  return (
    <div>
      {props.recipeList.map(function(recipe, id) {
        return (
          <div key={id}>
            <div>{recipe.title}</div>
            <IngredientsList ingredientsList={recipe.ingredients} isRecipeSaved={true} />
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
