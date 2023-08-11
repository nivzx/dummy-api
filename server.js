const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 8080;

// Middleware
app.use(bodyParser.json());

// Endpoint to handle POST requests
app.post('/', (req, res) => {
    const location = req.body.location;
    console.log(`Received location: ${location}`);
    res.status(200).send('Location received');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
