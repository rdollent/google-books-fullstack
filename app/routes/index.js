    
const express = require('express');
const router = express.Router();

// landing page
router.get('/hello', (req, res) => {
    res.json('hellloooo!!!');
});


module.exports = router;