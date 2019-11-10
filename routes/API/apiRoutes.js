const router = require("express").Router();
const Site = require("../../controller/site");
// TODO Import controller

// Below routes match with "/api/sites/*"
router.get("/sites", (req, res) => {
  console.log("Hitting Sites");
  console.log("req:", req.body);
  Site.findAll()
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.send("Failed to load");
    });
  // console.log("res: ", res);
  // Use sites controller to create a new document
});

// Create site
router.post("/sites", (req, res) => {
  console.log("Hitting Create Sites");
  console.log("req:", req.body);
  //   res.json(req.body);
  Site.create(req.body)
    .then(data => {
      res.sendStatus(200);
    })
    .catch(err => {
      // res.send("Failed to Create");
      res.sendStatus(500);
    });
});

// Update site
router.put("/sites/:idToUpdate", (req, res) => {
  console.log("Hitting update Sites");
  const idToUpdate = req.params.idToUpdate;
  console.log("ID to update:", idToUpdate);

  console.log("req:", req.body);
  Site.update(idToUpdate, req.body)
    .then(data => {
      console.log("Successfully updated record", data);
      res.sendStatus(200);
    })
    .catch(err => {
      console.error(err);
      //   res.send("Failed to Create");
      res.sendStatus(500);
    });
});

// Create site
router.delete("/sites/:idToDelete", (req, res) => {
  console.log("Hitting Create Sites");
  console.log("ID to delete:", req.params.idToDelete);

  //   res.json(req.body);
  // Site.delete(req.body)
  //   .then(data => {
  //     res.sendStatus(200);
  //   })
  //   .catch(err => {
  //     // res.send("Failed to Create");
  //     res.sendStatus(500);
  //   });
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
