var orm = require("../config/orm.js");

var burger = {
  table: 'burger',
  
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
   orm.delete(this.table, condition, function(res) {
      cb(res);
  },
}

module.exports = burger;

