var React = require('react');
var PropTypes = React.PropTypes;

function Description(props) {
  console.log("props", props);
  if(props.description !== undefined) {
    return (
      <div className="description">
        {props.description}
      </div>
    )
  } else {
    return (
      <div></div>
    )
  }
}

Description.propTypes = {
  description: PropTypes.string
}

module.exports = Description;
