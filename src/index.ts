const express = require('express');


const app = express()
const port = process.env.PORT || 3000
const router = require('./router/router')

router(app);

app.listen(port, () => {
    console.log(`app start at port ${port}`)
})
