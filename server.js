const path = require('path');
const express = require('express');
const app = express();

const cors = require('cors')

const PORT = process.env.PORT || 3500;

app.use(cors())
app.use(express.static(__dirname))

app.get('/', (req, res)=>{
    console.log(req.url, req.method)
    res.sendFile(path.join(__dirname, 'index.html'))
})

app.listen(PORT, ()=>{console.log(`Server running on port ${PORT}`)});