import React from 'react'

import Layout from '../components/Layout'
import VideoHero from '../components/VideoHero'
import Nav from '../components/Nav'
import Ask from '../components/Ask'
import Issues from '../components/Issues'
import Carousel from '../components/Carousel'

const IndexPage = () => (
  <Layout>
    <VideoHero/>
    <Nav/>
    <Ask/>
    <div class="issues-bg">
      <Issues/>
    </div>
    <Carousel/>
    <Ask/>
  </Layout>
)

export default IndexPage
