module.exports = {
  siteMetadata: {
    title: "Akilesh Rao",
  },
  plugins: [`gatsby-plugin-sass`, {
    resolve: 'gatsby-plugin-react-svg',
    options: {
      rule: {
        include: /assets/
      }
    }
  }],
};
