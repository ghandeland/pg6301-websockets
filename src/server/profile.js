const express = require("express");
const router = express.Router();

router.get("/api/profile", (req, res) => {
    console.log("router works");
    res.json(testProfile);
})


const testProfile = {
    email: "test@mail",
    name: "Johnny P",
    age: 22
}
module.exports = router;