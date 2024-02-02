const router = require("express").Router()
const cityController = require("../controllers/cityController")

router.route("/city").post((req, res) => 
cityController.create(req, res))

router.route("/city").
get((req, res) => cityController.getAll(req, res))

router.route("/city/:id").
get((req, res) => cityController.getID(req, res))

router.route("/city/:id").
delete((req, res) => cityController.delete(req, res))

router.route("/city/:id").
put((req, res) => cityController.update(req,res))

module.exports = router