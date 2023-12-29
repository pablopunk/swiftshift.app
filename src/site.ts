const mainUrl = "swiftshift.app";
const vercelUrl = undefined; // process.env.VERCEL_URL;
const siteUrl =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : `https://${vercelUrl || mainUrl}`;

const site = {
  SITE_URL: siteUrl,
  SITE_NAME: "Swift Shift | Manage your mac's windows like a pro",
  SITE_DESC:
    "Swift Shift is a macOS app that lets you assign shortcuts to move & resize windows. It's the easiest and fastest way to organize your workspace",
  SITE_IMAGE: `${siteUrl}/header-light.png`,
  SITE_COPYRIGHT: "Pablo Varela",
  SITE_REPO: "https://github.com/pablopunk/swiftshift.app",
};

export default site;
