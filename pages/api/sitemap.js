import nc from "next-connect";
const handler = nc();
export default handler.get(async (req, res) => {
  // Get the all Blog posts

  const { createWriteStream } = require("fs");
  const { SitemapStream } = require("sitemap");
  const sitemap = new SitemapStream({
    hostname: "https://itsmebravo.dev",
  });
  const writeStream = createWriteStream("./public/sitemap.xml");

  sitemap.pipe(writeStream);

  // Writing static pages to sitemap
  sitemap.write({ url: "/", changefreq: "daily", priority: 1 });
  sitemap.write({ url: "/art/", changefreq: "daily", priority: 0.8 });
  sitemap.write({ url: "/stats/", changefreq: "daily", priority: 0.8 });
  sitemap.write({ url: "/contact/", changefreq: "daily", priority: 0.8 });
  sitemap.write({ url: "/resume/", changefreq: "daily", priority: 0.8 });

  sitemap.end();

  // Send a message after process done
  res.status(200).json({ message: "Done" });
});
