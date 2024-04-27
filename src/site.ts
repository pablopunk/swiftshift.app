export const mainUrl = "https://swiftshift.app"

type NodeEnv = "development" | "production"
interface ProcessEnv {
	NODE_ENV: NodeEnv
	NEXT_PUBLIC_VERCEL_URL?: string
}
interface Process {
	env: ProcessEnv
}

const processEnv = (process as any as Process).env
const vercelUrl = processEnv.NEXT_PUBLIC_VERCEL_URL
const url =
	processEnv.NODE_ENV === "development"
		? "http://localhost:4321"
		: `https://${vercelUrl || mainUrl}`

const site = {
	SITE_URL: url,
	SITE_NAME: "Swift Shift | Manage your mac's windows like a pro",
	SITE_DESC:
		"Swift Shift is a macOS app that lets you assign shortcuts to move & resize windows. It's the easiest and fastest way to organize your workspace.",
	SITE_IMAGE: `${url}/header-light-extended.png`,
	SITE_COPYRIGHT: "Pablo Varela",
	SITE_REPO: "https://github.com/pablopunk/swiftshift.app",
	SITE_KEYWORDS: [
		"mac",
		"os",
		"app",
		"macosapp",
		"window",
		"manager",
		"swift",
		"shift",
		"shortcut",
		"move",
		"resize",
		"keyboard",
		"productivity",
		"workspace",
		"organize",
		"efficient",
		"fast",
		"easy",
		"free",
		"open",
		"source",
		"pablopunk",
		"pablovarela",
		"swiftshift",
	],
}

export default site
