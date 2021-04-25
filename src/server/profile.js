const express = require("express");
const router = express.Router();

router.get("/api/profile", (req, res) => {
    
    const authorization = req.header("Authorization")
    if(!authorization) {
        return res.send(401);
    }
    
    res.json(testProfile);
})


const testProfile = {
    email: "test@mail",
    name: "Johnny P",
    age: 22
}
module.exports = router;