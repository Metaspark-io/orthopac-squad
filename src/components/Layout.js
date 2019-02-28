import React from 'react'

import Footer from './Footer'
import Helmet from './Helmet'
import Ribbon from './Ribbon'

import './style.scss'

const Layout = ({ children }) => (
  <React.Fragment>
    <Helmet/>
    <Ribbon/>
    {children}
    <Footer/>
  </React.Fragment>
)

export default Layout
