module.exports = {
  siteMetadata: {
    title: "Lane Garner - Web & Mobile Developer",
    author: "Lane Garner",
    subtitle: "Web & Mobile",
    subtitle2: "Developer",
    image: "/og-image.png",
    twitterUsername: "lanegarner",
    url: "https://lanegarner.dev",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Lane Garner - Web & Mobile Developer & Designer`,
        short_name: `Lane Garner`,
        start_url: `/`,
        display: `standalone`,
        icon: `src/images/icon.png`,
      },
    },
    "gatsby-plugin-breakpoints",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sass",
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "src",
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "blog images",
        path: `${__dirname}/src/posts`,
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          "gatsby-remark-relative-images",
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 750,
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    },
  ],
}
