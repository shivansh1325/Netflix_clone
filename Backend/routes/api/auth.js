const router = require("express").Router()
const { Newuser } = require("../../models/user")

router.post("/register", async (req, res) => {
    const userdata = new Newuser({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    })

    try {
        const user = await userdata.save()
        res.status(201).json(user)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
})

module.exports = router