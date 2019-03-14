const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateElectionInput(data) {
	let errors = {};

	data.state = !isEmpty(data.state) ? data.state : '';

	if (!Validator.isLength(data.street, { min: 2, max: 30 })) {
		errors.street = 'Street must be between 2 to 30 characters';
	}

	if (!Validator.isLength(data.city, { min: 2, max: 30 })) {
		errors.city = 'City must be between 2 to 30 characters';
	}

	if (data.state == 0 || Validator.isEmpty(data.state)) {
		errors.state = 'must select a state';
	}

	if (!Validator.isLength(data.zip, { min: 2, max: 5 })) {
		errors.zip = 'Zipcode must be between 2 to 30 characters';
	}

	if (!Validator.isNumeric(data.zip)) {
		errors.zip = 'Zipcode must be a number';
	}

	if (Validator.isEmpty(data.street)) {
		errors.street = 'Street field is required';
	}

	if (Validator.isEmpty(data.city)) {
		errors.city = 'City field is required';
	}

	if (Validator.isEmpty(data.zip)) {
		errors.zip = 'Message field is required';
	}

	return {
		errors: errors,
		isValid: isEmpty(errors)
	};
};
