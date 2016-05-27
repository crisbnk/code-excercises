var React = require('react');
var PropTypes = React.PropTypes;

function IngredientsList(props) {
  return (
    <div>
      {props.ingredientsList.map(function(ingredient, id) {
        return <div key={id}>{ingredient}</div>
      })}
    </div>
  )
}

IngredientsList.propTypes = {
  campers: PropTypes.array
}

module.exports = IngredientsList;
