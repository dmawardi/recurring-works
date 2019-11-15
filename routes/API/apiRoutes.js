const router = require("express").Router();
// TODO Import controller
const Site = require("../../controller/site");
const Equipment = require("../../controller/equipment");
const Event = require("../../controller/event");
const Note = require("../../controller/note");
const Vendor = require("../../controller/vendor");

// Below routes match with "/api/sites/*"
// Find all
router.get("/sites", (req, res) => {
  console.log("Hitting Sites");
  console.log("req:", req.body);
  console.log("user: ", req);
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
  console.log("Hitting Equipment! User ID: " + req.user);

  // Query Equipment table
  Equipment.findAll()
    .then(data => {
      // Init result array for equipment
      let equipResultReturn = [];

      // Iterate through equipment data to prepare for appending
      for (let i = 0; i < data.length; i++) {
        let currentResult = {
          category_id: data[i].category_id,
          custom_serial_name_1: data[i].custom_serial_name_1,
          custom_serial_1: data[i].custom_serial_1,
          custom_serial_name_2: data[i].custom_serial_name_2,
          custom_serial_2: data[i].custom_serial_2,
          equipment_description: data[i].equipment_description,
          equipment_id: data[i].equipment_id,
          equipment_name: data[i].equipment_name,
          lastMaintenanceDate: data[i].lastMaintenanceDate,
          link_to_data_folder: data[i].link_to_data_folder,
          link_to_warranty: data[i].link_to_warranty,
          yearlyFrequency: data[i].yearlyFrequency
        };
        // Push element to result
        equipResultReturn.push(currentResult);
      }

      // Query Events
      Event.findAll().then(data => {
        console.log(data);
        // preprocess
        let eventData = [];
        for (let i = 0; i < data.length; i++) {
          let currentData = data[i].dataValues;

          eventData.push(currentData);
        }

        // Form final result
        const finalResult = {
          equipment: equipResultReturn,
          events: eventData
        };
        res.json(finalResult);
      });
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
  Event.findAllIncluding()
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

// Event_notes routes
// Below routes match with "/api/notes/*"
router.get("/notes", function(req, res) {
  console.log("Hitting Notes");

  console.log("req:", req.body);
  Note.findAll()
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.sendStatus(500);
    });
});

// find by id
router.get("/notes/:idToFind", (req, res) => {
  console.log("Hitting notes");
  const idToFind = req.params.idToFind;
  console.log("req to find:", idToFind);
  Note.findByID(idToFind)
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.sendStatus(500);
    });
});

// Create notes
router.post("/notes", (req, res) => {
  console.log("Hitting Create note");
  console.log("req:", req.body);
  //   res.json(req.body);
  Note.create(req.body)
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

// Update notes
router.put("/notes/:idToUpdate", (req, res) => {
  console.log("Hitting update note");
  const idToUpdate = req.params.idToUpdate;
  console.log("ID to update:", idToUpdate);

  console.log("req:", req.body);
  Note.update(idToUpdate, req.body)
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

// Delete notes
router.delete("/notes/:idToDelete", (req, res) => {
  console.log("Hitting delete equipment");
  const idToDelete = req.params.idToDelete;
  console.log("ID to delete:", idToDelete);

  Note.delete(idToDelete)
    .then(data => {
      console.log(data);
      res.sendStatus(200);
    })
    .catch(err => {
      // res.send("Failed to Create");
      res.sendStatus(500);
    });
});

// Vendor Routes
// Below routes match with "/api/vendors/*"
router.get("/vendors", function(req, res) {
  console.log("Hitting Vendors");

  console.log("req:", req.body);
  Vendor.findAll()
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.sendStatus(500);
    });
});

// find by id
router.get("/vendors/:idToFind", (req, res) => {
  console.log("Hitting vendors");
  const idToFind = req.params.idToFind;
  console.log("req to find:", idToFind);
  Vendor.findByID(idToFind)
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.sendStatus(500);
    });
});

// Create vendors
router.post("/vendors", (req, res) => {
  console.log("Hitting Create vendor");
  console.log("req:", req.body);
  //   res.json(req.body);
  Vendor.create(req.body)
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

// Update vendors
router.put("/vendors/:idToUpdate", (req, res) => {
  console.log("Hitting update vendor");
  const idToUpdate = req.params.idToUpdate;
  console.log("ID to update:", idToUpdate);

  console.log("req:", req.body);
  Vendor.update(idToUpdate, req.body)
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

// Delete vendors
router.delete("/vendors/:idToDelete", (req, res) => {
  console.log("Hitting delete vendor");
  const idToDelete = req.params.idToDelete;
  console.log("ID to delete:", idToDelete);

  Vendor.delete(idToDelete)
    .then(data => {
      console.log(data);
      res.sendStatus(200);
    })
    .catch(err => {
      // res.send("Failed to Create");
      res.sendStatus(500);
    });
});

module.exports = router;
