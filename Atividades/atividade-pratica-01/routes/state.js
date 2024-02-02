const router = require("express").Router()
const stateController = require("../controllers/stateController")

router.route("/state").post((req, res) => 
stateController.create(req, res))

router.route("/state").
get((req, res) => stateController.getAll(req, res))

router.route("/state/:id").
get((req, res) => stateController.getID(req, res))

router.route("/state/:id").
delete((req, res) => stateController.delete(req, res))

router.route("/state/:id").
put((req, res) => stateController.update(req,res))

module.exports = router