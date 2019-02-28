import React from 'react';

import Helmet from './helmet';
import Ribbon from './ribbon';
import VideoHero from './videoHero';
import Nav from './nav';
import Issues from './issues';
import Carousel from './carousel';

import './style.scss';

const Layout = ({ children }) => (
	<React.Fragment>
    <Helmet/>
    <Ribbon/>
    <VideoHero/>
    <Nav/>
    <Issues/>
    <Carousel/>
	</React.Fragment>
);

export default Layout;
