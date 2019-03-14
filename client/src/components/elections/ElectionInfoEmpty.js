import React, { Component } from 'react';

class ElectionInfoEmpty extends Component {
	render() {
		return (
			<div className="row fade-in">
				<div className="col-md-12">
					<div className="card election-info-card-bg ">
						<h2 className="card-title text-center register-info-card-title mt-4">ELECTIONS DATA</h2>
						<div className="pfblock-line" />

						<div className="card-body col-sm-12 ">
							<h2>No Election Data</h2>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default ElectionInfoEmpty;
