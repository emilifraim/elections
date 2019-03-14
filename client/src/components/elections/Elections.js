import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { submitElection } from '../../actions/electionActions';
import Spinner from '../common/Spinner';
import ElectionInfo from './ElectionInfo';
import ElectionForm from './ElectionForm';

class Elections extends Component {
	constructor() {
		super();
		this.state = {
			street: '',
			street2: '',
			city: '',
			state: '',
			zip: '',
			errors: {},
			isSubmitted: false
		};
	}

	onChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};

	static getDerivedStateFromProps(nextProps, prevState) {
		if (nextProps.errors) {
			return { errors: nextProps.errors };
		}
		return null;
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevProps.errors !== this.props.errors) {
			this.setState({ errors: this.props.errors });
		}
	}

	onChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};

	onSubmit = (e) => {
		e.preventDefault();
		this.setState({
			isSubmitted: false
		});

		const electiontData = {
			street: this.state.street.trim(),
			street2: this.state.street2.trim(),
			city: this.state.city.trim(),
			state: this.state.state.trim(),
			zip: this.state.zip.trim()
		};

		this.props.submitElection(electiontData, (val) => {
			if (val) {
				this.setState({
					street: '',
					street2: '',
					city: '',
					state: '',
					zip: '',
					errors: {},
					isSubmitted: true
				});
			}
		});
	};

	onGoBack = () => {
		this.setState({
			isSubmitted: false
		});
	};

	render() {
		const { election, loading, userData } = this.props.election;
		let electiontContent;
		if (loading) {
			electiontContent = <Spinner />;
		} else if (!this.state.isSubmitted) {
			electiontContent = (
				<ElectionForm
					street={this.state.street}
					street2={this.state.street2}
					city={this.state.city}
					state={this.state.state}
					zip={this.state.zip}
					errors={this.state.errors}
					onChange={this.onChange}
					onSubmit={this.onSubmit}
				/>
			);
		} else if (election === null || loading || Object.keys(election).length === 0) {
			electiontContent = <Spinner />;
		} else {
			electiontContent = <ElectionInfo election={election} userData={userData} />;
		}

		return (
			<div className="election-container">
				<div className="container">
					{this.state.isSubmitted ? (
						<button className="btn custom-btn btn-block mb-4" onClick={this.onGoBack}>
							Go Back
						</button>
					) : null}
					{electiontContent}
				</div>
			</div>
		);
	}
}

Elections.propTypes = {
	election: PropTypes.object.isRequired,
	submitElection: PropTypes.func.isRequired,
	errors: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
	election: state.election,
	errors: state.errors
});

export default connect(mapStateToProps, { submitElection })(Elections);
