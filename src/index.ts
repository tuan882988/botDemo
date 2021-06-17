const express = require('express');
const bodyParser = require('body-parser')
const router = require('./router/router')

const port = process.env.PORT || 3000
const app = express()
    .use(bodyParser.json());
router(app);

app.listen(port, () => {
    console.log(`app start at port ${port}`)
})
