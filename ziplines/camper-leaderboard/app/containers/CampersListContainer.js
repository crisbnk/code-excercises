var React = require("react");
var ReactDOM = require("react-dom");
var $ = require("jquery");
var CampersList = require("../components/CampersList");
var helpers = require("../utils/helpers");

var CampersListContainer = React.createClass({
  getInitialState: function() {
    return {
      campers: []
    }
  },

  componentDidMount: function() {
    // var prova = helpers.campersInfo();
    // console.log(prova);
    $.get("http://fcctop100.herokuapp.com/api/fccusers/top/recent", function(data) {
      console.log(this);
      if(this.isMounted()) {
        this.setState({
          campers: data
        })
      }
    }.bind(this));
    // $.ajax({
    //   url: "http://fcctop100.herokuapp.com/api/fccusers/top/recent",
    //   dataType: 'json',
    //   success: function(comments) {
    //     this.setState({items: comments});
    //   }.bind(this)
    // });
  },

  render: function() {
    // var rows = [];
    // this.state.items.forEach(function(item) {
    //   rows.push(item);
    //   console.log(item);
    // });
    // console.log(this.state.items);
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Alltime</th>
            <th>Recent</th>
            <th>Image</th>
          </tr>
        </thead>
        <CampersList campers={this.state.campers} />
      </table>
    )
  }
});

module.exports = CampersListContainer;
