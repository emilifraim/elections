// rfc
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const SelectListGroup = ({ name, value, error, info, onChange, options, label }) => {
	const selectOptions = options.map((option) => (
		<option key={option.label} value={option.value}>
			{option.label}
		</option>
	));
	return (
		<div className="form-group">
			<label className="custom-label" htmlFor={name}>
				{label}
			</label>
			<select
				// the class names form-control form-control-lg will always be there
				// but is-invalid will be there only if errors.name exsit
				className={classnames('form-control form-control-lg', {
					'is-invalid': error
				})}
				name={name}
				value={value}
				onChange={onChange}
			>
				{selectOptions}
			</select>
			{/* The first part test if errors.name return true as a boolean, and the second part will only be executed if it's true. */}
			{info && <small className="form-text text-muted">{info}</small>}
			{error && <div className="invalid-feedback">{error}</div>}
		</div>
	);
};

SelectListGroup.propTypes = {
	name: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired,
	info: PropTypes.string,
	error: PropTypes.string,
	onChange: PropTypes.func.isRequired,
	options: PropTypes.array.isRequired
};

export default SelectListGroup;
