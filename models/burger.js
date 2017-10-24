var orm = require("../config/orm.js");

var burger = {
  all: function(cb) {
    orm.all("burger", function(res) {
      cb(res);
    });
  },
  create: function(id, cb) {
    orm.create("burger", [
      "burger_name", "devoured"
    ], [
      name, false
    ], cb);
  },
  update: function(id, cb) {
    var condition = "id=" + id;
    orm.update("burger", {
      devoured: true
    }, condition, cb);
  },
   delete: function(id, cb) {
   var condition = "id=" + id;
    orm.delete("burger", {
      devoured: true
    }, condition, cb);
  },
}

module.exports = burger;

