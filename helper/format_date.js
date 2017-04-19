var moment = require('moment');

module.exports = {
  formatDate : function(date){
    return moment(date).format("D MMM YYYY");
  }
}