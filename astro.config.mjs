import sitemap from "@astrojs/sitemap"
import tailwind from "@astrojs/tailwind"
import { defineConfig } from "astro/config"
import sw from "astrojs-service-worker"
import { mainUrl } from "./src/site"

// https://astro.build/config
export default defineConfig({
	integrations: [tailwind(), sitemap(), sw()],
	server: {
		host: true, // expose server to network
	},
	image: {
		domains: [],
	},
	build: {
		inlineStylesheets: "always",
	},
	compressHTML: true,
	prefetch: true,
	output: "static",
	site: mainUrl,
})
