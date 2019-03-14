// rfc
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const TextFieldGroup = ({ name, placeholder, value, label, error, info, type, onChange, disabled }) => {
	return (
		<div className="form-group">
			<label className="custom-label" htmlFor={name}>
				{label}
			</label>
			<input
				type={type}
				// the class names form-control form-control-lg will always be there
				// but is-invalid will be there only if errors.name exsit
				className={classnames('form-control form-control-lg', {
					'is-invalid': error
				})}
				placeholder={placeholder}
				name={name}
				value={value}
				onChange={onChange}
				disabled={disabled}
			/>
			{/* The first part test if errors.name return true as a boolean, and the second part will only be executed if it's true. */}
			{info && <small className="form-text text-muted">{info}</small>}
			{error && <div className="invalid-feedback">{error}</div>}
		</div>
	);
};

TextFieldGroup.propTypes = {
	name: PropTypes.string.isRequired,
	placeholder: PropTypes.string,
	value: PropTypes.string.isRequired,
	info: PropTypes.string,
	error: PropTypes.string,
	type: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	disabled: PropTypes.string
};

TextFieldGroup.defaultProps = {
	type: 'text'
};
export default TextFieldGroup;
