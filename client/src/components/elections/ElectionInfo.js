import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Moment from 'react-moment';

class ElectionInfo extends Component {
	render() {
		const { election, userData } = this.props;

		const districtDivisions = election['district-divisions'].map((division, index) => {
			return (
				<ul className="mb-4" key={index}>
					<h3 className="district-divisions-title">District Divisions</h3>

					<li className="district-divisions">
						election-authority-level: <span>{division['election-authority-level']}</span>
					</li>
					<li className="district-divisions">
						ocd-id: <span>{division['ocd-id']}</span>
					</li>
					<li className="district-divisions">
						voter-registration-authority-level<span>{division['voter-registration-authority-level']}</span>
					</li>

					{division['voting-methods'].map((method, i) => {
						return (
							<ul className="mb-4" key={i}>
								<h3 className="district-divisions-title">Voting Method</h3>

								<li className="voting-methods">
									primary:<span>
										{method['primary'] !== undefined ? method['primary'] ? 'YES' : 'No' : 'N/A '}
									</span>
								</li>
								<li className="voting-methods">
									start:<span>
										{method['start'] !== undefined ? <Moment>{method['start']}</Moment> : 'N/A '}
									</span>
								</li>
								<li className="voting-methods">
									end:<span>
										{method['end'] !== undefined ? <Moment>{method['end']}</Moment> : 'N/A '}
									</span>
								</li>
								<li className="voting-methods">
									type:<span>{method['type'] !== undefined ? method['type'] : 'N/A '}</span>
								</li>
								<li className="voting-methods">
									ballot-request-deadline-received:<span>
										{method['ballot-request-deadline-received'] !== undefined ? (
											<Moment>{method['ballot-request-deadline-received']}</Moment>
										) : (
											'N/A '
										)}
									</span>
								</li>
								<li className="voting-methods">
									excuse-required:<span>
										{method['excuse-required'] !== undefined ? method['excuse-required'] ? (
											'YES'
										) : (
											'No'
										) : (
											'N/A '
										)}
									</span>
								</li>
								{method.instructions !== undefined ? (
									<li className="voting-methods">
										voting-id:{' '}
										{method.instructions['voting-id'] !== undefined ? (
											<span>{method.instructions['voting-id']}</span>
										) : (
											<span>N/A</span>
										)}
									</li>
								) : (
									<li className="voting-methods">
										instructions: <span>N/A</span>
									</li>
								)}
							</ul>
						);
					})}

					{division['voter-registration-methods'].map((regMethod, i) => {
						return (
							<ul className="mb-4" key={i}>
								<h3 className="district-divisions-title">Voter Registration Method</h3>

								<li className="voter-registration-methods">
									deadline-postmarked:<span>
										{regMethod['deadline-postmarked'] !== undefined ? (
											<Moment>{regMethod['deadline-postmarked']}</Moment>
										) : (
											'N/A '
										)}
									</span>
								</li>
								<li className="voter-registration-methods">
									type:<span>{regMethod['type'] !== undefined ? regMethod['type'] : 'N/A '}</span>
								</li>
								<li className="voter-registration-methods">
									ballot-request-deadline-received:
									<span>
										{regMethod['ballot-request-deadline-received'] !== undefined ? (
											<Moment>{regMethod['ballot-request-deadline-received']}</Moment>
										) : (
											'N/A '
										)}
									</span>
								</li>
								<li className="voter-registration-methods">
									deadline-online:<span>
										{' '}
										{regMethod['deadline-online'] !== undefined ? (
											<Moment>{regMethod['deadline-online']}</Moment>
										) : (
											'N/A '
										)}
									</span>
								</li>
								<li className="voter-registration-methods">
									url: <span>{regMethod['url'] !== undefined ? regMethod['url'] : 'N/A '}</span>
								</li>

								{regMethod.instructions !== undefined ? (
									<div>
										<li className="voter-registration-methods">
											signature:
											{regMethod.instructions['signature'] !== undefined ? (
												<span>{regMethod.instructions['signature']}</span>
											) : (
												<span>N/A</span>
											)}
										</li>

										<li className="voter-registration-methods">
											registration:
											{regMethod.instructions['registration'] !== undefined ? (
												<span>{regMethod.instructions['registration']}</span>
											) : (
												<span>N/A</span>
											)}
										</li>

										<li className="voter-registration-methods">
											idnumber:
											{regMethod.instructions['idnumber'] !== undefined ? (
												<span>{regMethod.instructions['idnumber']}</span>
											) : (
												<span>N/A</span>
											)}
										</li>
									</div>
								) : (
									<li className="voter-registration-methods">
										instructions: <span>N/A</span>
									</li>
								)}
							</ul>
						);
					})}
				</ul>
			);
		});

		return (
			<div className="row fade-in">
				<div className="col-md-12">
					<div className="card election-info-card-bg ">
						<h2 className="card-title text-center register-info-card-title mt-4">ELECTIONS DATA</h2>
						<div className="pfblock-line" />

						<div className="card-body col-sm-12 ">
							<div className="mb-4">
								<div className="info-text-1">
									Street:
									<span>{userData.street}</span>
								</div>
								<div className="info-text-1">
									Street 2:
									<span>{userData.street2}</span>
								</div>
								<div className="info-text-1">
									City:
									<span>{userData.city}</span>
								</div>
								<div className="info-text-1">
									State:
									<span>{userData.state}</span>
								</div>
								<div className="info-text-1">
									Zip:
									<span>{userData.zip}</span>
								</div>
							</div>
							<div className="mb-4">
								<p>{election['website']}</p>
								<p>{election['tpolling-place-url']}</p>
								<div className="info-text-1">
									Date:
									<span>
										<Moment>{election['date']}</Moment>
									</span>
								</div>
								<div className="info-text-1">
									Population:
									<span>{election['population']}</span>
								</div>
								<div className="info-text-1">
									polling-place-url:
									<span>{election['polling-place-url']}</span>
								</div>
								<div className="info-text-1">
									polling-place-url-shortened:
									<span>{election['polling-place-url-shortened']}</span>
								</div>

								<div className="info-text-1">
									Description:
									<span>{election['description']}</span>
								</div>
								<div className="info-text-1">
									ID:
									<span>{election['id']}</span>
								</div>
							</div>

							{districtDivisions}
						</div>
					</div>
				</div>
			</div>
		);
	}
}

ElectionInfo.propTypes = {
	election: PropTypes.object.isRequired
};

export default ElectionInfo;
