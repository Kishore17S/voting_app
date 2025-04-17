const express = require('express');
const bodyParser = require('body-parser');
const voteRoutes = require('./routes/vote');
const app = express();

app.use(bodyParser.json());
app.use('/api/votes', voteRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Backend running on port ${PORT}`);
});