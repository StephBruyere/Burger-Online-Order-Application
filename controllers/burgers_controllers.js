var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

router.get("/", function(req, res) {
  res.redirect("/burger");
});

router.get("/burger", function(req, res) {
  burger.all(function(data) {
    res.render("index", {data});
    console.log(data);
  });
});

router.post("/burger/create", function(req, res) {
  burger.create(req.body.burger_name, function(result) {
    console.log(result);  
    res.redirect("/");
  });
});

router.put("/burger/update", function(req, res) {  
 burger.update(req.body.burger_id, function(result) {
  console.log(result);
  res.redirect("/");
 });
  {
    if (result.changedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  }
});

module.exports = router;