import React from 'react'

import Layout from '../components/Layout'
import VideoHero from '../components/VideoHero'
import Nav from '../components/Nav'
import Issues from '../components/Issues'
import Carousel from '../components/Carousel'

const IndexPage = () => (
  <Layout>
    <VideoHero/>
    <Nav/>
    <Issues/>
    <Carousel/>
  </Layout>
)

export default IndexPage
