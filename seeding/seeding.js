//pool untuk connect ke db
const pool = require('../queries.js');
const fs = require('fs');

const seedQuery = fs.readFileSync('./seeding.sql', { encoding: utf-8});

pool.query(seedQuery, (err, res) => {
    if(err) {
        throw err; //error handler
    }
    console.log(res);
    console.log('seeding completed & success');
    pool.end();
});

