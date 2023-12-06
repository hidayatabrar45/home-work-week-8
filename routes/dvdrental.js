const pool = require('../queries');
const express = require('express');
const router = express.Router();

//REST API: GET POST UPDATE DELETE
//Soal 2 :

//1. Menampilkan data seluruh list film
router.get('/film', (req, res) => {
    const query = 'SELECT * FROM film'

    pool.query(query, (err, result) => {
        if(err){
            throw err;
        } 

        res.status(200).json(result.rows);
    })
});


//2. Menampilkan data film tertentu berdasarkan id
router.get('/film/:film_id', (req, res) => {
    const {film_id} = req.params;
    const query = `SELECT * FROM film WHERE film_id = $1`;

    pool.query(query, [film_id], (err, result) => {
        if(err) throw err;
        res.status(200).json(result.rows[0]);
    });
});


//3. Menampilkan data list category
router.get('/category', (req, res) => {
    const query = 'SELECT * FROM category'

    pool.query(query, (err, result) => {
        if(err){
            throw err;
        } 

        res.status(200).json(result.rows);
    })
});

//4. Menampilkan data list film berdasarkan category
router.get('/film/category/:category_id', (req, res) => {
    const {category_id} = req.params;

    const query = `
    SELECT c.category_id, f.film_id, c.name category_name, f.title, f.description, f.release_year, f.language_id, f.rental_duration, f.rental_rate, f.length, f.replacement_cost, f.rating, f.special_features, f.fulltext
    FROM film f
    JOIN film_category fc ON f.film_id = fc.film_id
    JOIN category c ON fc.category_id = c.category_id
    WHERE c.category_id = $1`;

    pool.query(query, [category_id] ,(err, result) => {
        if(err) throw err;
        res.status(200).json(result.rows);
    })
});




module.exports = router
