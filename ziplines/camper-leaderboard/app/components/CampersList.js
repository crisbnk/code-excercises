var React = require('react');
var PropTypes = React.PropTypes;

function renderCamper(camper) {
  return <li>{camper.username}</li>;
}

function CampersList(props) {
  return (
    <tbody>
      {props.campers.map(function(camper, id) {
        return <tr key={id}>
          <td>
            {camper.username}
          </td>
          <td>
            {camper.alltime}
          </td>
          <td>
            {camper.recent}
          </td>
          <td>
            {camper.img}
          </td>
        </tr>;
      })}
    </tbody>
  )
}

CampersList.propTypes = {
  campers: PropTypes.array
}

module.exports = CampersList;
