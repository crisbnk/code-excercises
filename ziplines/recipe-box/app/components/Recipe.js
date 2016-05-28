var React = require('react');
var PropTypes = React.PropTypes;

function Recipe(props) {
  return (
    <div>
      {props.recipeList.map(function(recipe, id) {
        return <div key={id}>{recipe.title}</div>
      })}
    </div>
  )
}

Recipe.propTypes = {
  campers: PropTypes.array
}

module.exports = Recipe;
