const router = require("express").Router()
const personController = require("../controllers/personController")

router.route("/person").post((req, res) => 
personController.create(req, res))

router.route("/person").
get((req, res) => personController.getAll(req, res))

router.route("/person/:id").
get((req, res) => personController.getID(req, res))

router.route("/person/:id").
delete((req, res) => personController.delete(req, res))

router.route("/person/:id").
put((req, res) => personController.update(req,res))

module.exports = router