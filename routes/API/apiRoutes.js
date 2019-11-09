const router = require("express").Router();
// TODO Import controller

// Below routes match with "/api/sites/*"
router.get("/sites", (req, res) => {
  console.log("Hitting Sites");
  console.log("req:", req.body);
  res.send("Sites are here");

  // console.log("res: ", res);
  // Use sites controller to create a new document
});

// Below routes match with "/api/events/*"
router.get("/equipment", function(req, res) {
  console.log("Hitting Equipment");

  console.log("req:", req.body);
  res.send("Equipment is here");
});

// Below routes match with "/api/events/*"
router.get("/events", function(req, res) {
  console.log("Hitting Events");

  console.log("req:", req.body);
  res.send("Events are here");
});

// Below routes match with "/api/events/*"
router.get("/notes", function(req, res) {
  console.log("Hitting Notes");

  console.log("req:", req.body);
  res.send("Notes are here");
});

// Below routes match with "/api/events/*"
router.get("/vendors", function(req, res) {
  console.log("Hitting Vendors");

  console.log("req:", req.body);
  res.send("Vendors are here");
});

module.exports = router;
