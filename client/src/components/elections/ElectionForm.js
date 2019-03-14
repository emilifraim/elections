import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { submitElection } from '../../actions/electionActions';
import TextFieldGroup from '../common/TextFieldGroup';
import SelectListGroup from '../common/SelectListGroup';
import { us_states } from './us_states';

class ElectionForm extends Component {
	constructor() {
		super();
		this.state = {};
	}

	render() {
		const { street, street2, city, state, zip, errors, onChange, onSubmit } = this.props;

		return (
			<div className="row">
				<div className="col-sm-12">
					<div className="card election-card-bg ">
						<h2 className="card-title text-center election-card-title mt-4 text-uppercase">
							Search Elections
						</h2>
						<div className="pfblock-line" />
						<p className="card-text text-center election-card-text-1 col-sm-8 offset-md-2">
							Enter the address where you are registered to vote
						</p>
						<div className="card-body col-sm-8 offset-md-2">
							<form noValidate onSubmit={onSubmit}>
								<TextFieldGroup
									placeholder="Street"
									name="street"
									type="text"
									value={street}
									label="Street:"
									onChange={onChange}
									error={errors.street}
								/>
								<TextFieldGroup
									placeholder="Street 2"
									name="street2"
									type="text"
									value={street2}
									label="Street 2:"
									onChange={onChange}
									error={errors.street2}
								/>

								<TextFieldGroup
									placeholder="City"
									name="city"
									type="text"
									value={city}
									label="City:"
									onChange={onChange}
									error={errors.city}
								/>

								<SelectListGroup
									placeholder="State"
									name="state"
									value={state}
									label="State:"
									onChange={onChange}
									options={us_states}
									error={errors.state}
								/>

								<TextFieldGroup
									placeholder="zip"
									name="zip"
									type="text"
									value={zip}
									label="Zip:"
									onChange={onChange}
									error={errors.zip}
								/>

								<input type="submit" className="btn custom-btn btn-block mt-4" />
							</form>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

ElectionForm.propTypes = {
	election: PropTypes.object.isRequired,
	submitElection: PropTypes.func.isRequired,
	errors: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
	election: state.election,
	errors: state.errors
});

export default connect(mapStateToProps, { submitElection })(ElectionForm);
