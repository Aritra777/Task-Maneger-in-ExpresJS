const express = require('express');
const router = express.Router();

router.route('/').get((req, res) => {
    res.send("all tasks");
})

router.route('/:id').get((req, res) => {
    res.send(`This is book no. ${req.params.id}`);
})

module.exports = router;