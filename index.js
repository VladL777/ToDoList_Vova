const express = require('express')

const app = express()

const PORT = process.env.PORT || 3000

app.get('/index', (req, res) => {
    res.send("HELLO YOU ALL!!!")
})

app.listen(PORT, () => {
    console.log('Server has been started.');
})

