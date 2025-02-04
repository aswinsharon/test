const express = require('express');

const app = express();
app.use(express.json());
app.post('/payment', (req, res) => {
    const body = req.body;
    console.log('req.body', JSON.stringify(body));
    res.json({
        "message": "authorized"
    })
})

app.listen(8080, () => {
    console.log('server started at port 3000')
})
