import React, { Fragment, useEffect } from 'react';

import SearchBar from './components/layout/SearchBar';
import AddButton from './components/layout/AddButton';
import Logs from './components/logs/Logs';
import AddLogModal from './components/logs/AddLogModal';
import EditLogModal from './components/logs/EditLogModal';
import AddTechModal from './components/techs/AddTechModal';
import TechListModal from './components/techs/TechListModal';

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';

const App = () => {
	useEffect(() => {
		// init materialize JS
		M.AutoInit();
	});

	return (
		<Fragment>
			<SearchBar />
			<div className="container">
				<AddButton />
				<AddLogModal />
				<EditLogModal />
				<AddTechModal />
				<TechListModal />
				<Logs />
			</div>
		</Fragment>
	);
};

export default App;
