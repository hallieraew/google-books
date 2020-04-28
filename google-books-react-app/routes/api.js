const axios = require("axios");
require("dotenv").config();
const router = require("express").Router();
const Book = require("../models/book");
const apiKey = API_KEY;

router.get("/search", (req, res) => {
	let query = req.query.q;

	axios
		.get(
			`https://www.googleapis.com/books/v1/volumes?q=${query}&key=${apiKey}&country=US`
		)
		.then(({ data: { results } }) => res.json(results))
		.catch(err => res.status(422).json(err));
});

router.get("/saved", (req, res, next) => {
	Book.find({})
		.then(data => res.json(data))
		.catch(next);
});

router.post("/saved", (req, res, next) => {
	Book.create(req.body)
		.then(data => res.json(data))
		.catch(next);
});

router.delete('/saved:id', (req, res, next) => {
    Book.deleteOne({_id: req.param.id})
    .then(data => res.json({success: true}))
    .catch(next)
});

module.exports = router;
