const express = require('express');


const app = express()
const port = 3000

const router = require('./router/router.ts')

router(app);

app.listen(port, () => {
    console.log("app start at port 3000")
})
