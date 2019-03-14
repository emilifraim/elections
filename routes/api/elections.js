const express = require('express');
const router = express.Router();
const axios = require('axios');

const validateElectionInput = require('../../validation/election');

router.post('/', (req, res) => {
	let data = req.body;
	// console.log(data);

	const { errors, isValid } = validateElectionInput(data);
	if (!isValid) {
		return res.status(400).json(errors);
	} else {
		let state = data.state.toLowerCase();
		let city = data.city.toLowerCase().split(' ').join('_');
		let url = `https://api.turbovote.org/elections/upcoming?district-divisions=ocd-division/country:us/state:${state},ocd-division/country:us/state:${state}/place:${city}`;
		// console.log(state, city, url);
		const axiosConfig = {
			headers: {
				accept: 'application/json'
			}
		};
		axios
			.get(url, axiosConfig)
			.then((response) => {
				return res.json([ response.data[0], data ]);
			})
			.catch((error) => {
				console.log(error);
			});
	}
});

module.exports = router;
