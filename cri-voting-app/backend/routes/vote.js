const express = require('express');
const router = express.Router();
const Vote = require('../models/voteModel');

// Endpoint to cast a vote
router.post('/', async (req, res) => {
    const { cricketer } = req.body;
    try {
        await Vote.incrementVote(cricketer);
        res.status(200).send({ message: 'Vote cast successfully!' });
    } catch (error) {
        res.status(500).send({ error: 'Error casting vote' });
    }
});

// Endpoint to get results
router.get('/results', async (req, res) => {
    try {
        const results = await Vote.getResults();
        res.status(200).send(results);
    } catch (error) {
        res.status(500).send({ error: 'Error fetching results' });
    }
});

module.exports = router;