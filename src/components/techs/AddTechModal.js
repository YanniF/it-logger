import React, { useState } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';

const AddTechModal = () => {
	const [ firstName, setFirstName ] = useState('');
	const [ lastName, setLastName ] = useState('');

	const onSubmit = () => {
		if (firstName === '' || lastName === '') {
			M.toast({ html: 'Please enter the first and last name' });
		}
		else {
			console.log(firstName, lastName);

			setFirstName('');
			setLastName('');
		}
	};

	return (
		<div id="add-tech-modal" className="modal">
			<div className="modal-content">
				<h4>New Technician</h4>
				<div className="row" style={{ marginTop: '25px' }}>
					<div className="input-field">
						<input
							type="text"
							name="firstName"
							id="firstName"
							value={firstName}
							onChange={(e) => setFirstName(e.target.value)}
						/>
						<label htmlFor="firstName" className="active">
							First Name
						</label>
					</div>
				</div>
				<div className="row">
					<div className="input-field">
						<input
							type="text"
							name="lastName"
							id="lastName"
							value={lastName}
							onChange={(e) => setLastName(e.target.value)}
						/>
						<label htmlFor="lastName" className="active">
							Last Name
						</label>
					</div>
				</div>
			</div>
			<div className="modal-footer" style={{ paddingRight: '24px', marginBottom: '18px' }}>
				<a href="#!" onClick={onSubmit} className="btn modal-close waves-effect waves-blue blue darken-2">
					Enter
				</a>
			</div>
		</div>
	);
};

export default AddTechModal;
