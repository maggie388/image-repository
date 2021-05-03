const router = require('express').Router();

const upload = require('../multer');

router.post('/', upload.array('photos'), (req, res) => {
    res.send('files uploaded');
})

module.exports = router;