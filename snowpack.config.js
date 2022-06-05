// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration

/** @type {import("snowpack").SnowpackUserConfig } */
// eslint-disable-next-line no-undef
module.exports = {
	mount: {
		public: "/",
		src: "/dist"
	},
	plugins: [
		"@snowpack/plugin-sass"
	],
	packageOptions: {
		/* ... */
	},
	devOptions: {
		/* ... */
	},
	buildOptions: {
		out: "./build"
	},
	env: {
		YT_KEY: "AIzaSyCuBCPLT24_PpjpoXKg-PSo7oJ6sSfPPjY"
	}
};
