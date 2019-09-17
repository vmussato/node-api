var express = require('express');
    router = express.Router();

var itemCtrl = require('./item-controller');

router.get('/hello', itemCtrl.getWorld);

router.post('/hello/:foo/:bar', (req, res) => {
    res.json({
        result: 'Hello World',
        data: [
            req.params.foo,
            req.params.bar
        ]
    })
})

router.post('/hello', (req, res) => {
    res.json({
        result:'post was sent',
        data: req.body
    })
})


module.exports = router;