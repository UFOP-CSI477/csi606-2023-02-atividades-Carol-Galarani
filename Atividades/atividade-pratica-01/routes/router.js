const router = require("express").Router()

const donationRouter = require("./donation")
router.use("/", donationRouter)

const bloodtypeRouter = require("./bloodtype")
router.use("/", bloodtypeRouter)

const stateRouter = require("./state")
router.use("/", stateRouter)

const locationRouter = require("./location")
router.use("/", locationRouter)

const personRouter = require("./person")
router.use("/", personRouter)

const cityRouter = require("./city")
router.use("/", cityRouter)

module.exports = router
