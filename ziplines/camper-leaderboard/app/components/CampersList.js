var React = require('react');
var PropTypes = React.PropTypes;

function CampersList(props) {
  var count = 1;
  return (
    <tbody>
      {props.campers.map(function(camper, id) {
        return <tr key={id}>
          <td>
            {count++}
          </td>
          <td>
            <span className="left-align">
              <img src={camper.img} />
              {camper.username}
            </span>
          </td>
          <td>
            {camper.alltime}
          </td>
          <td>
            {camper.recent}
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
