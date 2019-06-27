module.exports = {
  siteMetadata: {
    title: 'OrthoPAC Squad',
    author: 'AAOS',
    imageUrl: 'https://i.imgur.com/WMHXT1j.png',
    description: 'OrthoPAC Squad: Heroes of the AAOS OrthoPAC',
    keywords: `AAOS, OrthoPAC, PAC, orthopaedic, Doctor, surgeon, donate, join`,
    siteUrl: `https://orthopac-squad.org`
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${ __dirname }/src/images`
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'OrthoPAC Squad',
        short_name: 'OrthoPAC Squad',
        start_url: '/',
        background_color: '#3a4ddb',
        theme_color: '#3a4ddb',
        display: 'standalone',
        // icon: 'src/images/gatsby-icon.png',
        orientation: 'portrait'
      }
    },
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-135683649-1',
        // Setting this parameter is optional (requried for some countries such as Germany)
        anonymize: true
      }
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-remove-serviceworker`,

  ]
}
