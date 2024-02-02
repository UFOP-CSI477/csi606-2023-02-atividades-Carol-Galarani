const router = require("express").Router()
const donationController = require("../controllers/donationController")

router.route("/donation").post((req, res) => 
donationController.create(req, res))


router.route("/donation").
get((req, res) => donationController.getAll(req, res))

router.route("/donation/:id").
get((req, res) => donationController.getID(req, res))

router.route("/donation/:id").
delete((req, res) => donationController.delete(req, res))

router.route("/donation/:id").
put((req, res) => donationController.update(req,res))

module.exports = router