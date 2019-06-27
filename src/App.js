import React, { useEffect } from 'react';

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';

const App = () => {
	useEffect(() => {
		// init materialize JS
		M.AutoInit();
	});

	return (
		<div>
			<h1>bilu</h1>
		</div>
	);
};

export default App;
