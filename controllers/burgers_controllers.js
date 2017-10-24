var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

router.get("/", function(req, res) {
  res.redirect("/burger");
});

router.get("/burger", function(req, res) {
  burger.all(function(data) {
    res.render("index", {data});
  });
});

router.post("/burger/create", function(req, res) {
  burger.create(req.body.burger_name, function(result) {  
    res.redirect("/");
  });
});

router.put("/burger/update", function(req, res) {  
 burger.update(req.body.burger_id, function(result) {
  res.redirect("/");
 });
});

router.post('/burger/delete', function(req, res) {
	 burger.delete(req.body.burger_id, function(result) {
  res.redirect("/");
 });
});

module.exports = router;