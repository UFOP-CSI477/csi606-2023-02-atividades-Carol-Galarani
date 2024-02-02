const router = require("express").Router()
const locationController = require("../controllers/locationController")

router.route("/location").post((req, res) => 
locationController.create(req, res))

router.route("/location").
get((req, res) => locationController.getAll(req, res))

router.route("/location/:id").
get((req, res) => locationController.getID(req, res))

router.route("/location/:id").
delete((req, res) => locationController.delete(req, res))

router.route("/location/:id").
put((req, res) => locationController.update(req,res))

module.exports = router