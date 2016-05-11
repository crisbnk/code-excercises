var React = require("react");
var ReactDOM = require("react-dom");
var $ = require("jquery");
var CampersList = require("../components/CampersList");
require('../style/style.scss');

var CampersListContainer = React.createClass({
  getInitialState: function() {
    return {
      campers: []
    }
  },

  componentDidMount: function() {
    $.get("http://fcctop100.herokuapp.com/api/fccusers/top/recent", function(data) {
      if(this.isMounted()) {
        this.setState({
          campers: data,
          alltime: true,
          recent: true
        })
      }
    }.bind(this));
  },

  orderByAllTime: function() {
    var camperSortByAllTime = this.state.campers.slice(0);
    camperSortByAllTime.sort(function(a,b) {
      if(this.state.alltime) {
        this.setState({
          alltime: false
        });
        return a.alltime - b.alltime;
      } else {
        this.setState({
          alltime: true
        });
        return b.alltime - a.alltime;
      }
    }.bind(this));
    this.setState({
      campers: camperSortByAllTime,
    });
  },

  orderByRecent: function() {
    var camperSortByRecent = this.state.campers.slice(0);
    camperSortByRecent.sort(function(a,b) {
      if(this.state.recent) {
        this.setState({
          recent: false
        });
        return a.recent - b.recent;
      } else {
        this.setState({
          recent: true
        });
        return b.recent - a.recent;
      }
    }.bind(this));
    this.setState({
      campers: camperSortByRecent
    });
  },

  render: function() {
    return (
      <div className="container">
        <div className="col-md-12 text-center">
          <table>
            <thead>
              <tr className="not-hover">
                <th>Name</th>
                <th onClick={this.orderByAllTime}>Alltime</th>
                <th onClick={this.orderByRecent}>Recent</th>
                <th>Image</th>
              </tr>
            </thead>
            <CampersList campers={this.state.campers} />
          </table>
        </div>
      </div>
    )
  }
});

module.exports = CampersListContainer;
