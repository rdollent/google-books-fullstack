    
const express = require("express");
const router = express.Router();

// landing page
router.get("/", function(req, res) {
    res.send("hello!!!!");
});