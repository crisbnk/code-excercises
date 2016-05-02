var axios = require("axios");

function getCampersInfo() {
  return axios.get("http://fcctop100.herokuapp.com/api/fccusers/top/recent");
}

var helpers = {
  campersInfo: function() {
    var campersList = getCampersInfo();
    return campersList;
  }
};

module.exports = helpers;
