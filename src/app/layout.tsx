import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "~/app/globals.css";
import { BrowserTitleBarColor } from "~/components/BrowserTitleBarColor";
import site from "~/site";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(site.SITE_URL),
  title: site.SITE_NAME,
  description: site.SITE_DESC,
  keywords: site.SITE_KEYWORDS,
  openGraph: {
    type: "website",
    title: site.SITE_NAME,
    siteName: site.SITE_NAME,
    description: site.SITE_DESC,
    url: site.SITE_URL,
    locale: "en_US",
    images: [
      {
        url: site.SITE_IMAGE,
      },
    ],
  },
  twitter: {
    title: site.SITE_NAME,
    description: site.SITE_DESC,
    card: "summary_large_image",
    site: site.SITE_URL,
    images: [
      {
        url: site.SITE_IMAGE,
      },
    ],
  },
  alternates: {
    canonical: site.SITE_URL,
  },
};

const htmlHello = `
console.log(\`%c
<>
Hi! I'm Pablo, the owner of this website.
What are you doing here? Is there something wrong?
You can contact me at pablo@pablopunk.com
Or open an issue/PR at ${site.SITE_REPO}
</>\n
\`, "color:royalblue");
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script data-goatcounter="/goat" async src="/count.js"></script>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicon/safari-pinned-tab.svg"
          color="#2a999d"
        />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <meta name="msapplication-TileColor" content="#00aba9" />
        <meta
          name="msapplication-config"
          content="/favicon/browserconfig.xml"
        />
        <BrowserTitleBarColor />
        <script src="https://app.lemonsqueezy.com/js/lemon.js" defer />
      </head>
      <body className={inter.className}>
        <nav className="flex justify-end items-center px-4 py-2">
          <a
            href="https://pablopunk.com"
            className="font-bold text-sm text-neutral-8 hover:text-blue transition-colors"
          >
            made by @pablopunk
          </a>
        </nav>
        <div className="p-3 max-w-screen-xl mx-auto">
          <main>{children}</main>
        </div>
        <script dangerouslySetInnerHTML={{ __html: htmlHello }} async />
      </body>
    </html>
  );
}
