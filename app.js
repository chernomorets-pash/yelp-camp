const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello from Yelp Camp!')
})

app.listen(3000, () => {
    console.log("Serving in port 3000")
})