const router = require("express").Router();
// TODO Import controller
const Site = require("../../controller/site");
const Equipment = require("../../controller/equipment");
const Event = require("../../controller/event");

// Below routes match with "/api/sites/*"
// Find all
router.get("/sites", (req, res) => {
  console.log("Hitting Sites");
  console.log("req:", req.body);
  Site.findAll()
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.sendStatus(500);
    });
});

// Find by ID
router.get("/sites/:idToFind", (req, res) => {
  console.log("Hitting Sites");
  const idToFind = req.params.idToFind;
  console.log("req to find:", idToFind);
  Site.findByID(idToFind)
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.sendStatus(500);
    });
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

// Delete site
router.delete("/sites/:idToDelete", (req, res) => {
  console.log("Hitting delete Sites");
  const idToDelete = req.params.idToDelete;
  console.log("ID to delete:", idToDelete);

  Site.delete(idToDelete)
    .then(data => {
      console.log(data);
      res.sendStatus(200);
    })
    .catch(err => {
      // res.send("Failed to Create");
      res.sendStatus(500);
    });
});

// Below routes match with "/api/equipment/*"
// Return all
router.get("/equipment", function(req, res) {
  console.log("Hitting Equipment");
  Equipment.findAll()
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.sendStatus(500);
    });
});

// find by id
router.get("/equipment/:idToFind", (req, res) => {
  console.log("Hitting Sites");
  const idToFind = req.params.idToFind;
  console.log("req to find:", idToFind);
  Equipment.findByID(idToFind)
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.sendStatus(500);
    });
});

// Create equipment
router.post("/equipment", (req, res) => {
  console.log("Hitting Create equipment");
  console.log("req:", req.body);
  //   res.json(req.body);
  Equipment.create(req.body)
    .then(data => {
      res.sendStatus(200);
    })
    .catch(err => {
      // res.send("Failed to Create");
      res.sendStatus(500);
    });
});

// Update equipment
router.put("/equipment/:idToUpdate", (req, res) => {
  console.log("Hitting update equipment");
  const idToUpdate = req.params.idToUpdate;
  console.log("ID to update:", idToUpdate);

  console.log("req:", req.body);
  Equipment.update(idToUpdate, req.body)
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

// Delete equipment
router.delete("/equipment/:idToDelete", (req, res) => {
  console.log("Hitting delete equipment");
  const idToDelete = req.params.idToDelete;
  console.log("ID to delete:", idToDelete);

  Equipment.delete(idToDelete)
    .then(data => {
      console.log(data);
      res.sendStatus(200);
    })
    .catch(err => {
      // res.send("Failed to Create");
      res.sendStatus(500);
    });
});

// Below routes match with "/api/events/*"
router.get("/events", function(req, res) {
  console.log("Hitting Events");

  console.log("req:", req.body);
  //   res.send("Events are here");
  Event.findAll()
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.sendStatus(500);
    });
});

// find by id
router.get("/events/:idToFind", (req, res) => {
  console.log("Hitting Sites");
  const idToFind = req.params.idToFind;
  console.log("req to find:", idToFind);
  Event.findByID(idToFind)
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.sendStatus(500);
    });
});

// Create event
router.post("/events", (req, res) => {
  console.log("Hitting Create event");
  console.log("req:", req.body);
  //   res.json(req.body);
  Event.create(req.body)
    .then(data => {
      console.log(data);
      res.sendStatus(200);
    })
    .catch(err => {
      // res.send("Failed to Create");
      console.error(err);
      res.sendStatus(500);
    });
});

// Update equipment
router.put("/events/:idToUpdate", (req, res) => {
  console.log("Hitting update equipment");
  const idToUpdate = req.params.idToUpdate;
  console.log("ID to update:", idToUpdate);

  console.log("req:", req.body);
  Event.update(idToUpdate, req.body)
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

// Delete equipment
router.delete("/events/:idToDelete", (req, res) => {
  console.log("Hitting delete equipment");
  const idToDelete = req.params.idToDelete;
  console.log("ID to delete:", idToDelete);

  Event.delete(idToDelete)
    .then(data => {
      console.log(data);
      res.sendStatus(200);
    })
    .catch(err => {
      // res.send("Failed to Create");
      res.sendStatus(500);
    });
});

// Below routes match with "/api/notes/*"
router.get("/notes", function(req, res) {
  console.log("Hitting Notes");

  console.log("req:", req.body);
  res.send("Notes are here");
});

// Below routes match with "/api/vendors/*"
router.get("/vendors", function(req, res) {
  console.log("Hitting Vendors");

  console.log("req:", req.body);
  res.send("Vendors are here");
});

module.exports = router;
