module.exports = {
  plugins: [
    {
      resolve: "gatsby-theme-portfolio-minimal",
      options: {
        siteUrl: "https://prarupgurung.com.np/",
        manifestSettings: {
          favicon: "./content/images/favicon.png",
          siteName: "Portfolio | Prarup Gurung",
          shortName: "Portfolio",
          startUrl: "/",
          backgroundColor: "#FFFFFF",
          themeColor: "#000000",
          display: "minimal-ui",
        },
        contentDirectory: "./content",
        blogSettings: {
          entityName: 'Article',
          path: "/blog",
          usePathPrefixForArticles: true,
        },
      },
    },
  ],
};
