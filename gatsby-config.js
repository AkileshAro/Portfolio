module.exports = {
  siteMetadata: {
    title: "Akilesh Rao",
    siteUrl: "https://akilesh-rao.netlify.app"
  },
  plugins: [`gatsby-plugin-sass`, `gatsby-plugin-react-helmet`, 'gatsby-plugin-robots-txt',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Akilesh Rao`,
        short_name: `Akilesh Rao`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        icon: "src/assets/favicon.svg",
        icon_options: {
          purpose: "any maskable"
        },
        display: 'standalone'
      }
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/
        },
      }
    },
    `gatsby-plugin-offline`],
};
