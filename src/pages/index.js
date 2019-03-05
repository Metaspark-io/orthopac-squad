import React from 'react'

import Layout from '../components/Layout'
import VideoHero from '../components/VideoHero'
import Nav from '../components/Nav'
import { AskList, AskThermometer } from '../components/Ask'
import Issues from '../components/Issues'
import Carousel from '../components/Carousel'

const IndexPage = () => (
  <Layout>
    <VideoHero/>
    <Nav/>
    <div className="ask-bg py-5">
      <AskList/>
    </div>
    <Issues/>
    <div className="ask-bg py-5">
      <Carousel/>
    </div>
    <div className="py-5">
      <AskThermometer/>
    </div>
  </Layout>
)

export default IndexPage
