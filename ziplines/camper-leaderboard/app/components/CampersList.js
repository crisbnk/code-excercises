var React = require('react');
var PropTypes = React.PropTypes;

function renderCamper(camper) {
  return <li>{camper.username}</li>;
}

function CampersList() {
  console.log(this.props);
  return (
    <ul>
      PRova
    </ul>
  )
}

CampersList.propTypes = {
  campers: PropTypes.array
}

module.exports = CampersList;
