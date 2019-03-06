import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Helmet from 'react-helmet'

export default () => (
  <StaticQuery
    query={graphql`
      query helmetQuery {
        site {
          siteMetadata {
            title
            author
            imageUrl
            description
            keywords
          }
        }
      }
  `}
    render={data => (
      <Helmet>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
        />
        <meta name="description" content={data.site.siteMetadata.description} />
        <meta name="keywords" content={data.site.siteMetadata.keywords} />
        <title>{data.site.siteMetadata.title}</title>
        <html lang="en" />
        {/* Google / Search Engine Meta Tags */}
        <meta itemprop="name" content={data.site.siteMetadata.author} /> />
        <meta
          itemprop="description"
          content={data.site.siteMetadata.description}
        />
        <meta itemprop="image" content={data.site.siteMetadata.imageUrl} /> />
        {/* Favicons */}
        <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png?v=xQdbY6n75P"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png?v=xQdbY6n75P"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png?v=xQdbY6n75P"/>
        <link rel="manifest" href="/icons/site.webmanifest?v=xQdbY6n75P"/>
        <link rel="mask-icon" href="/icons/safari-pinned-tab.svg?v=xQdbY6n75P" color="#455bdc"/>
        <link rel="shortcut icon" href="/icons/favicon.ico?v=xQdbY6n75P"/>
        <meta name="msapplication-TileColor" content="#2d89ef"/>
        <meta name="msapplication-config" content="/icons/browserconfig.xml?v=xQdbY6n75P"/>
        <meta name="theme-color" content="#455bdc"/>
        {/* fonts */}
        <link href="https://fonts.googleapis.com/css?family=Arvo:400,700" rel="stylesheet"/>
      </Helmet>
    )}
  />
)
