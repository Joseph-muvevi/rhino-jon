const {Admin, validate} = require("../models/admin")
const express = require("express")
const router = express.Router()

// get
router.get('/', async (req, res) => {
    const admins = await Admin.find().sort("-date")
    res.send(admins)
})

// get by id
router.get("/:id", async (req, res) => {
    const admin = await Admin.findById(req.params.id)
    if (!admin) return res.status(404).send("user not exist")
    res.send(admin)
})

// post
router.post("/", async (req, res) => {
    const {error} = validate(req.body)
    if (error) return res.status(400).send(error.details[0].message)

    // cheking if a given admin exists
    const email = await Admin.findOne({email: req.body.email})
    if (email) res.status(400).send("user already exist")

    let admin = new Admin(req.body)
    admin = await admin.save()

    const token = admin.generateAdminToken();
    res
    .header("x-auth-token", token)
    .send(admin);
})

// update
router.put("/:id", async (req, res) => {
    const {error} = validate(req.body)
    if (error) return res.status(400).send(error.details[0].message)

    const admin = await Admin.findByIdAndUpdate(
        req.params.id, {$set : req.body}, {new: true} 
    )

    if (!admin) return res.status(404).send("user with that given ID doesnt exist")
    res.send(admin)
})

// delete
router.delete("/:id", async (req, res) => {
    const admin = await Admin.findByIdAndRemove(req.params.id)
    if (!admin) return res.status(404).send("user with that given ID doesnt exist")
    res.send(admin)
})

module.exports = router