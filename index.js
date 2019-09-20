const { resolve } = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const app = express();
const upload = multer();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.set('view engine', 'pug');

app.use('/assets', express.static(resolve(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/ok', (Req, res) => {
    res.json('ok')
});

app.post('/contact', upload.fields([]), (req, res) => {
    console.log(req.body)
    res.setHeader(
        'AMP-Redirect-To',
        `http://localhost:3000/ok`
    );
    res.status(200).json({});
});

app.listen(3000, () => {
    console.log('listen on :3000');
});