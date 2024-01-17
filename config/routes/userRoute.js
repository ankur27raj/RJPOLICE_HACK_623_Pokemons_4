const express = require('express');
const router = express.Router();
const {newFir} = require("../controllers/UserController");
const {searchByFir} = require("../controllers/SearchController");

router.post("/filefir", newFir);
router.get("/getfir/:EntryNo", searchByFir);

module.exports = router;