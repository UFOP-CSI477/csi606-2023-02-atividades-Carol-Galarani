const router = require("express").Router()
const bloodtypeController = require("../controllers/bloodtypeController")

router.route("/bloodtype").post((req, res) => 
bloodtypeController.create(req, res))

router.route("/bloodtype").
get((req, res) => bloodtypeController.getAll(req, res))

router.route("/bloodtype/:id").
get((req, res) => bloodtypeController.getID(req, res))

router.route("/bloodtype/:id").
delete((req, res) => bloodtypeController.delete(req, res))

router.route("/bloodtype/:id").
put((req, res) => bloodtypeController.update(req,res))

module.exports = router