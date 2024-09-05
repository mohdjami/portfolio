/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: "https://mohdjami.me", // Replace with your website URL
  generateRobotsTxt: true, // (optional) Generate a robots.txt file
  sitemapSize: 7000, // (optional) Maximum number of entries per sitemap file
  changefreq: "daily", // (optional) Change frequency of the pages
  priority: 0.7, // (optional) Priority of the pages
  // exclude: ["/admin/*"], // (optional) Exclude specific paths
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", allow: "/" },
      { userAgent: "*", disallow: "/admin" },
    ],
  },
};

module.exports = config;
