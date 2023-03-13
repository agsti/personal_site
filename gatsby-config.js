module.exports = {
  siteMetadata: {
    title: `Agusti Bau`,
    author: {
      name: `Agusti Bau`,
      summary: `Bending software for fun and for a profit`,
    },
    description: `My online presence.`,
    siteUrl: `https://agustibau.com/`,
    social: {
      linkedin: "https://www.linkedin.com/in/agustibau/",
      twitter: `agstib`,
      github: `agsti`,
      email: `agustibau@gmail.com`,
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/projects`,
        name: `project`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              linkImagesToOriginal: false,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
          `gatsby-plugin-sass`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: "gatsby-plugin-matomo",
      options: {
        siteId: "1",
        matomoUrl: "https://matomo.agustibau.com",
        siteUrl: "agustibau.com",
      },
    },
    // `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Starter Blog`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#f9f8f8`,
        theme_color: `#5D21D0`,
        display: `minimal-ui`,
        icon: `content/assets/favicon.png`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Merriweather Sans\:400,700`],
        display: "swap",
      },
    },
    // {
    //   resolve: `gatsby-plugin-gitalk`,
    //   options: {
    //     config: {
    //       clientID: "68c3e0fd9ae7090937cb",
    //       clientSecret: `${process.env.GITHUB_SECRET}`,
    //       repo: "personal_site",
    //       owner: "agsti",
    //       admin: ["agsti"],
    //     },
    //   },
    // },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
