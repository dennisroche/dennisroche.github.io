module.exports = {
  blogPostDir: "sample-posts", // The name of directory that contains your posts.
  blogAuthorDir: "sample-authors", // The name of directory that contains your 'authors' folder.
  blogAuthorId: "casper", // The default and fallback author ID used for blog posts without a defined author.
  siteTitle: "Dennis Roche", // Site title.
  siteTitleAlt: "Dennis Roche - Technical Lead", // Alternative site title for SEO.
  siteLogo: "https://dennisroche.github.io/logos/logo-1024.png", // Logo used for SEO and manifest. e.g. "/logos/logo-1024.png",
  siteUrl: "https://dennisroche.github.io", // Domain of your website without pathPrefix.
  pathPrefix: "", // Prefixes all links. For cases when deployed to example.github.io/gatsby-starter-casper/.
  siteDescription:
    "A Casper themed GatsbyJS stater based on the Advanced Starter.", // Website description used for RSS feeds/meta description tag.
  siteCover: "https://dennisroche.github.io/images/blog-cover.jpg", // Optional, the cover image used in header for home page. e.g: "/images/blog-cover.jpg",
  siteNavigation: true, // If navigation is enabled the Menu button will be visible
  siteRss: "/rss.xml", // Path to the RSS file.
  siteRssAuthor: "Casper User", // The author name used in the RSS file
  // siteFBAppID: "1825356251115265", // optional, sets the FB Application ID for using app insights
  sitePaginationLimit: 10, // The max number of posts per page.
  // googleAnalyticsID: "UA-111982167-1", // GA tracking ID.
  // disqusShortname: "https-vagr9k-github-io-gatsby-advanced-starter", // enables Disqus comments, visually deviates from original Casper theme.
  siteSocialUrls: [
    "https://github.com/dennisroche/",
    "https://twitter.com/dennisroche"
  ],
  postDefaultCategoryID: "Tech", // Default category for posts.
  // Links to social profiles/projects you want to display in the navigation bar.
  userLinks: [
    {
      label: "GitHub",
      url: "https://github.com/dennisroche",
      iconClassName: "fa fa-github"
    },
    {
      label: "Twitter",
      url: "https://twitter.com/dennisroche",
      iconClassName: "fa fa-twitter"
    }
  ],
  // Copyright string for the footer of the website and RSS feed.
  copyright: {
    label: "Dennis Roche",
    year: "2018",
  },
  themeColor: "#c62828", // Used for setting manifest and progress theme colors.
  backgroundColor: "#e0e0e0", // Used for setting manifest background color.
  promoteGatsby: true // Enables the GatsbyJS promotion information in footer.
};
