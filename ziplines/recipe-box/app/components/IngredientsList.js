var React = require('react');
var IngredientName = require("./ingredientName");
var PropTypes = React.PropTypes;

function IngredientsList(props) {
  if(props.ingredientsList !== undefined) {
    return (
      <div>
        {props.ingredientsList.map(function(ingredient, id) {
          function cancelIngredient() {
            props.cancelIngredient(id);
          }

          return (
            <div key={id}>
              <IngredientName index={id} ingredient={ingredient} cancelIngredient={cancelIngredient} isRecipeSaved={props.isRecipeSaved} />
            </div>
          )
        })}
      </div>
    )
  } else {
    return (
      <div></div>
    )
  }
}

IngredientsList.propTypes = {
  ingredientsList: PropTypes.array
}

module.exports = IngredientsList;
