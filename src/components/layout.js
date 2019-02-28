import React from 'react';

import Helmet from './helmet';
import Ribbon from './ribbon';

import './style.scss';

const Layout = ({ children }) => (
	<React.Fragment>
    <Helmet/>
    <Ribbon/>
    <h5 class="h1">hello</h5>
	</React.Fragment>
);

export default Layout;
