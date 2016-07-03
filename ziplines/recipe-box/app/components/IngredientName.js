var React = require('react');
var PropTypes = React.PropTypes;

function IngredientName(props) {
  return (
    <div>
      {props.ingredient}
      {props.isRecipeSaved ? <div></div> : <span onClick={props.cancelIngredient}>X</span>}
    </div>
  )
}

IngredientName.propTypes = {
  campers: PropTypes.array
}

module.exports = IngredientName;
