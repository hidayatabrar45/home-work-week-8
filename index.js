const express = require('express');
const app = express();
const port = 3000;
const router = require('./routes/dvdrental');

app.use(router)
app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.listen(port, () => {
    console.log(`example app listening on port ${port}`)
});