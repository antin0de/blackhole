const { requestService } = require("../services/request");

module.exports.adminHandler = function (req, res) {
  res.render("admin.ejs", {
    requests: requestService.listRequests(),
  });
};
