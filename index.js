const express = require('express');
const app = express();
const PORT = 8080;

var request = require('request');
var router = express.Router();

app.use( express.json())

app.use(router);

app.listen(
    PORT, 
    () => console.log(`It's Alive on http://localhost:${PORT}`)
)

router.get('/quote/random', (req, res, next) => {
    request({
        uri: 'https://zenquotes.io/api/random',

    }).pipe(res)
})

router.get('/quote/today', (req, res, next) => {
    request({
        uri: 'https://zenquotes.io/api/today',
    }).pipe(res)
})

router.get('/profile-pic', (req, res, next) => {
    request({
        uri: 'https://api.dicebear.com/5.x/big-smile/svg?seed=Felix'
    }).pipe(res)
})


module.exports = router;